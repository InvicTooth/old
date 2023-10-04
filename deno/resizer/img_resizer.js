const fs = require('fs')
	, sharp = require('sharp')
	, chalk = require('chalk')
	, archiver = require('archiver')
	, del = require('del')
	
	, {promisify} = require('util')  
	, readdir = promisify(fs.readdir)
	, mkdir = promisify(fs.mkdir)
	, delay = promisify(setTimeout)
	, pipeline = promisify(require('stream').pipeline)
	
	, exec = promisify(require('child_process').execFile)
	, gif2webp_option = "-q 90 -mixed -m 6 -mt".split(/\s+/)
	
	, {Semaphore} = require('./my_semaphore.js')
	, [orgPath, destPath] = process.argv.slice(2,4)
	, width = 1920
	, height = 1080
	, wantedFormat = ['jpg', 'png', 'gif', 'jpeg', 'webp']
;

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://test:<password>@adelante-2mi4v.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	client.close();
});
*/
(async ()=>{
	const folders = await readdir(orgPath);
	const semaphore_gif = new Semaphore(2);
	
	// 하나씩 실행하고 싶다면 forEach/map을 쓰지말고 for문을 써라. 혹은 semaphore를 쓰자.
	// folders.forEach(async folder=>{
	for (let i = 0 ; i < folders.length ; i++){
		const folder = folders[i];
		const files = await readdir(orgPath+folder);
		console.time(folder);
		
		try{await mkdir(destPath+folder);}catch(e){}
		
		// foreach는 parallel하게 await 할 수 없다. map을 써서 Promise.all을 써야 한다. map의 경우 해당 리스트를 리턴하지만 여기선 그걸 사용하지는 않는다.
		//for await (const file of files){ 도 마찬가지로 동기인듯
		// https://lavrton.com/javascript-loops-how-to-handle-async-await-6252dd3c795/
		// foreach, filter, map, reduce 차이를 알자
		// https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319
		// await exec가 이상하게 동작할 때가 많고, npm semaphore module이 의도된 것과 다르게 동작할 때가 있다. 직접 semaphore를 구현했다.
		await Promise.all(files.map(async (file, index)=>{
			const dotindex = file.lastIndexOf('.');
			if (wantedFormat.includes(file.slice(dotindex+1) < 0))
				return console.log(file);
			
			if (file.slice(dotindex) === '.gif') {
				await semaphore_gif.take();
				const {stdout, stderr} = await exec('gif2webp.exe',
					gif2webp_option.concat(orgPath+folder+'/'+file,'-o', destPath+folder+'/'+file.substr(0,dotindex)+'.webp'));
				stderr.catch(e=>console.log(e));
				//if(stderr)console.log(stderr);
				semaphore_gif.release();
				return;
			}
			await pipeline(fs.createReadStream(orgPath+folder+'/'+file),
				sharp().webp({quality : 90}).resize(width, height, {fit: sharp.fit.inside, withoutEnlargement: true,}),
				fs.createWriteStream(destPath+folder+'/'+file.substr(0,dotindex)+'.webp'))
				.catch(err=>del(destPath+folder+'/'+file.substr(0,dotindex)+'.webp',{force:true}));
		}));
		console.timeEnd(folder);
		
		const archive = archiver('zip',{store:true});
		archive.on('warning',e=>console.log('WARNING',e.code));
		archive.on('error',e=>console.log('ERROR',e.code));
		const output = fs.createWriteStream(destPath+folder+'.zip');
		output.on('close',()=>console.log(folder+'.zip : '+(Math.round(archive.pointer()*100/2**20)/100)+' MB'));
		archive.pipe(output);
		archive.directory(destPath+folder,false);
		archive.finalize();
	}
})();





