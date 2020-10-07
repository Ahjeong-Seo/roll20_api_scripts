/*
	* by 양천일염
	* https://github.com/kibkibe/roll20_api_scripts
	* 2001007
    
	[ 소개 ]
    
	Roll20에서 여러가지 선택지를 한번에 입력한 뒤 랜덤하게 하나를 뽑을 수 있는 명령어입니다.
  도돈토후나 코코포리아에서 지원하는 choice[X,Y] 기능과 완전히 동일합니다.
  
	[ 사용법 ]
	1. 세션방의 대문에 해당하는 페이지에서 [설정]->[API 스크립트]를 선택해 스크립트 수정 페이지로 들어갑니다. (PRO 계정에서만 이 메뉴가 보입니다.)
	2. New Script에 코드를 복사해 붙여놓습니다.
	3. [Save Script]로 저장합니다. 
	4. 페이지 아래쪽의 API Output Console에 에러 메시지가 표시되지 않는다면 정상적으로 적용된 것입니다. 세션방에서 테스트를 진행할 수 있습니다.
	5. 채팅창에 아래의 형식으로 입력해서 결과값이 랜덤으로 출력되는지를 확인합니다.
  
     choice[항목1,항목2,항목3]
  
  [ 주의사항 ]
  - 반점(,)을 기준으로 선택지를 구분하므로 본문 내용에 반점을 넣을 경우 의도하지 않게 문장이 분할될 수 있습니다.
  - 명령어는 대소문자를 모두 지원합니다. 또한 명령어 앞에 !를 사용하지 않습니다.
  
*/
on("chat:message", function(msg)
{
if (msg.content.substring(0,7).toLowerCase() == "choice[") {
    try {
        var split = msg.content.substring(7,msg.content.length).replace(']','').split(',');
        var rand = split[Math.floor(Math.random() * split.length)];
        if (rand.substring(0) == ' ') { rand=rand.substring(1,rand.length);}
        if (rand.substring(rand.length-1,rand.length) == ' ') { rand=rand.substring(0,rand.length-1); }
        sendChat("CHOICE","-> "+rand);
    } catch(err){
        sendchat("error","/w gm "+err);
    }
}
});
