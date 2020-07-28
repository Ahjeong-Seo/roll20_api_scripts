/*
	* by 양천일염
	* https://github.com/kibkibe/roll20_api_scripts
	* 200729
  
	[ 소개 ]
	Roll20에서 캠페인 안의 jukebox 오디오들의 볼륨을 일괄적으로 최대치로 올리고
  반복재생 옵션도 활성화 시켜주는 스크립트입니다.
  
	[ 설치법 ]
	1. roll20 세션방의 대문에 해당하는 페이지에서 [설정]->[API 스크립트]를 선택해 스크립트 수정 페이지로 들어갑니다. (PRO 계정에서만 이 메뉴가 보입니다.)
	2. New Script에 이 코드들을 복사해 붙여놓고 [Save Script]로 저장합니다. 
	3. 페이지 아래쪽의 API Output Console에 에러 메시지가 표시되지 않는다면 정상적으로 적용된 것입니다.
	
	[ 테스트&사용법 ]
  1. jukebox에 오디오를 여럿 넣은 뒤 채팅창에 '!amplify'를 입력해서 볼륨이 변경되는지 확인합니다.
  2. '!amplify loop'를 입력하면 볼륨과 함께 반복재생 옵션도 변경됩니다.
	
*/
on("chat:message", function(msg)
{
if (msg.type == "api"){
    if (msg.content.indexOf("!amplify") === 0) { //명령어를 변경하실 수 있습니다.
        var jukebox = findObjs({_type: "jukeboxtrack"});
        for (var i=0;i<jukebox.length;i++) {
            var obj = jukebox[i];
    	    if(msg.content.includes("loop")){
                obj.set({volume: 100, loop:true});
    	    } else {
                obj.set({volume: 100});
    	    }
        }
    }
}
});
