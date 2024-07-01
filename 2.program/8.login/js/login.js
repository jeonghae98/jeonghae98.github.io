$(function () {
    const $frm = $('#login-box');
    const $id = $('#id');
    const $pw = $('#pw');

    const korCheck = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
    const engCheck = /[a-zA-Z]/;
    const numCheck = /[0-9]/;
    const spcCheck = /[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/;

    function idInput() {
        if ($id.val().length < 6) {
            alert('아이디는 한글 제외 영문, 숫자 조합 6자리 이상을 입력해 주세요.');
            $id.focus();
            return false;
        } else {
            if (!engCheck.test($id.val()) || !numCheck.test($id.val()) || korCheck.test($id.val())) {
                alert('아이디는 한글 제외 영문, 숫자 조합 6자리 이상을 입력해주세요.');
                $id.focus();
                return false;
            } else {
                return true;
            }
        }
    }

    function pwInput() {
        if ($pw.val().length < 8) {
            alert('비밀번호는 한글 제외 영문, 숫자 조합 8자리 이상을 입력해 주세요.');
            $pw.focus();
            return false;
        } else {
            if (!engCheck.test($pw.val()) || !numCheck.test($pw.val()) || !spcCheck.test($pw.val()) || korCheck.test($pw.val())) {
                alert('비밀번호는 한글 제외 영문, 숫자 조합 8자리 이상을 입력해주세요.');
                $pw.focus();
                return false;
            } else {
                return true;
            }
        }
    }

    $('button[type="submit"]').on("click", function(e) { 
        e.preventDefault();

        if (!idInput() || !pwInput()) {
            return;
        }

        var myData = $frm.serialize();

        $.ajax({
            type: "POST",
            url: $frm.attr("action"), // 실제 PHP 파일 경로로 변경
            data: myData, // 사용자가 입력한 값 id, pw를 보냄
            dataType: "json", // 서버로부터 받는 데이터 형식 지정
            success: function(res) { // res 변수에는 되돌려 받은 id, name가 있음.
                if (res.user_name && res.user_id) {

                    if (document.referrer.includes('tour')) {
                        alert(`${res.user_name} (${res.user_id})님 예약완료 되었습니다.`)
                    } else
                    alert(`${res.user_name} (${res.user_id})님 반갑습니다`); // 로그인 성공 메시지
                    window.location.href = '../../index.html'; // 메인 페이지로 리다이렉트
                } else if (res.error) {
                    alert(res.error); // 에러 메시지 출력
                }
            },
            error: function(err) {
                console.log('통신 실패', err);
            }
        });
    });
});
