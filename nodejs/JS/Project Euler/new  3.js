var now = performance.now();
var max = 1E3 - 1, min = 1E2 - 1, result = 1, cnt = 0;
for (var i = max; i > min && result <= i * i; i--)
	for (var m = n = i, flag = true; m <= max && n > min && result <= m * n; f ? m++ : n--, f = !f, cnt++) {
		for (var k = n * m, reverse = 0; k; reverse = reverse * 10 + k % 10, k = (k / 10) >> 0);
		if (reverse == n * m)
			result = m * n;
	}
console.log("Answer : " + result);
console.log("Exec Time : " + (performance.now() - now));
console.log("Count of palindrome check : " + cnt);
