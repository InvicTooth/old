const chalk = require('chalk');
let {memoizer3, memoizer4, memoizer2, memoizer, print_memo} = require('./memoizer.js');

/* 12정도 - the Twelvefold Way
	12정도 프로토타입을 만들어서 프린트 함수를 생성, 이후 상속으로 나머지 함수를 만들어보자.
 */


// Factorial with tabulation
const Factorial = F = function(){
	function r (n) {
		if ( n < 0n ) return -1n;
		let m = F.memo;
		if (typeof m[n] != 'undefined') return m[n];
		for (let i = BigInt(m.length); i <= n; i++) m[i] = m[i-1n] * i;
		F.memo = m;
		return m[n];
	}
	r.memo = [1n];
	return r;
}();

// custom stack, iterative recursion
// without custom stack : maximum call stack size exceeded 
// use BigInt : if n is big, BigInt structure cause - JavaScript heap out of memory
// use Number : Double safe F(170), javascript integer safe F(18), java long(64bit integer) safe F(20)
//const Factorial = F = memoizer(
//	{'0':1n},
//	(f,n)=>n*f(n-1n)
//);

module.exports.Factorial = module.exports.F = F;
console.log('Factorial(10) :',F(10n), 3628800);
print_memo(F);

// Permutation : 순열
const Permutation = P = function (n,r){
	if ( n < r ) return 0n;
	return F(n)/F(n-r);
}
module.exports.Permutation = module.exports.P = P;
console.log('Permutation(10,5)',P(10n,5n),30240);

// ∏ Permutation with Repetition: 중복 순열
const PermutationR = PR = function (n,r){
	return n**r;
}
module.exports.PermutationR = module.exports.PR = PR;
console.log('Permutation with Repetition(10,5)',PR(10n,5n),1e5);

// Combination : 조합, 이항정리
const Combination = C = function (n,r){
	return F(n)/F(r)/F(n-r);
}
module.exports.Combination = module.exports.C = C;
console.log('Combination(10,5)',C(10n,5n),252);

// H Combination with Repetition : 중복 조합
// homogeneous monomials 동차단항식 : 일반항이 중복조합의 이항정리 버전(다항정리) = n!/(p1!...pi!...pk!)*(x1...xi...xk)
const CombinationR = CR = H = function (n,r){
	return C(n+r-1n,r);
}
module.exports.CombinationR = module.exports.CR = module.exports.H = H;
console.log('Homogeneous Monomials(10,5)',H(10n,5n),2002);


/*	Partition Number with Memoization
	P(n,k) 자연수 n을 k개의 자연수 항으로 분할하는 수
	Pn=∑P(n,k) 자연수 n을 자연수 항으로 분할하는 방법의 수
	따라서 memoization table의 크기는 2차원 이등변 직각삼각형이 되는데, 1차원으로 낮추기로 했음
	Pn 우선배정하고 p(n,k)을 배치
	추가로 P(2n+k, n+k)=P(n) 에 의해 우측 항들이 소거가능해지고, 따라서 2(n):1:√5 의 삼각형이 만들어진다.
	이때 index = n**2>>2 가 되는데 (a2k = k**2+k / a2k-1 = k**2 이 된다.) (틀림)
	개판이 되므로 2차원 array를 그대로 쓴다. 속도도 더 빠른 듯 하다.
	PNr = recursive version
*/
if(true){
	let PNr = function (){
		function r (n,k=0){
			let m = r.memo;
			if (n <= k<<1) [n,k] = [n-k,0];	// reduction rule if (a <= 2b) then P(a,b) = P(a-b)
			if (k == 1||n == 0)
				return 1n;	// P(0)=1, P(n,1)=1
			if (k == 2)
				return BigInt(n)>>1n; // P(n,2) = n>>1
			if (typeof m[n] != 'undefined' && typeof m[n][k] != 'undefined') return m[n][k];	// return immediately if memoized
			if (typeof m[n] == 'undefined' ) m[n] = new Array((n+1)>>1);
			let [a,b] = k==0 ? [n,n] : [n-k,k];	// Pn = ∑k=1..n P(n,k) , P(n,k) = ∑m=1..k P(n-k,m)
			let t = 0n, c=b;
			for (; c<<1 >= a ; c--) t+=PNr(a-c,0);
			for (; c > 0 ; c--) t+=PNr(a,c);
			m[n][k] = t;
			r.memo = m;
			return t;
		}
		r.memo = [[1n]];
		return r;
	}();
	console.time('PNr');
	console.log('PNr(34,0)',PNr(34,0),12310);
	console.timeEnd('PNr');

	// cause Maximum call stack size exceeded
	let PNrm = memoizer(
		{'0,0':1n},
		(f,n,k) => {
			if (k == 1||n == 0)
				return 1n;	// P(0)=1, P(n,1)=1
			if (k == 2)
				return BigInt(n)>>1n; // P(n,2) = n>>1
			if (n <= k<<1)
				return f(n-k,0); //[n,k] = [n-k,0];	// reduction rule if (a <= 2b) then P(a,b) = P(a-b)
			let [a,b] = k==0 ? [n,n] : [n-k,k]; // Pn = ∑k=1..n P(n,k) , P(n,k) = ∑m=1..k P(n-k,m)
			let t = 0n, c=b;
			for ( ; c<<1 >= a ; c--) t+=PNrm(a-c,0);
			for ( ; c > 0 ; c--) t+=PNrm(a,c);
			return t;
		},
		//(n,k=0) => n<1 || k==1 || k==2 || n<=k<<1);
		);
	console.time('PNrm');
	console.log('PNrm(34,0)',PNrm(34,0), 12310,'memoization size', Object.keys(PNrm.memo).length);
	console.timeEnd('PNrm');
	print_memo(PNrm);

	// tabulation
	const PN2 = (function(){
		let memo = [[1n]];
		const PN = function(n,k=0){
			if ( n <= k<<1 ) [n,k] = [n-k,0];	// reduction rule if (a <= 2b) P(a,b) = P(a-b)
			if ( n < memo.length ) return memo[n][k];	// return immediately if memoization
			let a,b,x,y,z,t;
			for ( a = memo.length ; a <= n ; a++){
				memo[a] = new Array((a+1)>>1);
				for ( b = memo[a].length-1 ; b >= 0 ; b--){ 	// Pn = ∑k=1..n P(n,k) , P(n,k) = ∑m=1..k P(n-k,m) 생성
					[x,y] = b==0 ? [a,a] : [a-b,b];
					t = 0n, z = y;
					for ( ; z >= x/2 ; z--) t += memo[x-z][0];
					for ( ; z > 0 ; z--) t += memo[x][z];
					memo[a][b] = t;
				}
			}
			return memo[n][k];
		}
		PN.memo=memo;
		return PN;
	})();
	console.time('PN2');
	console.log('PN2(34,0)',PN2(34,0),12310);
	console.timeEnd('PN2');
	//print_memo(PN2);

const PN3 = memoizer3(
	{'0,0':1n},
	(f,n,k) => {
		if (k == 1||n == 0)
			return 1n;	// P(0)=1, P(n,1)=1
		if (k == 2)
			return BigInt(n)>>1n; // P(n,2) = n>>1
		if (n <= k<<1)
			return f(n-k,0);	//[n,k] = [n-k,0];	// reduction rule if (a <= 2b) then P(a,b) = P(a-b)
		let [a,b] = k==0 ? [n,n] : [n-k,k]; // Pn = ∑k=1..n P(n,k) , P(n,k) = ∑m=1..k P(n-k,m)
		let t = 0n, c=b;
		for ( ; c<<1 >= a ; c--) t+=f(a-c,0);
		for ( ; c > 0 ; c--) t+=f(a,c);
		return t;
	}, (f,n,k=0) => {
		if (k==1||k==2||n==0) return;
		if (n<=k<<1) f(n-k,0);
		let [a,b] = k==0 ? [n,n] : [n-k,k];
		let c = b;
		for (;c<<1>=a;c--) f(a-c,0);
		for (;c>2;c--) f(a,c);
	});
console.time('PN3');
console.log('PN3(34,0)',PN3(34,0), 'memoization size', Object.keys(PN3.memo).length);
console.timeEnd('PN3');
//print_memo(PN3);

const PN4 = memoizer4(
	{'0,0':1n},
	(f,n,k) => {
		if (k == 1||n == 0)
			return 1n;	// P(0)=1, P(n,1)=1
		if (k == 2)
			return BigInt(n)>>1n; // P(n,2) = n>>1
		if (n <= k<<1)
			return f(n-k,0);	//[n,k] = [n-k,0];	// reduction rule if (a <= 2b) then P(a,b) = P(a-b)
		let [a,b] = k==0 ? [n,n] : [n-k,k]; // Pn = ∑k=1..n P(n,k) , P(n,k) = ∑m=1..k P(n-k,m)
		let t = 0n, c=b;
		for ( ; c<<1 >= a ; c--) t+=f(a-c,0);
		for ( ; c > 0 ; c--) t+=f(a,c);
		return t;
	},
	(n,k=0) => n<1 || k==1 || k==2 || n<=k<<1,
	(f,n,k=0) => {
		let i =1,j,m;
		for (;i<=n>>1;i++)
			f(i,0);
		for (;i<=(n+1)/1.5;i++)
			for (j=3;j<<1<i;j++)
				f(i,j);
		m=(n/3>>0)-1;
		for (;i<=n;i++,m--)
			for (j=3;j<=m;j++)
				f(i,j);
		f(n,k);
	}
);

console.time('PN4');
console.log('PN4(34,0)',PN4(34,0), 'memoization size', Object.keys(PN4.memo).length);
console.timeEnd('PN4');
//print_memo(PN4);
}
//module.exports.PN=PN4;



return;

/* Stirling numbers of the first kind
	제 1종 스털링 수
	원소의 갯수가 n개인 집합을 구분되지 않는 k개의 순환(방향이 존재하는 원순열)으로 분할하는 방법의 수
	s(n,k) = [n k]; (세로로. 표기법)
	s(n,k) = s(n-1,k-1) + (n-1) * s(n-1,k);
	s(n,0) = 0
	s(n,n) = 1
	s(n,1) = (n-1)!
	s(n,2) = (n-1)!H(n-1) = (n-1)!∑(k=1..n-1), 1/k  Hk = 조화수
	s(n,n-1) = C(n,2)
	s(n,n-2) = C(n,3) * (3n-1)/4
	∑(k=1..n), s1(n,k) = n!
*/
let s1m = [];
const s1 = function(n,k){
	if (typeof s1m[n] != 'undefined' && typeof s1m[n][k] != 'undefined' ) return s1m[n][k];
	if ( s1m.length < n ) for (let i = s1m.length ; i <= n ; i++) s1m[i] = new Array(i+1);
	switch ( k ){
	case 0 :
		return s1m[n][k] = 0n;
	case n :
		return s1m[n][k] = 1n;
	case 1 : 
		return s1m[n][k] = F(n-1);
	case n-1 : 
		return s1m[n][k] = C(n,2);
	default :
		return s1m[n][k] = s1(n-1,k-1) + BigInt(n-1) * s1(n-1,k);
	}
}
//console.log(s1(10,5));	// 269325n
console.time('s1');
s1(10,5);
printMemo(s1m);
s1(1000,500);
console.timeEnd('s1');

/* Stirling numbers of the second kind
	제 2종 스털링 수
	원소의 갯수가 n개인 집합을 구분되는 k개의 공집합이 아닌 부분집합들로 나누는 방법의 수
	S(n,k) = {n k}  (세로로. 표기법)
	S(n,k) = s(n-1,k-1) + (n-1) * s(n-1,k);
	S(n,0) = 0
	S(n,n) = 1
	S(n,1) = 1
	s(n,2) = 2**(n-1)-1
	S(n,n-1) = C(n,2)
	S(n,n-2) = C(n,3) * (3n-5)/4
	∑(k=1..n), s(n,k) = Bn (벨 수)
*/
let s2m = [];
const s2 = function(n,k){
	if ( n < k ) return 0n;
	if ( typeof s2m[n] != 'undefined' && typeof s2m[n][k] != 'undefined' ) return s2m[n][k];
	if ( s2m.length < n ) for (let i = s2m.length ; i <= n ; i++) s2m[i] = new Array(i+1);
	//let shortcut = {0:0n, 1:1n, [n]:1n, [n-1]:C(n,2), };
	//if (typeof (s2m[n][k] = shortcut[k]) != 'undefined' ) return s2m[n][k];
	//return s2m[n][k] = s2(n-1,k-1) + BigInt(k) * s2(n-1,k);
	switch ( k ){
	case 0 :
		return s2m[n][k] = 0n;
	case n :
		return s2m[n][k] = 1n;
	case 1 : 
		return s2m[n][k] = 1n;
	case n-1 : 
		return s2m[n][k] = C(n,2);
	default :
		return s2m[n][k] = s2(n-1,k-1) + BigInt(k) * s2(n-1,k);
	}
}
//console.log(s2(10,5));	// 42525n
console.time('s2');
s2(10,5);
printMemo(s2m);
s2(1000,500);
console.timeEnd('s2');


/* Bell numbers
벨 수 : 주어진 크기의 집합의 분할의 수를 세는 정수열

*/

/*
완전순열(complete permutation)=준계승(subfactorial)=교란(derangement)=!n

 
*/

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