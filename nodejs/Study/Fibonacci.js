let {memoizer, print_memo, memoizer2} = require('./memoizer.js');

// fibonacci with iteration
const fi = function (n){
	let [f0, f1] = [0n,1n];
	for ( let i = 0 ; i < n ; i++)
		[f0, f1] = [f1, f0+f1];
	return f0;
}
//console.log(fi(1e1));

// fibonacci with tail recursion (v8 does not support PTC(Proper Tail Call)
const ftr = function (n, f0=0n, f1=1n){
	// using accumulator f0, f1
	if ( n == 0) return f0;
	return ftr(n-1, f1, f0+f1);
}
// RangeError: Maximum call stack size exceeded when n = 1e4
//console.log(ftr(1e4));

// fibonacci with tail call optimization(TCO)
const ftco = function (n, f0=0n, f1=1n){
	// using accumulator f0, f1
	while(true){
		if (!n--) return f0;
		[f0, f1] = [f1, f0+f1];
	}
}
// RangeError: Maximum call stack size exceeded when n = 1e4
//console.log('ftco(1e4)',ftco(1e4));

// fibonacci with tabulation(eager evalutaion, mostly iterative)
const fm = function (n){
	let list = fm.memo, l = list.length;
	if ( l < n ) list.length = n;
	for (let i = l ; i <= n ; i++)
		list[i] = list[i-1] + list[i-2];
	return list[n];
}
fm.memo = [0n,1n];
//console.log(fm(1e1));
//console.log(fm);

// fibonacci with recursion and memoization(lazy evaluation), logn algorithm
// F2n-1 = Fn^2 + Fn-1^2
// F2n = (Fn-1 + Fn+1)Fn = (2Fn-1 + Fn)Fn
const frlm = memoizer({'0':0n,'1':1n},function (f, n){
	let fn = f(n+1>>1), fn1 = f((n+1>>1)-1);
	if (n%2) return (fn*fn + fn1*fn1);
	return (fn * (fn + fn1 + fn1));
});
//console.log(frlm(1000));
//print_memo(frlm);

// fibonacci with memoization, custom stack for TCO, iterative, 
// F2n+1 = Fn+1^2 + Fn^2
// F2n = (Fn-1 + Fn+1)Fn = (2Fn-1 + Fn)Fn = (2Fn+1 - Fn)Fn
// F2n-1 = Fn^2 + Fn-1^2
const fmci = (()=>{
	const f = function (n){
		// n < 0, F-n = Fn(-1)^(n+1)
		let sign=1n;
		if (n < 0n){
			sign = BigInt((-1)**(n%2+1));
			n = -n;
		}
		
		// if exist, directly return
		if (typeof f.memo[n] != 'undefined') return sign * 	f.memo[n];
		
		// create custom stack
		let stack = [n], q = [n], m = f.memo, k, f0, f1;
		while(q.length){
			k = q.shift()+1 >> 1;
			[k,k-1].forEach(i=>{
				if (!stack.includes(i) && typeof m[i] == 'undefined'){
					stack.push(i);
					q.push(i);
				}
			})
		}
		
		// memoization
		while(stack.length){
			k = stack.pop();
			[fn0,fn1] = [m[k+1>>1], m[(k+1>>1)-1]];
			if (k%2) m[k] = fn0*fn0 + fn1*fn1;
			else m[k] = fn0*(fn1+fn0+fn1);
		}
		f.memo = m;
		return sign * m[n];
	}
	f.memo = [0n,1n];
	return f;
})();
//console.log(fmci(10));
//print_memo(fmci);
//console.log(fmci(101)-frlm(101));

// stack bust! at 1e4
const ftr2 = memoizer({'0':0n,'1':1n},function (f, n){
	return f(n-1)+f(n-2);
});
// console.log('ftr2(1e2)%100n',ftr2(1e3)%100n);

// stack safe! - custom stack
const ftr3 = memoizer2({'0':0n,'1':1n},function (f, n){
	return f(n-1)+f(n-2);
});
//console.log('ftr3(1e2)%100n',ftr3(1e4)%100n);
//print_memo(ftr2);


// fibonacci (recursion, memoization, custom stack, generalizer)
// F2n+1 = Fn+1^2 + Fn^2
// F2n = (Fn-1 + Fn+1)Fn = (2Fn-1 + Fn)Fn = (2Fn+1 - Fn)Fn
// F2n-1 = Fn^2 + Fn-1^2
const Fibonacci = frlm2 = memoizer2({'0':0n,'1':1n},function (f, n){
	let fn = f((n+n%2)/2), fn1 = f((n+n%2)/2-1);
	return n%2 ? (fn*fn + fn1*fn1) : (fn*(fn + fn1 + fn1));
});
// Number(Double) MAx Integer = 2^53 = 9007199254740992 = 9.00719925e15 => 15digits safe
// Bit Operator use not Number, use signed 32bit integer
//console.log(frlm2(10));
//print_memo(frlm2);

const FibonacciMod = frlm2 = memoizer2({'0':0n,'1':1n},function (f, n){
	let mod = 1000000007n;
	let fn = f(n+1n>>1n), fn1 = f((n+1n>>1n)-1n);
	return n%2n ? (fn*fn + fn1*fn1)%mod : (fn*(fn + fn1 + fn1))%mod;
});
module.exports.FibonacciMod = FibonacciMod;
module.exports.Fibonacci = fmci;
//console.time('FibonacciMod(1000000000000000000000000000000000000n)');
//console.log(FibonacciMod(1000000000000000000000000000000000000n));
//console.timeEnd('FibonacciMod(1000000000000000000000000000000000000n)');
//console.log(FibonacciMod(1000n));
//print_memo(FibonacciMod);