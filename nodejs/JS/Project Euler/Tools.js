
// 소수 제조기
prime=[2], result = 1, range = 1e5;
for ( i = 3 ; i < range ; i+=2){
	for ( j = 0, sqrti = Math.sqrt(i) ; j < prime.length && prime[j] <= sqrti && i % prime[j] ; j++);
	if (prime[j] >sqrti) prime.push(i);
}
console.log(prime.length / range);

// gcd lcm
long long a=1,b,c,d;main(){for(b=a;++a-20;b=d/b)for(c=a,d=b*a;c%=b^=c^=b^=c;);printf("%lld",b);}
