/*
	* by 양천일염
	* https://github.com/kibkibe/roll20_api_scripts
	* 200517
    
	[ 소개 ]
    
	Roll20에서 ORPG를 진행하면서 잡담을 하고 싶을 때 문구 앞에 ! (느낌표+공백)만 추가해서 입력하면
	게임로그보다 상대적으로 덜 눈에 띄는 서식으로 채팅창에 표시 해주는 기능입니다.
	또한 플레이어와 캐릭터의 채팅을 분리하고 싶지만 As를 일일히 변경하기는 번거로운 사용자에게는
	As를 캐릭터로 둔 채로 사용해도 플레이어의 프로필로 채팅을 출력시켜 주는 기능도 있습니다.

	[ 사용법 ]

	1. 세션방의 대문에 해당하는 페이지에서 [설정]->[API 스크립트]를 선택해 스크립트 수정 페이지로 들어갑니다. (PRO 계정에서만 이 메뉴가 보입니다.)
	2. New Script에 이 코드들을 복사해 붙여놓고 [Save Script]로 저장합니다. 
	3. 페이지 아래쪽의 API Output Console에 에러 메시지가 표시되지 않는다면 정상적으로 적용된 것입니다. 세션방에서 테스트를 진행할 수 있습니다.
	4. 채팅창에 '! 하고싶은말'의 형식으로 입력해 테스트를 해봅니다.
*/
on("chat:message", function(msg)
{
if (msg.type == "api"){
    if (msg.content.indexOf("! ") === 0) {
		sendChat("player|"+msg.playerid,"<span style='color:#aaaaaa'>"+msg.content.substring(2, msg.content.length)+"</span>");
    }
}
});
