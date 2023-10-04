const chalk = require('chalk');
// 상식
/*
덕 타이핑(Duck Typing)
템플릿 메타프로그래밍(template metaprogramming)
IIFE - Immediately Invoked Function Expressions - 즉시 호출 함수 표현식
	var 만 존재하던 시기에 global scope를 피하기 위해서 사용하던 기법
	var는 function scope니까.
	IIFE를 사용한 Singleton 기법을 적용하여 자료 객체를 내부에서만 사용할 수 있다.
리터럴 = 변하지 않는 데이터. 객체 리터럴은 변화시킬 수 없도록 설계한 것을 말한다.
	상수는 포인터 값을 변경시킬 수 없고(값은 리터럴이니 당연히 변하지 않음), 리터럴은 값이 변하지 않는다.
동적 계획법 - Dynamic Programming
	= Memoization
폴리필(polyfill) -  웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 코드를 뜻한다.
기능을 지원하지 않는 웹 브라우저에서 원하는 기능을 구현할 수 있으나, 폴리필 플러그인 로드 때문에 시간과 트래픽이 늘어나고, 브라우저별 기능을 추가하는 것 때문에 코드가 매우 길어지고, 성능이 많이 저하된다는 단점이 있다.
*/

// ECMA Script Features
// https://github.com/hemanth/es-next
{
	// ECMA 6
	// https://github.com/hemanth/paws-on-es6
	// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
	/* Tail call optimization = functional language 핵심 중 하나
	tail recursion 을 stack을 add하지 않고 stack 내 값들만 변경하거나 즉시 stack을 pop하고 tail call 하는 식으로 플랫폼이 구현함
	jump-and-add-stack-frame (x) pop-stack-frame-and-return-to-caller (o)
	nodejs 및 대부분의 browser는 구현되지 않았다.
	*/
	
	// ECMA 7
	// https://h3manth.com/new/blog/2015/es7-features/
	/* Exponentiation Operator **
	x**y = Math.pow(x,y);
	*/
}

//=======================================================================
// foreach 성능 테스트
// 결론 : 1차원은 커스텀의 성능이 좋은데 2차원은 콜백 때문인지 느려진다.
if ( false ) {
	Array.prototype.forEach2=function(a){
		for(let i=0,l=this.length;i<l;i++)a(this[i],i);
	};
	
	Array.prototype.map2=function(a){
		let l=this.length;
		let array=new Array(l),i=0;
		for(;i<l;i++){array[i]=a(this[i],i)}
		return array;
	};

	// populating single dimensional array
	console.log('1 dimesional test');
	let arrData = [];
	for (let i = 0; i < 1E6; i++) {
		arrData.push(i);
	}
	
	const test = (name,f)=>{
		const random_color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`;
		console.time(chalk.hex(random_color)(name));
		f();
		console.timeEnd(chalk.hex(random_color)(name));
	}
	
	// different loops used in code
	test('ForEach 1D - classical for',()=>{
		for (let p = 0; p < arrData.length; p++) {}
	}); // 6.404ms
	test('ForEach 1D - classical for with length defined',()=>{
		for (let p = 0, pLen = arrData.length; p < pLen; p++) {}
	}); // 6.555ms
	test('ForEach 1D - reverse for',()=>{
		for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {}
	}); // 5.993ms
	test('ForEach 1D - reverse while',()=>{
		let pLen = arrData.length;
		while (pLen--) {}
	}); // 5.991ms
	test('ForEach 1D - for of (es6)',()=>{
		for (const pVal of arrData) {}
	}); // 88.758ms
	test('ForEach 1D - for in',()=>{
		for (const index in arrData) {}
	}); // 4201.309ms
	test('ForEach 1D - for each',()=>{
		arrData.forEach((pVal) => {});
	}); // 93.723ms
	test('ForEach 1D - custom foreach',()=>{
		arrData.forEach2((pVal) => {});
	}); // 6.379ms
	test('',()=>{
		
	});
	test('',()=>{
		
	});

	
};

//========================================================================
// 2차원 foreach 성능 테스트
// populating two dimensional array
if ( false ) {
	console.log('2 dimesional test');
	arrData = [];
	// preparing sample data
	for (let p = 0; p < 3.3E3; p++) {
		arrData[p] = [];
		for (let c = 0; c < 3.3E3; c++) {
			arrData[p].push(c);
		}
	}
	
	// different loops used in code
	
	
	for (let p = 0; p < arrData.length; p++) {}
	
	console.time('ForEach 2D - classical for');
	for (let p = 0; p < arrData.length; p++) {
		for (let c = 0; c < arrData[p].length; c++) {}
	}
	console.timeEnd('ForEach 2D - classical for');
	
	console.time('ForEach 2D - classical for with length');
	for (let p = 0, pLen = arrData.length; p < pLen; p++) {
		for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {}
	}
	console.timeEnd('ForEach 2D - classical for with length');
	
	console.time('ForEach 2D - reverse for');
	for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
		for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {}
	}
	console.timeEnd('ForEach 2D - reverse for');
	
	console.time(chalk.blue('ForEach 2D - reverse while'));
	{
		let pLength = arrData.length, cLength;
		while (pLength--) {
			cLength = arrData[pLength].length;
			while (cLength--) {}
		}
	}
	console.timeEnd(chalk.blue('ForEach 2D - reverse while'));
	
	console.time('ForEach 2D - for of (es6)');
	for (const pVal of arrData) {
		for (const cVal of pVal) {}
	}
	console.timeEnd('ForEach 2D - for of (es6)');
	
	console.time('ForEach 2D - for in');
	for (const pVal in arrData) {
		for (const cVal in arrData[pVal]) {}
	}
	console.timeEnd('ForEach 2D - for in');
	
	console.time('ForEach 2D - for each');
	arrData.forEach((pVal) => {
		pVal.forEach((cVal) => {});
	});
	console.timeEnd('ForEach 2D - for each');
	
	console.time('ForEach 2D - custom foreach');
	arrData.forEach2((pVal) => {
		pVal.forEach2((cVal) => {});
	});
	console.timeEnd('ForEach 2D - custom foreach');
};

// Set perf test
// 중복되는 녀석이 많을수록 set이 더 빠르고, 일단 set이 더 빠르다.
if ( false ) {
	let list=[], set;
	console.time('build list');
	for (let p = 0; p < 1e7; p++) {
		list.push(Math.floor(Math.random()*1e3));
		//list.push(p);
		//list.push(0);
	}
	console.timeEnd('build list');
	console.time('list to set');
	set = new Set(list);
	console.timeEnd('list to set');
	
	console.time('only set');
	set = new Set();
	for (let p = 0; p < 1e7; p++) {
		set.add(Math.floor(Math.random()*1e3));
		//set.add(p);
		//set.add(0);
	}
	console.timeEnd('only set');
}

/* Math.floor perf test
https://blog.blakesimpson.co.uk/page.php?id=58&title=fastest-alternative-to-math-floor-in-javascript
https://jsperf.com/math-floor-vs-math-round-vs-parseint/202

Math.floor(f)
~~f
f | 0
f << 0
f >> 0
f >>> 0
f & -1
-~f -1
parseInt(f)
Math.trunc(f)

*/




// ======================================================
// chalk and string
// ` : apostrophe = backtick you can use literal with using ${} in ` ` string

/*
Modifiers
reset
bold
dim
italic (Not widely supported)
underline
inverse
hidden
strikethrough (Not widely supported)
visible (Text is emitted only if enabled)

Colors
black
red
green
yellow
blue (On Windows the bright version is used since normal blue is illegible)
magenta
cyan
white
gray ("bright black")
redBright
greenBright
yellowBright
blueBright
magentaBright
cyanBright
whiteBright

Background colors
bgBlack
bgRed
bgGreen
bgYellow
bgBlue
bgMagenta
bgCyan
bgWhite
bgBlackBright
bgRedBright
bgGreenBright
bgYellowBright
bgBlueBright
bgMagentaBright
bgCyanBright
bgWhiteBright
*/
const log = console.log;
console.log(chalk.blue('Hello world!'));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const miles = 18;
const calculateFeet = miles => miles * 5280;
 
log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);
const random_color = `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`;

// ================
// wait 함수 wait(1000);
const wait = (ms) => new Promise(r => setTimeout(r, ms));

	
// n 개중에서 r 개를 뽑았을때 (r > n) n개 모두가 포함될 경우의 확률 구하기
{
	const stars = 28;
	// 조조전 2019-02 별자리 이벤트.
	// 28개 세트에서 별가루 20개로 랜덤뽑기, 100개로 확정뽑기, 전체 획득 확률, 기대값 구하기
	
	// ∑xi=r 일 때, xi가 0일 경우에서 xi가 1씩 더해진 케이스로 변경할 수 있다.
	// ∑xi=r-n, 인 문제로 변경 가능
	// 여기서 k개 모자라게 얻고 이후 확정하는 방식으로 변경
	// 조합인 H 함수를 쓰려면 PMF를 곱해서 ∑ 해야 한다. H∑(n,r-n)/H∑(n,r)
	// 따라서 조합 갯수가 아닌 순열의 갯수를 통해서 구해야 한다. 28개유니크 세트, n-28개 랜덤 세트 /  PR(n,r)
	function myquest(n,r){
		//if (r<n) return 0;
		//return Number(PN(r,n)) / Number(PN(r+n,n));
		return Number(H(n,r-n))/Number(H(n,r));
		//console.log(Number(PN(r,n)), Number(PN(r+n,n)), Number(H(n,r-n)), Number(H(n,r)));
		
	}
	// 28개 표본
	// 별가루 20개 사용 시 무작위 선택, 100개 사용 시 빈칸 확정 선택
	// 20*1 + 100*27 = 2720 필요, 2720/20 = 136
	
	//for ( let i = stars ; i < 1000 ; i=i+10) console.log(i, myquest(stars,i));
	
	// 각 시행횟수별 유니크 갯수 기대값 구하기 brute force
	(()=>{
		let set, sum, tries = 1000, prob;
		for (let i = stars, max_tries = 150 ; i < max_tries ; i=i+1){
			sum = 0, prob = 0;
			for (let j = 0; j < tries ; j++){
				set = new Set();
				for (let k = 0 ; k < i ; k++)
					set.add(Math.floor(Math.random()*stars));
				sum += set.size;
				if ( set.size >= stars ) prob++;
			}
			console.log(i, i*20, sum/tries, i*20+100*(stars-Math.floor(sum/tries)), prob/tries, myquest(stars,i));
		}
	});
	
	// 필요한 시행 횟수 기대값 구하기
	// 원하는 유니크 갯수가 나올 때까지 brute force
	(()=>{
		let set, tries = 1000, results = [], temp;
		for (let i = 0;i<stars;i++) results[i]=0;
		for (let i = 0 ; i < tries ; i++){
			set = new Set();
			temp = [];
			for (let j = 0; j < 10000 ; j++){
				set.add(Math.floor(Math.random()*stars));
				if ( set.size > temp.length ) temp.push(j+1);
				if ( set.size > stars ) break;
			}
			temp.forEach((val,index)=>results[index]+=val);
		}
		results.forEach((val,index)=>{
			results[index] = [
				results[index]/tries,
				Math.round(results[index]/tries*20+100*(stars-index-1)),
				];
		});
		console.table(results);
	});
}

// 함수에서 this는 global이다. 하지만 화살표 함수의 경우는 lexical context(부른 곳에서의 스코핑). MDN this 참조. 어렵다.
// 메서드는 function 으로, 구문 실행은 arrow로 하자.
// https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch
if ( false){
	//function e (){
	(()=>{
		function a(){
			this.b=3;
			console.log(this.setTimeout); //global object
		}
		const c = ()=>{
			this.d=4;
			console.log(this.setTimeout);
		};
		a();
		c();
		console.log(b);
		console.log(this.d);
		console.log(this);
	})();
	//e();
	console.log(this.b);
	console.log(this.d);
}


if(false){
	let {FibonacciMod} = require('./Fibonacci.js');
	let {print_memo} = require('./memoizer.js');
	console.log(FibonacciMod(1000n),517691607n);
	//print_memo(FibonacciMod);
	//console.log(FibonacciMod.memo);
}

// ==========================
// view memory usage

const used = process.memoryUsage().heapUsed / 1024 / 1024;
	console.log(`The sHipt uses approximately \n\
${Math.round(used * 100) / 100} MB`);
