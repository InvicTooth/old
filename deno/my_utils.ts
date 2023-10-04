import {delay} from 'https://deno.land/std/async/delay.ts';

// semaphore constructor
export class Semaphore{
	max : number;
	cur : number;
	tick : number;
	async take(){
		let unlock=true;
		while(true){
			if(this.cur<this.max && unlock){
				this.cur++;
				unlock=false;
				break;
			}
			await delay(this.tick);
		}
	}
	release(){
		this.cur--;
	}

	constructor(maxSema:number, ms:number=1000){
		this.max = maxSema;
		this.tick = ms;
		this.cur = 0;
	}

}

export class Mutex extends Semaphore {
	constructor(ms:number = 1000){
		super(1,ms);
	}
}

/*
import { Semaphore, Mutex } from './my_semaphore.js';
import {delay} from 'https://deno.land/std/async/delay.ts';
*/
/*
// test start
const sem = new Semaphore(5);
const mute = new Mutex(10);

console.time('st');
await delay(1000);
console.timeEnd('st');

// test code
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].forEach(async (obj,index)=>{
	await sem.take();
	console.time(obj,index);
	await delay(10);
	console.timeEnd(obj,index);
	sem.release();
});

[1,2,3,4,5].forEach(async (obj, index)=>{
	await mute.take();
	console.time(obj, index);
	await delay(10);
	console.timeEnd(obj, index);
	mute.release();
})
*/

export const sizeOf = <T>(value:T):number => {
//export function sizeOf<T> (value:T):number {
	switch(typeof value){
		case 'undefined':
			return 0;
		case 'boolean':
			return 4;
		case 'number':
		case 'bigint':
			return 8;
		case 'string':
			return (value as string).length * 2;
		case 'object':
			return !value ? 0 : Object.entries(value).reduce((total, obj) => sizeOf(obj[1]) + sizeOf(obj[0]) + total, 0);
	}
	return 0;
}


// test start
//import { sizeOf } from './sizeOf.js';
//console.log(sizeOf({a:3, b:'serta', c:true, d:[1,2,3,4, undefined, [1,2,3n], false]}));
