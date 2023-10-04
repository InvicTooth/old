const print_memo = function(f){
	// Object.keys(obj); // get enumerable only
	// Object.getOwnPropertyNames(obj); // get enumerable & non-enumerable
	let memo = f.memo;
	if (Object.keys(memo)[0].split(',').length==1) return console.table(memo);
	let table = [];
	Object.keys(memo).forEach((key)=>{
		let index = key.split(',');
		if (typeof table[index[0]] == 'undefined') table[index[0]] = [];
		table[index[0]][index[1]] = memo[key];
	});
	console.table(table);
};
module.exports.print_memo = print_memo;

// memoizer for PTC/STC supported system
const memoizer = function (memo, formula) { // checker : cancel memo
	const r = function(){
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		return memo[index] = formula(r,...arguments);
	};
	r.memo = memo;
	return r;
};
module.exports.memoizer = memoizer;


// memoizer for PTC/STC supported system
const memoizer1 = function (memo, formula, checker=()=>false) { // checker : cancel memo
	const r = function(){
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		if (checker(...arguments)) return formula(r,...arguments);
		else return memo[index] = formula(r,...arguments);
	};
	r.memo = memo;
	return r;
};
module.exports.memoizer1 = memoizer;

// memoizer with custom stack for PTC/STC unsupported system, but more effective.
const memoizer2 = function (memo, formula) { // checker : cancel memo
	let q=[], stack=[], uniquestack={};
	const c = function(){ // custom stack breathe first constructor
		let index = Array.prototype.slice.call(arguments);
		if (typeof uniquestack[index] == 'undefined' && typeof memo[index] == 'undefined'){
			stack.push(index);
			q.push(index);
			uniquestack[index]='';
		}
	}
	
	const p = function(){ // memoization with custom stack pop
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		return memo[index] = formula(p,...arguments);
	}

	const r = function(){
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		
		q.push(index), stack.push(index), uniquestack[index]='';
		let k;
		while(q.length) {
			k = q.shift();
			try{formula(c,...k);}catch(e){}
		}
		uniquestack={};
		while(stack.length){
			k = stack.pop();
			memo[k] = formula(p,...k);
		}
		return memo[index];
	};
	r.memo = memo;
	return r;
};
module.exports.memoizer2 = memoizer2;

// memoizer with custom stack for PTC/STC unsupported system, but more effective.
const memoizer3 = function (memo, formula, stackconstructor) { // checker : cancel memo
	let q=[], stack=[], uniquestack={};
	const c = function(){ // custom stack breathe first constructor
		let index = Array.prototype.slice.call(arguments);
		if (typeof uniquestack[index] == 'undefined' && typeof memo[index] == 'undefined'){
			stack.push(index);
			q.push(index);
			uniquestack[index]='';
		}
	}
	
	const p = function(){ // memoization with custom stack pop
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		return formula(p,...arguments);
	}

	const r = function(){
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		
		q.push(index), stack.push(index), uniquestack[index]='';
		let k;
		while(q.length) {
			k = q.shift();
			stackconstructor(c,...k);
		}
		uniquestack={};
		stack.sort((a,b)=>{
			for (let i = 0, j;i < a.length ; i++){
				if ( i ==1){
					if (a[i] == 0n && b[i] > 0n) return -1;
					if (a[i] > 0n && b[i] == 0n) return 1;
				}
				j = b[i]-a[i];
				if (j == 0n);
				else return j;
			}
			return 0;
		});
		while(stack.length){
			k = stack.pop();
			memo[k] = formula(p,...k);
		}
		return memo[index];
	};
	r.memo = memo;
	return r;
};
module.exports.memoizer3 = memoizer3;

// memoizer for PTC/STC supported system
const memoizer4 = function (memo, formula, checker=()=>false, tabulator=()=>{}) { // checker : cancel memo
	const r = function(){
		let index = Array.prototype.slice.call(arguments);
		if (typeof memo[index] != 'undefined') return memo[index];
		if (checker(...arguments)) return formula(r,...arguments);
		else return memo[index] = formula(r,...arguments);
	};
	const t = function(){
		let index = Array.prototype.slice.call(arguments);
		tabulator(r,...arguments);
		return memo[index];
	}
	t.memo = memo;
	return t;
};
module.exports.memoizer4 = memoizer4;
