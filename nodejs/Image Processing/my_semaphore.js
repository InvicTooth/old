const delay = require('util').promisify(setTimeout);

// semaphore constructor
function sema(max_sema,ms=1000){
	const self = {
		  max:max_sema
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
function mutex(ms=1000){
	return new sema(1,ms);
};
module.exports.Semaphore=sema;
module.exports.Mutex=mutex;

/*
// start
const {Semaphore} = require('./my_semaphore.js');
const {Mutex} = require('./my_semaphore.js');
const sem = new Semaphore(5);
const mute = new Mutex(10);
const process = require('process');

// test code
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(async (obj,index)=>{
	await sem.take();
	await mute.take();
	console.time(obj,index);
	await delay(10);
	console.timeEnd(obj,index);
	sem.release();
	mute.release();
});
*/