/*
연의 공략
조조전 http://cafe.naver.com/nexonjojo/140994
https://cafe.naver.com/nexonjojo/153696
무극
1장 https://cafe.naver.com/nexonjojo/585017
2장 https://cafe.naver.com/nexonjojo/585020
3장 https://cafe.naver.com/nexonjojo/585022
가상 https://cafe.naver.com/nexonjojo/585207
사실 https://cafe.naver.com/nexonjojo/585206
유비전 http://cafe.naver.com/nexonjojo/225273



*/



var express = require('express')
	, http = require('http')
	, app = express()
	, server = http.createServer(app);

// brute force sampling
function sample2(values, prob, tries, temp){
	if ( tries == 1){
		return temp;
	}
	var temp2 = {};
	if (temp == null){
		temp2.values = values;
		temp2.prob = prob;
		return sample(values, prob, tries, temp2);
	}
	temp2.values=[];
	temp2.prob=[];
	for (var index in values){
		for (var index2 in temp.values){
			temp2.values.push(temp.values[index2]+values[index]);
			temp2.prob.push(temp.prob[index2]*prob[index]);
		}
	}
	//purge(temp);
	return sample(values, prob, tries-1, temp2);
}

// combination with repetition & multinomial distribution sampling
function sample3(values, prob, tries){
	var crs = cr(values.length, tries);
	var temp={};
	temp.values=[];
	temp.prob=[];
	//console.log(crs);
	for (var i in crs){
		var tval=0;
		var tprobc = [];
		for ( var j in prob){
			tprobc.push(0);
		}
		for (var j in crs[i]){
			tval += values[crs[i][j]];
			tprobc[crs[i][j]]++;
		}
		var tprob = 1;
		for (var j = 1; j < tries+1; j++){
			tprob *= j;
		}
		for (var j in prob){
			for (var k = 1; k < tprobc[j]+1 ; k++){
				tprob /= k;
			}
			tprob *= Math.pow(prob[j], tprobc[j]);
		}
		temp.values.push(tval);
		temp.prob.push(tprob);
	}
	return temp;
}

// combination with repetition
function sample(values, prob, tries) {
	var temp = {};
	var c = [];
	
	var i;
	var j;
	var k;
	var m;
	var n;
	var tprobc;
	// var probch = 0;
	
	temp.exp=0;
	temp.std=0;
	
	for (i = 0 ; i < tries ; i++) c.push(0);
	//seth.push(c.slice(0));
	m = 0;
	n = 1;
	tprobc = [];
	for (j in prob) tprobc.push(0);
	for ( j = 0 ; j < c.length ; j++) {
		m += values[c[j]];
		tprobc[c[j]]++;
	}
	for (j = 1; j < tries+1; j++) n *= j;
	for (j in prob){
		for (k = 1; k < tprobc[j]+1 ; k++){
			n /= k;
		}
		n *= Math.pow(prob[j], tprobc[j]);
	}
	temp.exp += n * m;
	temp.std += n * m * m;
	// probch += n;
	
	i = c.length-1;
	while ( c[0] < values.length-1 ) {
		if ( c[i] < values.length-1 ) {
			c[i]++;
			if (i < c.length-1) {
				for (j = i ; j < c.length ; j++) c[j]=c[i];
				i=c.length-1;
			}
			//seth.push(c.slice(0));
			m = 0;
			n = 1;
			tprobc.fill(0);
			for (j = 0 ; j < c.length ; j++) {
				m += values[c[j]];
				tprobc[c[j]]++;
			}
			for (j = 1; j < tries+1; j++) n *= j;
			for (j in prob){
				for (k = 1; k < tprobc[j]+1 ; k++) n /= k;
				n *= Math.pow(prob[j], tprobc[j]);
			}
			temp.exp += n * m;
			temp.std += n * m * m;
			// probch += n;
		} else i--;
	}
	temp.std -= temp.exp * temp.exp;
	temp.std = Math.sqrt(temp.std);
	// console.log(probch);
	return temp;	
}


// combination with repetition
function cr(n, k) {
	var seth = [];
	var c = [];
	for (var i = 0 ; i < k ; i++) c.push(0);
	seth.push(c.slice(0));
	
	var i = c.length-1;
	while ( c[0] < n-1 ) {
		if ( c[i] < n-1 ) {
			c[i]++;
			if (i < c.length-1) {
				for ( var j = i ; j < c.length ; j++) c[j]=c[i];
				i=c.length-1;
			}
			seth.push(c.slice(0));
		} else i--;
	}
	return seth;	
}

// combination with repetition
function cr2(set, k) {
	var h = set.length + k - 1;
	var seth = [];
	for (var i = 0 ; i < h ; i++) seth.push(i);
	var kcomb = k_combinations(seth,k);
	console.log(kcomb);
	var hcomb = [];
	
	for (var i in kcomb){
		var temp = [];
		for (var j in kcomb[i]){
			
		}
	}
}

// combination
function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	if (k > set.length || k <= 0) return [];
	if (k == set.length) return [set];
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) combs.push([set[i]]);
		return combs;
	}
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		head = set.slice(i, i + 1);
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		for (j = 0; j < tailcombs.length; j++) combs.push(head.concat(tailcombs[j]));
	}
	return combs;
}


// 기대값
function exp (values, prob){
	var sum = 0;
	for (var index in values){
		sum += values[index] * prob[index];
	}
	return sum;
}

// 표준편차 : 리스크
function std (values, prob){
	var sum = 0;
	var exp2 = exp(values, prob);
	for (var index in values){
		sum += prob[index] * Math.pow(exp2 - values[index], 2);
	}
	return Math.sqrt(sum);
}

var gval  = [ 33,    66,  110,  220,  400,  800, 1600];
var gprob = [0.27, 0.27, 0.23, 0.14, 0.06, 0.02, 0.01];
var hval  = 			[ 110,  220,  400,  800, 1600];
var hprob = 			[0.43, 0.43, 0.09, 0.04, 0.01];
var tries = 10;

var text = '교본 60당 값임'+
		'<table><tr><th>교환권 갯수</th>'+
		'<th>공상 기대값</th>'+
		'<th>공상 표준편차</th>'+
		'<th>황상 기대값</th>'+
		'<th>황상 표준편차</th></tr>';

for (var j = 1 ; j < tries+1 ; j++){

	var gsmp = sample(gval, gprob, j * 3);
	var hsmp = sample(hval, hprob, j * 2);
	
	console.log('STEP : ' + j);
	console.log(text);
	
	text += '<tr>'+
		'<td>'+(j*3*20)+'</td>'+
		'<td>'+(Math.round(gsmp.exp/j*100)/100)+'</td>'+
		'<td>'+(Math.round(gsmp.std/j*100)/100)+'</td>'+
		'<td>'+(Math.round(hsmp.exp/j*100)/100)+'</td>'+
		'<td>'+(Math.round(hsmp.std/j*100)/100)+'</td>'+
		'</tr>';

	/*
	console.log('기대값은 일정');
	console.log('표준편차 비율 : ' + gstd / hstd);
	console.log('공상 기대값 이득 : ' + (gexp - hexp));
	console.log('공상 표준편차 이득 : ' + (hstd - gstd));
	*/
}
text += '</table>';

app.get('/stat', function (req, res) {
	res.send(text);
});


server.listen(8000, function() {
	console.log('Express server listening on port ' + server.address().port);
});




















