var decoder = require('string_decoder');
var Iconv = require('iconv').Iconv;
var XLSX = require('xlsx');
var wb = XLSX.utils.book_new();

var iconv = new Iconv('EUC-KR//TRANSLIT//IGNORE', 'UTF-8//TRANSLIT//IGNORE');
var iconvr = new Iconv('UTF-8//TRANSLIT//IGNORE', 'EUC-KR//TRANSLIT//IGNORE');

var dats = [
	[
		['Dats/AI.dat', '파일명'],		[2, '행 갯수'],	[33, '행 길이'],
		[33, '?33'],
	],
	[
		['Dats/Abi.dat', '파일명'],		[2, '행 갯수'],	[39, '행 길이'],	[-30, '한글명'],
		[1, '레벨한도'],	[4, 'Attack.dat 기술번호'],	[1, '종류'],	[2, '필요 아이템'],	[1, '아이콘'],
		// 종류 : 0-패시브 1-액티브 2-초필살기제어 필요 3-초필살기제어 4-소환 능력 필요 5-소환 능력 6-발동형패시브
		// 아이콘 : 전투창에서의 아이콘 구분. 0-능能 1-구具 2-필必 3-마魔 4-기技 6-지地
	],
	// 마법속성 : 0-5무화빙뇌광암
	// 물리속성 : 0-4무검격빔폭
	[
		['Dats/Attack.dat', '파일명'],	[2, '행 갯수'],	[94, '행 길이'],	[-30, '한글명'],	[2, '?2'],
		[4, '사거리'],																			[1, '1'],[4, '4'],[10, '?10'],
		[4, '적용범위'],																		[4, '4'],	[2, '2'],	[1, '1'],
		[4, '데미지'],	[1, '성공률'],	[4, 'SOUL'],											[4, '4'],	[4, '4'],
		[4, '지속시간'],																		[1, '1'],	[4, '4'],	
		[1, '마법속성'],	[1, '물리속성'],	[1, '횟수'],									[3, '?3'],
	],
	[
		['Dats/Item.dat', '파일명'],	[2, '행 갯수'],	[204, '행 길이'],	[-30, '한글명'],	[-30, '영어명'],
		[4, '가격'],	[1, '타입'],	[1,	'아이콘 번호'],
		[2, '효과 1'],	[2, '효과 1 수치'],
		[2, '효과 2'],	[2, '효과 2 수치'],
		[2, '효과 3'],	[2, '효과 3 수치'],
		[4, 'TS'],	[4, '방어력'],	[4, '내구력'],	[4, '명중률'],
		[1, '?1'],	[1, '치명타율'],	[4, '사정거리'],	[1, '마법속성'],	[1, '물리속성'],	[1, '명검수치'],	[1, 'SS'],
		[-100, '설명'],	// [2, '사용비추천'], // 기존의 에디터가 100번째 바이트에 한글을 입력하면 잘못된 값을 입력하는듯. 유저패치버전 사용 시 주의.
	],
	[
		['Dats/Job.dat', '파일명'],		[2, '행 갯수'],	[100, '행 길이'],	[-30, '한글명'],	[-30, '영어명'],
		[2, '모름'],	// 편의상 계열구분으로 추정
		[1, '전직조건어빌 1'],	[1, '전직조건어빌 1 Lv'],
		[1, '전직조건어빌 2'],	[1, '전직조건어빌 2 Lv'],
		[1, '전직조건어빌 3'],	[1, '전직조건어빌 3 Lv'],
		[1, '전직조건어빌 4'],	[1, '전직조건어빌 4 Lv'],
		[1, '전직조건어빌 5'],	[1, '전직조건어빌 5 Lv'],
		[1, '습득가능어빌 1'],	[1, '습득가능어빌 1 Lv'],
		[1, '습득가능어빌 2'],	[1, '습득가능어빌 2 Lv'],
		[1, '습득가능어빌 3'],	[1, '습득가능어빌 3 Lv'],
		[1, '습득가능어빌 4'],	[1, '습득가능어빌 4 Lv'],
		[1, '습득가능어빌 5'],	[1, '습득가능어빌 5 Lv'],
		[1, '습득가능어빌 6'],	[1, '습득가능어빌 6 Lv'],
		[1, '습득가능어빌 7'],	[1, '습득가능어빌 7 Lv'],
		[1, '습득가능어빌 8'],	[1, '습득가능어빌 8 Lv'],
		[1, '습득가능어빌 9'],	[1, '습득가능어빌 9 Lv'],
		[1, '습득가능어빌 10'],	[1, '습득가능어빌 10 Lv'],
		[1, '습득가능어빌 11'],	[1, '습득가능어빌 11 Lv'],
		[1, '습득가능어빌 12'],	[1, '습득가능어빌 12 Lv'],
		[1, '습득가능어빌 13'],	[1, '습득가능어빌 13 Lv'],
		[1, '습득가능어빌 14'],	[1, '습득가능어빌 14 Lv'],
	],
];

var idx = [
	[4, '행 갯수'],	[8, '개별파일'],	[1,	'공백'],	[13, 'paks'],	[4, '시작주소'],	[4, '종료주소'],
];

var paks = [
	[
		['Chars/Chars.pak', '파일명', 'Chars/Chars.idx', 'Chars/'],	[175, '행 길이'],	[-24, '한글명'],	[-24, '영어명'],	[-10, '대화명'],
		[2, '캐릭터도트'],	[2, '대화창 얼굴'],	[2,	'상태창 얼굴'],
		[1, '소속'],	[1, '직업'],	[1, '팀'],	[2,	'공격형식'],	[6, '?6'],	[1, '?1'],	[1, '이동속도'],
		[4, '경험치'],	[4, 'HP'],	[1, 'STR'],	[1, 'SKILL'],	[1, 'DEX'],	[1, 'INT'],	[1, 'LUCK'],	[1, 'SPD'],	[1, 'AC'],	[1, 'MR'],	[1, 'WTP'],
		[1, '?1'],	[2, '화저'],	[2, '빙저'],	[2, '뇌저'],	[2, '광저'],	[2, '암저'],	[2, '검저'],	[2, '총저'],	[2, '빔저'],	[2, '폭저'],	
		[2,	'장비1'],	[2,	'장비2'],	[2,	'장비3'],	[2,	'장비4'],	[2,	'장비5'],
		[4, '어빌1'],	[1, '어빌1 Lv'],	[4, '어빌2'],	[1, '어빌2 Lv'],	[4, '어빌3'],	[1, '어빌3 Lv'],	[4, '어빌4'],	[1, '어빌4 Lv'],
		[4, '어빌5'],	[1, '어빌5 Lv'],	[4, '어빌6'],	[1, '어빌6 Lv'],	[4, '어빌7'],	[1, '어빌7 Lv'],	[4, '어빌8'],	[1, '어빌8 Lv'],
		[4, '어빌9'],	[1, '어빌9 Lv'],	[4, '어빌10'],	[1, '어빌10 Lv'],	[2, '체크섬'],
		// 이동속도 : 0-5
	],
];

var contents = {};
var contentcounter = dats.length + paks.length;

// Dats 파일 처리
dats.forEach(function (file){
	fs.readFile(file[0][0], 'hex' , function (err, data){
		if (err) throw err;
		var buf = new Buffer.from(data, 'hex');
		var content = [['번호']];
		for (var i = 3 ; i < file.length ; i++) content[0].push(file[i][1]);
		var index = file[1][0];
		var h = 1;
		while (index < buf.length - 3) {
			content[h] = [h];
			for (var i = 3 ; i < file.length ; i++){
				if ( file[i][0] < 0 ){
					var temp = buf.slice(index, index + buf.slice(index, index + Math.abs(file[i][0])).indexOf(0xFF));
					for ( var j = 0 ; j < temp.length ; j++) temp[j] = 0xFF - temp[j];
					content[h].push(iconv.convert(temp).toString());
				} else {
					content[h].push( (file[i][1].indexOf("?")>-1) ? ('0x'+buf.slice(index, index+file[i][0]).toString('hex')) : buf.readUIntLE(index, file[i][0]));
				}
				index += Math.abs(file[i][0]);
			}
			index = h++ * file[2][0] + file[1][0];
		}
		contents[file[0][0].substr(file[0][0].indexOf('/')+1, file[0][0].length-1)] = content;
		
		/* 출력부
		fs.writeFile(file[0][0] + '.output', output, function (err){
			if (err) throw err;
			console.log(file[0][0] + '.output');
		});	*/
		XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(content), file[0][0].substr(file[0][0].indexOf('/')+1, file[0][0].length-1));
	});
});



paks.forEach( function (file){
	var indexes = [];
	Q().then(function () {
		// Paks idx
		var defer = Q.defer();
		var list = [];
		fs.readFile(file[0][2], 'hex', function (err, data){
			if (err) throw err;
			var indexbuf = new Buffer.from(data, 'hex');
			for (var i = 0, k = idx[0][0] ; i < indexbuf.readUIntLE(0, idx[0][0]) ; i++){
				indexes[i]=[];
				for ( var j = 1 ; j < idx.length ; j++){
					switch (j){
						case 1 :
							indexes[i].push(indexbuf.slice(k, k+idx[j][0]).toString());
							break;
						case 4 :
						case 5 :
							indexes[i].push(indexbuf.readUIntLE(k, idx[j][0]));
							break;
						default :
							break;
					}
					k += idx[j][0];
				}
			}
			defer.resolve(indexes);
		});
		return defer.promise;
	}
	
	).then(function () {
		// Paks only
		var defer = Q.defer();
		var content = [];
		fs.readFile(file[0][0], 'hex', function (err, data){
			if (err) throw err;
			var buf = new Buffer.from(data, 'hex');
			var content = [['번호']];
			for (var i = 2 ; i < file.length ; i++) content[0].push(file[i][1]);
			for (var i = 0 ; i < indexes.length ; i++){
				var index = indexes[i][1];
				var temptuple = [parseInt(indexes[i][0].substr(0,4))];
				for ( var j = content.length ; j < parseInt(indexes[i][0].substr(0,4))+1 ; j++) content[j] = [j-1];
				for ( var j = 2 ; j < file.length ; j++){
					if ( file[j][0] < 0 ){
						var temp = buf.slice(index, index + buf.slice(index, index + Math.abs(file[j][0])).indexOf(0xFF));
						for ( var l = 0 ; l < temp.length ; l++) temp[l] = 0xFF - temp[l];
						temptuple.push(iconv.convert(temp).toString());
					} else {
						temptuple.push( (file[j][1].indexOf("?")>-1) ?
							('0x'+buf.slice(index, index+file[j][0]).toString('hex')) :
							buf.readUIntLE(index, file[j][0]));
					}
					index += Math.abs(file[j][0]);
					content[parseInt(indexes[i][0].substr(0,4))+1] = temptuple;
				}
			}
			// XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(content), file[0][0].substr(file[0][0].indexOf('/')+1, file[0][0].length-1)+'.pakonly');
			defer.resolve(content);
		});
		return defer.promise;
	}
	
	).then(function (content) {
		var defer = Q.defer();
		// with subfiles
		var pakfiles = fs.readdirSync(file[0][3]);
		var pakfilescount = pakfiles.length - 2;
		for ( var i = 0 ; i < pakfiles.length ; i++){
			if (!(parseInt(pakfiles[i]) > -1)) continue;
			//console.log(parseInt(pakfiles[i].substr(0,4))+1);
			(function (i){
				fs.readFile(file[0][3] + pakfiles[i], 'hex', function (err, data){
					if (err) throw err;
					var buf = new Buffer.from(data, 'hex');
					var index = 0;
					var temptuple = [parseInt(pakfiles[i].substr(0,4))];
					
					for ( var j = 2 ; j < file.length ; j++){
						if ( file[j][0] < 0 ){
							var temp = buf.slice(index, index + buf.slice(index, index + Math.abs(file[j][0])).indexOf(0xFF));
							for ( var l = 0 ; l < temp.length ; l++) temp[l] = 0xFF - temp[l];
							temptuple.push(iconv.convert(temp).toString());
						} else {
							temptuple.push((file[j][1].indexOf("?")>-1) ? 
								('0x'+buf.slice(index, index+file[j][0]).toString('hex')) : 
								buf.readUIntLE(index, file[j][0]));
						}
						index += Math.abs(file[j][0]);
					}
					content[parseInt(pakfiles[i].substr(0,4))+1] = temptuple;
					if (--pakfilescount == 0) defer.resolve(content);
				});
			})(i);
		}
		return defer.promise;
	}
	
	).then(function (content) {
		contents[file[0][0].substr(file[0][0].indexOf('/')+1, file[0][0].length-1)] = content;
		XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(content), file[0][0].substr(file[0][0].indexOf('/')+1, file[0][0].length-1));
		contentcounter--;
		if (contentcounter < 1)			
			XLSX.writeFile(wb, 'out.xlsx');
	}
	);
});














