function sqrt(value) {
	if (value < 2n) return value;
	function newtonIteration(n, x0) {
		const x1 = ((n / x0) + x0) >> 1n;
		if (x0 === x1 || x0 === (x1 - 1n)) {
			return x0;
		}
		return newtonIteration(n, x1);
	}
	return newtonIteration(value, 1n);
}


// 0 < 50 (m^2 - n^3)^2 < n 
for(let n = 51n;n<10000000n;n++){
	let min_m = sqrt(n**3n)-5n;
	if(min_m <1n) min_m = 1n;
	let max_m = sqrt(n**3n)+5n;
	
	for(let m = min_m; m <= max_m ; m++){
		let temp = 50n*(m**2n-n**3n)**2n;
		if(temp<n && temp>0n){
			console.log(m,n);
		}
	}
}