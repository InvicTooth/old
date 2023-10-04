var Q = require('q');
var fs = require('fs');
var async = require('async');

var contents = [];

var exec = '창천록';


if (exec == '창천록') {
	// 창천록 PK 1.0.5 Data.e5 - secret.e5 이름만 변환
	// 창천록 PK 1.0.5 RS 파일
	var dir = 'rs/';
	var offset = 0x3f;
	var outputname = 'secure.e5';
	
	// 폴더 파일 정렬
	Q().then(function () {
		var defer = Q.defer();
		fs.readdir(dir, function (err, files){
			if (err) throw err;
			files.sort((x,y) => {
				var temp = x.substr(2,2) - y.substr(2,2);
				if (temp == 0) return (x > y) ? 1 : ((x < y) ? -1 : 0) ;
				else return temp;
			});
			defer.resolve(files);
		});
		return defer.promise;
	}

	// 파일 사이즈 체크
	).then(function (files) {
		var defer = Q.defer();
		var count = 0;
		files.forEach(function (file, index){
			fs.stat (dir + file, function (err, stats){
				if (err) throw err;
				contents[index] = [file, stats.size];
				if ( ++count == files.length ) defer.resolve(files);
			});
		});
		return defer.promise;
	}

	// 파일 암호화
	).then(function (files) {
		var defer = Q.defer();
		var count = 0;
		files.forEach(function (file, index){
			fs.readFile (dir + file, function (err, data){
				if (err) throw err;
				var buf = Buffer.from(data, 'hex');
				for ( var j = 0 ; j < buf.length ; j++) buf[j] += offset;
				contents[index][2] = buf;
				if ( ++count == files.length ) defer.resolve(files);
			});
		});
		return defer.promise;
	}

	// 패킹 출력
	).then(function (files) {
		//console.log(contents);
		var indextable = Buffer.alloc(800);
		var filesize = 800;
		contents.forEach(function (data, index){
			indextable.writeUInt32LE(data[1], 4*index);
			filesize += data[1];
		});
		var outputtable = [indextable,];
		contents.forEach(function (data, index){
			outputtable.push(data[2]);
		});
		var output = Buffer.concat(outputtable, filesize);
		
		fs.writeFile(dir + outputname, output, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
		
		
	});
}




















