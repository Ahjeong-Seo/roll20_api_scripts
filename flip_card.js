/*
	* by 양천일염
	* https://github.com/kibkibe/roll20_api_scripts
	* 200716
    
	[ 소개 ]
	이 스크립트는 Roll20에서 ORPG를 진행하며 카드 기능을 이용할 때
	우클릭으로 카드를 뒤집기 어려운 상황일 경우 명령어를 이용해 뒤집을 수 있도록 지원합니다.
    
	[ 설치법 ]
	1. roll20 세션방의 대문에 해당하는 페이지에서 [설정]->[API 스크립트]를 선택해 스크립트 수정 페이지로 들어갑니다. (PRO 계정에서만 이 메뉴가 보입니다.)
	2. New Script에 이 코드들을 복사해 붙여놓고 [Save Script]로 저장합니다. 
	3. 페이지 아래쪽의 API Output Console에 에러 메시지가 표시되지 않는다면 정상적으로 적용된 것입니다. 세션방에서 테스트를 진행할 수 있습니다.
	4. 맵에 카드를 배치하고 마우스로 클릭하여 선택한 뒤 채팅창에 "!flip"을 입력해 카드가 뒤집히는지 확인합니다.
	
	[ 옵션 ]
	- 명령어를 채팅창에 바로 입력하기 보다는 매크로로 만들어서 플레이어에게도 권한을 공개하는 것을 추천합니다.
    
*/
on("chat:message", function(msg)
{
if (msg.type == "api"){
    if (msg.content.indexOf("!flip") === 0 && msg.selected) {
        for (var i=0;i<msg.selected.length;i++) {
            var obj = getObj("graphic", msg.selected[i]._id);
            var side = obj.get('currentSide')===0?1:0;
            var img = obj.get('sides').split('|')[side].replace('%3A',':').replace('%3F','?').replace('max','thumb');
            obj.set({currentSide:side,imgsrc:img});
        }
    }
}});
