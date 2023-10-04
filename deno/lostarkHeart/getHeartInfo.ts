import axiod from 'https://deno.land/x/axiod/mod.ts';
import { DOMParser, Element } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
import { Semaphore } from '../my_utils.ts';

class Person{
    id:string;
    location:string;
    name:string;
    exp:number;
    songs:[string, number][];
    emoters:[string, number][];
    presents:[string, number][];
    //except:boolean = false;
    constructor(id:string, location:string, name:string, exp:number, songs:[string, number][], emoters:[string, number][], presents:[string, number][]){
        this.id=id;
        this.location=location;
        this.name=name;
        this.exp=exp;
        this.songs=songs;
        this.emoters=emoters;
        this.presents=presents;
    }
}

const getDataFromWeb = async () => {
    /*
    Array.from(literable)
    [... literable]
    */
    const locationList:any = {};
    const links = Array.from(new DOMParser().parseFromString((await axiod.get("https://lostark.inven.co.kr/dataninfo/heart/")).data, "text/html")!
        .querySelectorAll('#listTable tbody tr'))
        .map(tr => {
            const link = tr.children[1].children[0].attributes.href;
            locationList[link.split('&c=')[1]] = tr.children[2].innerText.split(' > ')[0];
            return link;
        });

    console.time('start');
    //const responses = await Promise.all(links.map(link => axiod.get(link)));
    const sem = new Semaphore(10, 10);
    const responses = await Promise.all(links.map(async link => {
        await sem.take();
        const response = await axiod.get(link);
        sem.release();
        return response;
    }));
    console.timeEnd('start');
    console.log(responses.length);

    const people = responses.map(response => {
        const id = response.config.url!.split('&c=')[1];
        const dom = new DOMParser().parseFromString(response.data, 'text/html')!;
        const name = dom.querySelector('.common-title > .main')!.innerText;
        const exp = Array.from(dom.querySelectorAll('.exp_Table td'))
            .reduce((sum, node) => parseInt((node as Element).innerText) + sum, 0);

        const parseActions = (query:string) =>
            Array.from(dom.querySelectorAll(query))
                .map<[string, number]>(node => [node.children[0]?.innerText.trim(), parseInt(node.children[1]?.innerText.split(' ')[1])])
                .filter(([name, amount]) => name && amount < 500 && amount != 324);
                
        const songs = parseActions('.friendship_Music li');
        const emoters = parseActions('.friendship_Emote li');
        const presents = parseActions('.friendship_Present li > p');
        
        return new Person(id, locationList[id], name, exp, songs, emoters, presents);
    });
    await Deno.writeTextFile('./heartInfo.json', JSON.stringify(people, null ,'\t'));
}

const getInven = false;
if(getInven) await getDataFromWeb();
// deno run --allow-write --allow-read --allow-net './getHeartInfo.ts'

console.log('reading..');
const people:Person[] = JSON.parse(await Deno.readTextFile('./heartInfo.json'));

const th = people.reduce((th:string[], person) => {
    person.presents.forEach(([name, _amount]) => !th.includes(name) ? th.push(name):'');
    return th;
}, ['ID', '지역', '이름', '연주1', '연주1호감도', '연주2', '연주2호감도', '감정표현1', '감정표현1호감도', '감정표현2', '감정표현2호감도']);

const tds = people.map((person)=>{
    const row:any[] = [person.id, person.location, person.name];
    person.songs.forEach(([name, amount], index) => {
        row[3+index*2] = name;
        row[4+index*2] = amount;
    });
    person.emoters.forEach(([name, amount], index) => {
        row[7+index*2] = name;
        row[8+index*2] = amount;
    });
    person.presents.forEach(([name, amount]) => row[th.indexOf(name)] = amount);
    return row;
});

const table = [th, ...tds];
await Deno.writeTextFile('./heartInfo.csv', table.map((tr:any[]) => tr.join('\t')).join('\n'));