/*

[건의] 이왕 조각을 도입했으면 전반적으로, 세분화해서 적용해야하지 않을까.

게시물이 분명히 올라갔다고 뜨는데 정작 글이 안올라가네요. 한문단씩 붙여넣기해서 수정하는식으로 올려볼게요. 어디가 문제인지 모르니 원... 이런 버그는 게임에서만 봅시다 제발... 공홈에서까지 보긴 싫어요..

조각 시스템 자체는 나쁜 시스템이 아닙니다. 확정된 목표 갯수가 표시됨으로 인해 기존에는 유추해야만 했던 드랍률을 누구나 쉽게 예상할 수 있게 되었죠. 효율성 면에서 따져봐도 기존 1인시공이나 GS, 크로우 시공의 경우와 비교하면 현재의 조각시스템이 훨씬 낫다는 것은 부정할 수 없습니다. 현재 조각 시스템이 문제가 되는건 에픽 이상시공과 메디치, 이올린 시공이 기존보다 못한 상태가 되었다는 것이겠죠. 이 부분에서 소맥의 세심한 배려가 부족했다는 생각입니다.

조각 시스템을 제대로 정착시키고 싶다면, 에픽 이상 아르카나는 아예 완제를 드랍하지 않고 이를 확실히 보완하는게 훨씬 나은 방법입니다. 확률도 애매모호하게 99%로 하지말고 100%로 하세요. 유저들에게 공개하지도 않을 완제 드랍률 때문에 모래 4개짜리 이상시공에서도 조각이 1개씩만 드랍되는 현 상태는 조각시스템이라는 것이 보장하는 예측가능성을 무시해버리는 단점이 있습니다. 조각 시스템이 별 도움이 안되는거죠. 이럴바엔 완제드랍을 완전히 없애버리고, 모래 당 조각 수를 확정적으로 보장해주는게 옳은 방향입니다. 모래 2개짜리 시공이 조각 1개 확정이라면 모래 4개짜리 시공은 난이도까지 고려해서 조각 2~3개를 주는게 옳습니다. 전설이야 비교할 대상이 없기 때문에 기존처럼 1개씩만 드랍해도 무리는 없겠지요.

일단 대전제로, 아르카나 조각은 퀘스트 아이템 가방에 배치하도록 하거나 조각전용 인벤토리를 구현합시다. 아무리 가방칸을 캐시로 구입할 수 있다고 해도 가방칸은 한계가 있습니다. 당장 창고를 확장해줄것도 아니잖아요? 이건 아래에서 제안할 조합기에서 조각드랍과 연관됩니다.

단순히 천편일률적인 조각 10개, 20개로 나눌 것이 아니라 다음 액트가 나올 때마다 필요한 조각의 갯수를 줄여주는 방식의 도입도 필요합니다. 지금이야 이올린 메디치를 현역으로 쓸 수 있다지만 두달 뒤 이들이 은퇴하고나서도 조각 20개씩을 요구하는건 말이 안되는 일입니다. 멘토로 쓸 수 있다고 하더라도요. 적npc와 아르카나간의 랭크 차이에 따라 경험치량이 100% ~ 20% 로 차등지급되듯이, 새 액트가 나올때마다 요구하는 조각의 수도 줄어야 합니다. 현재 상태인 에픽 10개, 전설 20개를 최신액트 아르카나의 필요갯수로 정했다면, 액트가 하나씩 밀려날때마다 요구하는 조각의 갯수라 20%씩 줄어들고, 최하 20%선을 유지하도록 하는게 적정선이라고 생각합니다. 지금을 예시로 든다면 액4 카림을 먹기 위해서는 조각 8개, 크로우는 조각 16개 만을 요구하도록 하고, 액2 수준의 이상시공을 제공하는 메디치 이올린 등은 에픽은 조각 4개, 전설은 조각 8개만을 요구하도록 말입니다. 한달이 지나 새 액트가 나오면 다시 조각2개, 4개를 요구하도록 말이죠. 이 정도는 되어야 후발주자들이 따라올 엄두가 납니다. 부드럽게 넘어갈 수도 있고요.

조합기도 될놈될 안될안 3% 창렬확률에 기대도록 하지말고, 그냥 확정으로 조각을 주도록 합시다. 현재 1000개 3%를 기준으로 영자 33333개당 전설 1개 수준입니다. 이 정도 효율을 유지한다는 가정 하에 영자 1500개를 넣으면 확정적으로 랜덤한 전설조각 1개를 주는겁니다. 30000개를 넣으면 조각 20개이니 효율 상 기존보다 좋긴 하지만 20개를 채우기 전엔 완제가 아니기 때문에 소맥입장에서도 용인할만한 드랍률 상향입니다. 안그래도 은퇴할 조합기 아르카나가 속을 썩이고 있다고 들었습니다. 윗 문단에서 지나간 액트의 아르카나들에 따라서 필요조각의 갯수를 줄이는걸 건의했습니다. 조합기 아르카나와 저널 아르카나의 공통점은 한계 랭크입니다. 현재 최신 아르카나들의 한계랭크는 55로, 액트마다 이를 똑같이 공유합니다. 따라서 조합기 아르카나들의 필요조각 갯수를 한계랭크가 밀려날 때마다 20%씩 줄여, 최소 20%선을 유지하도록 하는 방안이 좋다고 봅니다. 한계랭크 55인 엘리자베스의 필요조각갯수를 20개로 하고, 한계랭크 40인 번스타인의 경우는 요구조각을 8개로 하는게 적절한 수준이라고 봅니다. 역시 한계랭크 60짜리 아르카나가 출시되면 이전 아르카나들의 요구갯수를 20%씩 줄이는 방식입니다. 6액트가 나오면 번스타인은 4개만 요구하도록 하는것이지요.

이러면 다들 몇달씩 기다렸다가 조각 요구량이 줄었을 때 파밍하지 않겠느냐 할 수 있습니다. 하지만 이 부분이야말로 과금과 무과금을 구분할 수 있는 중요한 요소라고 봅니다. 과금유저는 동일시점에 최신컨텐츠를 무과금유저보다 무조건 빨리 접할 수 있어야 합니다. 그러나 지금까지의 시스템은 운 좋은 무과금이 운 나쁜 과금보다 파밍을 먼저 해버리는, 과금유저들의 기운을 쭉 빠지게 만드는 방식이었지요. 이런 시스템은 과금욕구를 불러일으키기에 좋은 환경을 제공해주지 않습니다. 물론 이런 논리만으로 기다렸다 파밍하려는 유저를 붙잡기는 힘들겁니다. 따라서 최신 아르카나에 획득하려는 유저들을 붙잡을 확실한 보상이 필요합니다. 현재 최신에 해당하는 액트의 저널 아르카나와 조합기 아르카나의 경우에 한해서 뎀감 10%와 피해량/회복량 +10% 기본패시브를 걸어주는겁니다. 수준이 과하다면 5%로 줄여도 될겁니다. 다음 액트나 조합기 아르카나가 출시되면 기존에 패시브를 받는 아르카나들의 패시브를 삭제하고, 해당 최신 아르카나가 이 패시브를 대신 받는 것이죠. 이렇게 하면 적어도 아르시아나 에픽듀란/신디/듀나미스 같은 개똥같이 밸런싱한 아르카나들이 출시된 경우를 제외하고는 충분한 과금의욕을 불러올 수 있다는 생각입니다.

물론 이런 철지난 아르카나들의 실질적 드랍률 상향이 운영진 입장에서 수익 문제가 될겁니다. 따라서 아바타 랭크에 비례해서 랭크가 낮은 시공의 영자 드랍량을 줄이는걸 건의합니다. 드랍률은 다른거랑 섞이지 말고 제발 좀 100%로 하세요. 현재 모래 1개짜리 시공이 90개, 2개가 250개, 4개가 500개 수준의 영자를 드랍하고 있습니다. 몇몇 시공이 그렇지 않습니다만, 이 기회에 통일좀 하세요. 아바타 랭크 이상의 시공은 여전히 90개, 250개, 500개 수준의 영자를 드랍하고, 그보다 낮은 랭크를 요구하는 시공은 5랭크씩 끊어 액트 단위로 영자량을 줄이는겁니다. 위의 액트에 따른 조각요구량이 20%씩 줄어 최소 20%인 것처럼, 여기도 동일하게 영자보상량을 20%씩 끊는 것이죠. 예를 들어 아바타가 15랭크라면 메디치와 이올린 시공에서 기존처럼 90개, 250개, 500개의 영자를 얻지만, 아바타 랭크가 30랭크라면 5단위로 절삭해서 40%의 영자만을 획득하도록 하는겁니다. 이러면 패치 이후 성장하는 유저는 선택할 수 있습니다. 적정랭크구간에서 시공을 돌아 힘들지만 영자를 100% 보장받아 시공 조각은 물론 조합기 조각도 제대로 보장받으면서 성장할지, 아니면 일단 랭크를 빠르게 30을 찍고 40%의 영자만 받으면서 메디치 이올린을 쉽고 빠르게 파밍할지 말입니다.

이렇게만 하면 해당 시공의 파밍을 완료한 저렙유저를 도와주는 유저는 손해만 볼 수 있지 않느냐 할 수 있습니다. 파티원 A, B, C, D가 있다고 할때 각각의 랭크로 인해 A는 이 시공에서 40%의 영자만을 받을 수 있고, B는 60%, C는 80%, D는 100% 받을 수 있다고 합시다. 이 4명중 가장 높은 영자 %를 받는 사람을 기준으로 해서 모든 파티원이 해당 영자 %를 적용받도록 하면 고렙유저가 저렙유저를 돕더라도 손해보는건 아니게 됩니다. 이 경우에는 D가 100%로 가장 많은 비율에 해당하니 4명 모두 영자량 100%를 보장받게 되니 모두 만족하게 됩니다.

전반적으로 파밍이 쉬워졌으니 이를 보완할 방법으로 과금유저들이 막각러쉬를 할 수 있도록 막각을 변경해야 한다고 봅니다. 현재 시스템 하에서 공방항마체치회막 8가지 스탯 중 하나가 각성되고 있지요. 직업별 비중이 어떻게 되어있는지는 알 수 없지만 랜덤으로 가정해서 각각 12.5%인 상태이고, 다음주 패치에서 5%, 7%로 이분화되니 결국 원하는 한 스탯의 7%의 벽을 뚫으려면 16개 경우의 수 중 하나인 6.25%를 뚫어야 합니다. 즉, 기대값으로만 따지면 16번의 각성, 에픽과 저널전설을 기준으로 32장의 아르카나가 필요하다는 말이지요. 이렇게 많은 아르카나를 요구하는건 과금유저를 위해 합리적이긴 하나 어디까지나 확률에 기반한 될놈될 시스템이란 근본적인 문제가 존재합니다. 조각으로 따지면 320개, 전설은 640개로 모래로 따지면 640개, 1280개입니다. 이왕 이렇게 많은 양을 소비하게 하겠다면 좀 확정적으로 막각이 되는 수준을 보장해주길 바랍니다. 확률로 보장할 것이 아니라 실질적으로 의미있는 스탯만, 올릴 수 있도록 해서 각 스탯 추가량을 공방항마체의 경우 20%, 치회막의 경우 10% 한도로 한 다음 매 각성당 한 스탯을 공방항마체 4%, 치회막 2%씩 누적해서 올려주는겁니다. 예를들어 물리딜러의 경우는 공격력 체력 치명 회피 4개 스탯이 의미있는 수준이며, 따라서 각 스탯 당 필요한 각성의 수가 5회이니 필요한 총 각성 횟수는 20번이 됩니다. 이런 시스템을 제공해준다면 과금유저가 만족할만한 수준 내에서 각성을 할 수 있으니 과금을 할 명분이 생깁니다. 지금처럼 될놈될 크로우가 마법력 3%가 떠서 과금의욕을 팍 죽여버리는 현상은 배제할 수 있다는 겁니다. 이정도 스탯 격차가 있다면 무과금과 과금의 합당한 격차를 제공해 줄 수도 있는겁니다. 추가로 이왕 조각 시스템을 도입했으니 각성도 지금처럼 완제를 써서 할게 아니라 조각을 사용해서 할 수 있도록 변경합시다. 아르카나, 즉 인조병기를 제작해놓고 다시 갈아서 집어넣는다는건 세계관 컨셉과 괴리가 있다는 생각입니다.

개인적으로 확정드랍 시스템의 한 부류인 조각시스템을 도입한 것을 환영하는 바입니다. 세심하게 적용해서 유저들의 반발을 최소화하도록 하고 기존보다 더 편리하고 좋은 시스템으로 정착시키는게 중요하다 봅니다.


요약 : 조각 시스템을 잘 활용해서 구시대 아르카나는 쉽게 얻을 수 있도록, 대신 최신 아르카나는 한정적으로 강하게, 각성은 투자한만큼 확정적 결과를 보장해서 과금의욕을 부를 수 있도록하자.


1.
전라 무적 모두 만피일시 군진 앞 포지션(2번)이 받도록

2.
카르타 착용제한을 각각 아르카나 랭크가 아니라 아바타 랭크로
어차피 만랭 이전에 이상시공에서 쓸 일도 없고, 유저편의성을 위해 이정도는 해줬으면 함.

3.
도트, 상흔, 은화살 각종 부가효과 계수 표시(은화살은 감소 쿨타임도 표시)

4.
시공보상 아바타 랭크에 따라 차등화
아바타 랭크가 해당시공 적정랭크보다 높을수록 영자 및 기타보상은 적게 드랍, 아르카나 획득률은 대폭 높게.

5.
아르카나 해체 보상을 최대랭크에 비례해서 차등화(4.와 연계해서 일관성이 있도록)

6.
시공 경험치를 랭크 낮은 아르카나가 더 많이 받을 수 있도록.(현재는 적정랭크보다 높으면 손해만 보는 방식. 낮은 경우에는 보너스가 없음)

7.
현 군진 내 캐릭터들의 경험치가 상한선에 도달했다면 경험치를 상한선에 도달하지 못한  나머지 아르카나에게 배분할 수 있도록..

8.
아바타의 경험치가 상한선에 도달했다면 멘토도 경험치를 받을 수 있게.

9.
멘토로도 군진요건을 충족할 수 있게.

10.
파티인원수가 늘어날수록 던전난이도 상승 or 파티인원수가 낮을수록 경험치 / 고급 보상 드랍률 증가

11.
이속감소 디버프 미중첩 버그 해결
현재 걸린 이속 디버프 중 가장 높은 이속감소량을 가진 디버프의 이속감소만 적용하도록.

12.
방어 속성전환, 스킬 속성전환 카르타 출시 - 공140 카르타 1개가 빠져야되니 밸런스에 큰 문제 없음.

13.
뽑기 및 전투, 시공보상 확률보정 시스템 도입
언제까지 될놈될 안될안?

14.
U창 버그 해결

15.
시체 잔존 버그 해결

16.
딸피대상 장판기를 딸피 아르카나 뒤로 빼는식으로 파훼하는 방식 불가능하게 수정. 데미지 한대정도는 맞아도 죽지 않도록 감소. 범위 감소.

17.
저널 상에서의 스탯 현재 가능한 최대랭크로 표시

18.
화면에 뜨는 데미지, 데미지 크기순으로 폰트크기 반영 40짜리 치명타가 1000짜리 평타를 가리는건 말이 안됨.

*/


var express = require('express')
	, http = require('http')
	, app = express()
	, server = http.createServer(app);

var cheerio = require('cheerio');
var fs = require('fs');
var arcanas = [];
var formations = [];

var curmaxrank = 30;

function getarcanaid (fullname){
	var grades = {'희귀':'R', '영웅':'EP', '전설':'LE'};
	for ( var id in arcanas)
		if (fullname == grades[arcanas[id].등급] + ' ' + arcanas[id].nickname + ', ' + arcanas[id].name)
			return id;
	return -1;
}

var 등급 = {'전설':0, '영웅':1, '희귀':2, '우수':3, '일반':4};
var bgcolor = ['orange', 'yellow', 'cyan', '6677ff', 'AED581'];
var 무기 = {'검과 방패':0, '창과 방패':1, '장검':2, '대검':3, '장총':4, '권총':5, '마법봉':6, '비전구':7, '법장':8, '신성구':9, '석궁':10, '단검':11};

Q().then(function () {
	console.log('아르카나 리스트 파싱');
	var defer = Q.defer();
	var list = {};
	// return list; // 오프라인일때
	request(
		{url: 'http://genesis4.inven.co.kr/dataninfo/arcana/'},
		function (err, resp, body) {
			var $ = cheerio.load(body);
			$('.genesis4DbArcanaList.genesis4DbCommonList table tbody > tr td.arcananame.left a').each(function (){
				var id = $(this).attr('href').substr(18,8);
				var fullname = $(this).children('.arcananame').text();
				var arcananame = fullname.substr(0,fullname.indexOf($(this).children('.arcananame').children('.name').text()));
				var arcanaicon = $(this).children('.arcanaicon').attr('src');
				list[id] = {'arcananame':arcananame, 'arcanaicon':arcanaicon};
			});
			defer.resolve(list);
		});
	return defer.promise;
}



).then(function (list) {
	var size=0, count=0;
	try {
		for (var index in list) count++;
		var temp = JSON.parse(fs.readFileSync('arcanaListRaw.txt', 'utf8'));
		for (var index in temp) {
			list[index] = temp[index];
			size++;
		}
	} catch (err){
		// console.log(err);
	}
	console.log('아르카나 RawData 파싱 : ' + size + ' / ' + count);
	if (size >= count) return list;

	var defer = Q.defer();
	var urlprefix = 'http://genesis4.inven.co.kr/dataninfo/arcana/detail.php?code=';
	
	for ( var index1 in list){
		if ( list[index1].arcanaRaw != undefined ) continue;
		
		request(
			{url: urlprefix+index1},
			function (err2, resp, body) {
				var id = resp.request.path.substr(34,8);
				var $ = cheerio.load(body);
				if ($('#genesis4Db').length == 0) return;	// 인벤 오류
				$('.genesis4DbCommonDataboard').remove();
				$('.combinedBasicInfo3').remove();
				$('.genesis4DbCommonDetail .formation').remove();
				$('#genesis4Db').attr('class', id);
				list[id].arcanaRaw = $('#genesis4Main').html();
				if (!--count) defer.resolve(list);
		});
	}
	return defer.promise;
}




).then(function (list){
	console.log('아르카나 정보 가공');
	fs.writeFile('arcanaListRaw.txt', JSON.stringify(list), 'utf8');
	// console.log(new Date().getTime());
	
	var attr_colors = [0,'무','화','수','뇌','명','암'];
	
	for (var index1 in list){
		var $ = cheerio.load(list[index1].arcanaRaw);
		var arcana = {};
		
		// 아르카나 ID
		arcana.id = index1;
		// 아르카나 이름
		arcana.name = $('h1.genesis4DbCommonTitle').text();
		// 아르카나 별명
		arcana.nickname = list[index1].arcananame;
		// 아르카나 큰 사진
		arcana.portrait = $('div.portrait div img').attr('src');
		// 아르카나 작은 사진
		arcana.arcanaicon = list[index1].arcanaicon;
		
		// 아르카나 기본정보
		arcana.stat = {};
		$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td img').parent().text(attr_colors[$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td img').attr('src').substr(74,1)]);
		$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td').each(function (){
			arcana.stat[$(this).prev().text()]=$(this).text();
		});
		arcana.stat.maxrank = $('.abilityInfo .infoBody .infoWrap .infoBorder table tbody .first.buttonSet .left input[type=hidden]').val();
		
		// 아르카나 기본스탯
		$('.abilityInfo .infoBody .infoWrap .infoBorder table tbody > .dataState td').each(function(){
			arcana.stat[$(this).attr('class')]=$(this).attr(arcana.stat.maxrank<curmaxrank ? 'state'+arcana.stat.maxrank : 'state'+curmaxrank);
		});
		
		// 아르카나 스킬정보 index 0 : 자동기, 1 : 일반기, 2 : 필살기, 3 : 패시브
		arcana.skills={};
		$('.skillList .listBody .listBodyInner .genesis4DbSkillList.genesis4DbSkillList-Default table tbody tr').each(function(){
			var skillnamefull = $(this).children('.skillname').text();
			var skillkind = skillnamefull.substr(skillnamefull.length-3,3);
			var skillname = skillnamefull.substring(0,skillnamefull.length-4);
			var skill ={};
			skill.skillname = skillname;
			skill.skillicon = $(this).children('td.skillname.left').children('span.skillname').children('img.arcanaicon').attr('src');
			$(this).children('[class!="skillname left"]').each(function(){
				if ( $(this).attr('class') == 'skilleffect left') $(this).find("br").replaceWith("newline");
				skill[$(this).attr('class')]=$(this).text();
			});
			if(arcana.skills[skillkind] == undefined) arcana.skills[skillkind]=[];
			arcana.skills[skillkind].push(skill);
		});
		arcanas.push(arcana);
	}
	
	
	
	arcanas.sort(function (a,b){		
		if ( 등급[a.stat.등급] < 3 || 등급[b.stat.등급] < 3 ){
			if (등급[a.stat.등급] > 등급[b.stat.등급]) return 1;
			if (등급[a.stat.등급] < 등급[b.stat.등급]) return -1;
		}
		if (무기[a.stat.무기] > 무기[b.stat.무기]) return 1;
		if (무기[a.stat.무기] < 무기[b.stat.무기]) return -1;
		if ( 등급[a.stat.등급] > 2 && 등급[b.stat.등급] > 2 ){
			if (a.skills.자동기[0].skillname+a.skills.일반기[0].skillname+a.skills.필살기[0].skillname > b.skills.자동기[0].skillname+b.skills.일반기[0].skillname+b.skills.필살기[0].skillname) return 1;
			if (a.skills.자동기[0].skillname+a.skills.일반기[0].skillname+a.skills.필살기[0].skillname < b.skills.자동기[0].skillname+b.skills.일반기[0].skillname+b.skills.필살기[0].skillname) return -1;
		}
		if (a.stat.maxrank < b.stat.maxrank) return 1;
		if (a.stat.maxrank > b.stat.maxrank) return -1;
		// console.log(a.name + '    ' + b.name);
		return 0;
	});
	
	var 스킬종류 = {
		"공격" : [ /\[(.*)\] (\d+)~(\d+)%의.* (.*)속성 (물리|마법)피해를 입/, "적용스탯", "최소계수", "최대계수", "속성", "피해종류"],
		"힐" : [/아군 군단원 중 생명력이 가장 많이 손실된 한 명의 생명력을 \[([가-힣]*)\] (\d+)~(\d+)%만큼 ((회복))한다/, "적용스탯", "최소계수", "최대계수", "속성", "피해종류"],
		"위협수준증가" : [/스킬 사용 시 피해량에 비해 큰 위협수준을 생성한다\./, '부가효과'],
		"사기증가" : [ /사기[를가].*증가/ ],
		"재사용 대기시간 감소" : [ /(일반|필살)기.*재사용.*대기시간.*(\d+)초.*감소/, '부가효과'],
		"광역도발" : [ /주변.*도발/, '부가효과' ],
		"단일도발" : [ /^((?!주변).)*도발/, '부가효과' ],
		"방어무시" : [/방어.*무시/, '부가효과'],
		"은화살 중첩 증가" : [/은화살 중첩이 (\d+)개 증가한다/, '부가효과'],
		"위협수준 감소" : [/위협수준이 (\d+%) 감소한다/, '부가효과'],
		"능력 증가" : [/(공격|방어|마법|항마|체)력이 (\d+%) 증가한다/, '부가효과'],
		"침묵" : [/\(침묵:[가-힣\s]*(\d+)초[가-힣\s]*\)/, '부가효과'],
		"몰라" : [/(일반기|필살기)? 대상이 (.)속성이면 (항상 치명타로 적중)한다/,'부가효과'],
		
	};
	var 처리완료 = [
		// 검방
		"위협",
		"강한 공격",
		
		// 창방
		"창술",
		"연격", "참격",
		"비", "파", 
		// 장검
		"검법",
		"연", "연 Ⅱ", "화련연격", "섬광격",
		"살격", "진공수라인 절", "섬광연참",
		// 대검
		"양손검법",
		"살", "라이트닝 슬래셔", "스파크 슬래셔", "글래셜 래피드",
		"스파크 스매셔", "선풍참", "약점 집중 공격",
		// 장총
		"사격",
		"연발 사격", "조준 사격", "스파크 블릿", "볼트 블릿",
		"초정밀 조준 사격", "저격",
		// 권총
		"권총 사격",
		"연속 사격", "스태거 쇼크",
		"회전 사격",
		// 마법봉
		"냉기마법", "전격마법", "화염마법", "에테르 마법",
		"아이스 미사일", "아이스 스피어", "파이어 애로우", "프로즌 스톰", "실버 볼트",
		"아이스 스톰", "아이스 필러", "익스플로전", 
		// 비전구
		"암흑마법", 
		"다크 애로우", 
		"다크존", "사일런트 애로우",
		// 법장
		"신성 마법",
		"힐",
		// 석궁
		"궁술",
		"연사", "은빛 연사", 
		"강궁", "폭", "은빛 강궁",
		// 단검
		"투척",
		"연속투척",
		// 패시브
		"견제", "속공", "은신",
	];
	var 인벤미반영 = [
		["창술",		2.1],
		["검법",		1.3],
		["양손검법",	2.3],
		["사격",		1.3],
		["권총 사격",	1.1],
		["궁술",		1.3],
		["투척",		1.3],
	];
	
	for ( var id in arcanas){
		var arcana = arcanas[id];
		arcana.stat.accuracy		=parseFloat(arcana.stat.accuracy)/100;
		arcana.stat.dodge			=(parseFloat(arcana.stat.dodge)/100).toFixed(4);
		arcana.stat.critical		=(parseFloat(arcana.stat.critical)/100).toFixed(4);
		arcana.stat.weaponblock		=(parseFloat(arcana.stat.weaponblock)/100).toFixed(4);
		arcana.stat.criticalbonus	=(parseFloat(arcana.stat.criticalbonus)/100).toFixed(4);
		arcana.stat.shieldblock		=(parseFloat(arcana.stat.shieldblock)/100).toFixed(4);
		
		for ( var index1 in arcana.skills){
			for ( var index2 in arcana.skills[index1]){
				var temp = arcana.skills[index1][index2].cooltime;
				if (temp.indexOf('초')>0) arcana.skills[index1][index2].쿨타임=temp.substr(0, temp.indexOf('초'));
				if (temp == '지속효과') arcana.skills[index1][index2].쿨타임='-';
				for ( var k in 인벤미반영) {
					if ( arcana.skills[index1][index2].skillname==인벤미반영[k][0] ) {
						arcana.skills[index1][index2].쿨타임 = 인벤미반영[k][1];
						break;
					}
				}
				temp = arcana.skills[index1][index2]['skilleffect left'];
				// var temp2=temp.match(/([가-힣\w\s\[\]~%]+[^마][고며다][,.]?\s?|\([^\(\)]*\))/g); // 곟곡-멯멱-
				var temp2=temp.match(/[^newline]+/g);
				var index3 = 0;
				arcana.skills[index1][index2]['skilleffect left'] = [];
				while ( temp2[index3] != undefined )
					arcana.skills[index1][index2]['skilleffect left'].push("▶ " + temp2[index3++]);
				
				
				arcana.skills[index1][index2].적용스탯='-';
				arcana.skills[index1][index2].최소계수='-';
				arcana.skills[index1][index2].최대계수='-';
				arcana.skills[index1][index2].평균계수='-';
				arcana.skills[index1][index2].속성='-';
				arcana.skills[index1][index2].피해종류='-';
				arcana.skills[index1][index2].부가효과=[];
				
				for ( var k in 스킬종류 ){
					temp = arcana.skills[index1][index2]['skilleffect left'][0].match(스킬종류[k][0]);
					if (!temp) continue;
					if ( (index2==0 || index1 == "패시브") && k == "몰라") {
						console.log(arcana.name);
						console.log(temp);
					}
					for ( var m in 스킬종류[k] ){
						if (m < 1) continue;
						if (스킬종류[k][m] == '부가효과'){
							arcana.skills[index1][index2].부가효과.push(k);
							for (var k = 1 ; ; k++){
								if (temp[k] == undefined) break;
								arcana.skills[index1][index2].부가효과.push(temp[k]);
							}
							break;
						}
						arcana.skills[index1][index2][스킬종류[k][m]]=temp[m];
						if (스킬종류[k][m]=="최대계수"){
							arcana.skills[index1][index2].최소계수/=100;
							arcana.skills[index1][index2].최대계수/=100;
							arcana.skills[index1][index2].평균계수=((arcana.skills[index1][index2].최소계수+arcana.skills[index1][index2].최대계수)/2).toFixed(3);
						}
					}
				}
				
				/*
				if ( (index2==0 || index1 == "패시브") && 처리완료.indexOf(arcana.skills[index1][index2].skillname) > -1 ){
					if ( arcana.skills[index1][index2].skillname=="위협수준증가" ) {
						console.log(arcana.name);
						console.log(arcana.skills[index1][index2]['skilleffect left']);
					}
					arcana.skills[index1][index2]['skilleffect left'] = '';
				}
				*/
			}
		}
		
		arcanas[id]=arcana;
	}
}





).then(function () {
	console.log('아르카나 정보 출력');
	var arcanaoutput ='<style>table{border-collapse:collapse;}table,th,td{border:1px solid;}</style>\r\n<table>\r\n';
	var temp ='';
	for (var id in arcanas){
		var arcana = arcanas[id];
		var attrs = '<tr>\r\n'+
			'<th>이름</th>'+
			'<th>ID</th>'+
			'<th>무기</th>'+
			'<th>속성</th>'+
			'<th>타입</th>'+
			'<th>등급</th>'+
			'<th>코스트</th>'+
			'<th>최대각성</th>'+
			'<th>최대랭크</th>'+
			'<th>공격력</th>'+
			'<th>방어력</th>'+
			'<th>마법력</th>'+
			'<th>항마력</th>'+
			'<th>명중확률</th>'+
			'<th>회피확률</th>'+
			'<th>치명확률</th>'+
			'<th>막기확률</th>'+
			'<th>치명피해</th>'+
			'<th>막기숙련</th>'+
			'<th>HP</th>'+
			'</tr>\r\n';
		
		// 아르카나 이름
		attrs +='<tr>\r\n<td rowspan=2 class=arcananame bgcolor='+bgcolor[등급[arcana.stat.등급]]+'>'+arcana.name+'</td>\r\n'+
			'<td class=id>'+arcana.id+'</td>\r\n';
		
		// 아르카나 기본정보, 스탯
		for (var index1 in arcana.stat){
			attrs+= '<td class='+index1+'>'+arcana.stat[index1]+'</td>\r\n';
		}
		
		// 아르카나 스킬정보 index1 0 : 자동기, 1 : 일반기, 2 : 필살기, 3 : 패시브
		attrs+='</tr>\r\n<tr>\r\n<td colspan=19>\r\n<table class=skills>\r\n'+
			'<th>분류</th>'+
			'<th>기술명</th>'+
			'<th>쿨타임</th>'+
			'<th>사거리</th>'+
			'<th>범위</th>'+
			'<th>사기소모</th>'+
			'<th>설명</th>'+
			'<th>쿨타임</th>'+
			'<th>적용스탯</th>'+
			'<th>최소계수</th>'+
			'<th>최대계수</th>'+
			'<th>평균계수</th>'+
			'<th>속성</th>'+
			'<th>피해종류</th>'+
			'<th>부가효과</th>'+
			'</tr>\r\n';
		
		for (var index1 in arcana.skills){
			for ( var index2 in arcana.skills[index1]){
				if ( index1 == '패시브' || index2 < 1) {
					attrs+='<tr>\r\n<td class=skillkind>'+index1+'</td>\r\n';
					for (var index3 in arcana.skills[index1][index2]) {
						if ( index3 == 'skilleffect left' ) attrs += '<td class='+index3+'>'+arcana.skills[index1][index2][index3].join("<br>")+'</td>\r\n';
						else if ( index3 != 'skillicon' ) attrs += '<td class='+index3+'>'+arcana.skills[index1][index2][index3]+'</td>\r\n';
					}
					attrs+='</tr>\r\n';
				}
			}
		}
		
		attrs+='</table>\r\n</td>\r\n</tr>\r\n' +
			'</tr>\r\n';
		temp += attrs;
	}
	arcanaoutput += temp;
	arcanaoutput += '</table>\r\n';
	app.get('/arcanas', function (req, res) {
		res.send(arcanaoutput);
	});
	return;
}



).then(function (){
	console.log('군진 파싱');
	return;
	// 군진정보 파싱부
	var defer = Q.defer();
	request(
		{url: 'http://genesis4.inven.co.kr/dataninfo/formation/'},
		function (err, resp, body) {
			var $ = cheerio.load(body);
			var formation = {};
			
			// 군진 기본정보
			$('.genesis4DbFormationList table tbody tr').each(function (){
				
			});
			
			// 아르카나 기본정보
			arcana.stat = [];
			$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td img').parent().text(attr_colors[$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td img').attr('src').substr(74,1)]);
			$('.basicInfo .infoBody .infoWrap .infoBorder table tbody > tr td').each(function (){
				arcana.stat[$(this).prev().text()]=$(this).text();
			});
			arcana.stat.maxrank = $('.abilityInfo .infoBody .infoWrap .infoBorder table tbody .first.buttonSet .left input[type=hidden]').val();				
			
			// 아르카나 기본스탯
			$('.abilityInfo .infoBody .infoWrap .infoBorder table tbody > .dataState td').each(function(){
				arcana.stat[$(this).attr('class')]=$(this).attr(arcana.maxrank<curmaxrank ? 'state'+arcana.maxrank : 'state'+curmaxrank);
			});
			
			// 아르카나 스킬정보 index 0 : 자동기, 1 : 일반기, 2 : 필살기, 3 : 패시브
			arcana.skills=[];
			$('.skillList .listBody .listBodyInner .genesis4DbSkillList.genesis4DbSkillList-Default table tbody tr').each(function(){
				var skillnamefull = $(this).children('.skillname').text();
				var skillkind = skillnamefull.substr(skillnamefull.length-3,3);
				var skillname = skillnamefull.substring(0,skillnamefull.length-4);
				var skill ={};
				$(this).children().each(function(){
					if ($(this).attr('class')=='skillname left') skill['skillname']=skillname;
					else skill[$(this).attr('class')]=$(this).text();
				});
				if(arcana.skills[skillkind] == undefined) arcana.skills[skillkind]=[];
				arcana.skills[skillkind].push(skill);
			});
			
			arcanas[arcana.id]=arcana;
			if (!--count) defer.resolve(arcanas);
		});
	return defer.promise;	
}


).then(function (){
	console.log('딜 사이클 출력');
	var temp ='';
	var arcanaoutput='';
	var attrs = '<style>'+
		'table{border-collapse:collapse;}table,th,td{border:1px solid;}'+
		'.hide{}'+
		'</style>\r\n<table>\r\n'+
		'<tr>\r\n'+
		'<th>ID</th>'+
		'<th>이름</th>'+
		'<th>등급</th>'+
		'<th>무기</th>'+
		'<th>속성</th>'+
		'<th>타입</th>'+
		'<th>COST</th>'+
		'<th>AD</th>'+
		'<th>AP</th>'+
		'<th>Crit</th>'+
		'<th>CD</th>'+
		
		
		'<th>자동기 계수</th>'+
		'<th>쿨타임</th>'+
		'<th>타수</th>'+
		'<th>일반기 계수</th>'+
		'<th>쿨타임</th>'+
		'<th>타수</th>'+
		'<th>일반기 시간 내 자동기 횟수</th>'+
		'<th>초당 일반기+자동기 타수</th>'+
		'<th>일반기+자동기 DPS</th>'+
		'<th>필살기 계수</th>'+
		'<th>쿨타임</th>'+
		'<th>타수</th>'+
		'<th>초당 사기소모</th>'+
		'<th>필살기 DPS</th>'+
		
		'</tr>\r\n';
	for (var id in arcanas){
		var arcana = arcanas[id];
		// 아르카나 기본정보
		attrs+='<tr>\r\n<td class=id>'+arcana.id+'</td>'+
			'<td bgcolor='+bgcolor[등급[arcana.stat.등급]]+'>'+arcana.name+'</td>'+		
			'<td>'+arcana.stat.등급+'</td>'+
			'<td>'+arcana.stat.무기+'</td>'+
			'<td>'+arcana.stat.속성+'</td>'+
			'<td>'+arcana.stat.타입+'</td>'+
			'<td>'+arcana.stat.코스트+'</td>'+
			'<td>'+arcana.stat.physicaldamage+'</td>'+
			'<td>'+arcana.stat.magicdamage+'</td>'+
			'<td>'+arcana.stat.critical+'</td>'+
			'<td>'+arcana.stat.criticalbonus+'</td>';
		
		// 스킬 정보
		attrs+=
		'<td>'+arcana.skills.자동기[0].평균계수+'</td>'+
		'<td>'+arcana.skills.자동기[0].쿨타임+'</td>'+
		'<td>'+arcana.skills.자동기[0].타수+'</td>'+
		'<td>'+arcana.skills.일반기[0].평균계수+'</td>'+
		'<td>'+arcana.skills.일반기[0].쿨타임+'</td>'+
		'<td>'+arcana.skills.일반기[0].타수+'</td>'+
		'<td>'+arcana.skills.일반기[0].자동기횟수+'</td>'+
		'<td>'+arcana.skills.일반기[0].일반기자동기초당타수+'</td>'+
		'<td>'+arcana.skills.일반기[0].일반기자동기DPS+'</td>'+
		'<td>'+arcana.skills.필살기[0].평균계수+'</td>'+
		'<td>'+arcana.skills.필살기[0].쿨타임+'</td>'+
		'<td>'+arcana.skills.필살기[0].타수+'</td>'+
		'<td>'+(arcana.skills.필살기[0].costcp/arcana.skills.필살기[0].쿨타임).toFixed(2)+'</td>'+
		'<td>'+arcana.skills.필살기[0].DPS+'</td>';
		
		
		attrs+='</tr>\r\n';
	}
	arcanaoutput += attrs;
	arcanaoutput += '</table>\r\n';
	app.get('/cycle', function (req, res) {
		res.send(arcanaoutput);
	});
	return;
}




).then(function (){
	console.log('탱 카르타 비교');
	
	var output = '';
	app.get('/tank', function (req, res) {
		res.send(output);
	});
	return;
}
server.listen(8000, function() {
	console.log('Express server listening on port ' + server.address().port);
});



















