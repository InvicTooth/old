import {delay} from 'https://deno.land/std/async/delay.ts';

// semaphore constructor
export function Semaphore (maxSema, ms=1000) {
	const self = {
		max:maxSema
		, cur:0
		, take:async function(){
			let unlock=true;
			while(true){
				if(self.cur<self.max && unlock){
					self.cur++;
					unlock=false;
					break;
				}
				await delay(ms);
			}
		}
		, release:function(){
			self.cur--;
		}
	};
	return self;
}

export function Mutex (ms=1000) {
	return new Semaphore(1,ms);
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

export const sizeOf = value => typeSizes[typeof value](value);
const typeSizes = {
	"undefined": () => 0,
	"boolean": () => 4,
	"number": () => 8,
	"string": item => 2 * item.length,
	"object": item => !item ? 0 : Object
		.keys(item)
		.reduce((total, key) => sizeOf(key) + sizeOf(item[key]) + total, 0)
};

// test start
//import { sizeOf } from './sizeOf.js';
//console.log(sizeOf({a:3, b:'serta', c:true, d:[1,2,3,4, undefined, [1,2,3], false]}));
