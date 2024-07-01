$(function() {
    function animateElements() {
        let $scrollTop = $(window).scrollTop();

        if ($(window).width() <= 768) {
            // 모바일 화면일 때의 애니메이션
            if ($scrollTop < 200) {
                $('.sec1').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec1').stop().animate({ opacity: '1' }, 300);
            }

            if ($scrollTop < 600) {
                $('.sec2').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec2').stop().animate({ opacity: '1' }, 300);
            }
                
            if ($scrollTop < 700) {
                $('.img-box').stop().animate({ marginTop: '1000px' }, 500);
            } else {
                $('.img-box').stop().animate({ marginTop: '0px' }, 500);
            }

            if ($scrollTop < 1100) {
                $('.sec3').stop().animate({ opacity: '0' }, 700);
            } else {
                $('.sec3').stop().animate({ opacity: '1' }, 700);
            }

            if ($scrollTop < 1400) {
                $('.vission').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission').stop().animate({ opacity: '1'  }, 1000);
            }

            if ($scrollTop < 1500) {
                $('.vission2').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission2').stop().animate({ opacity: '1'  }, 1000);
            }
        } else {
            // 데스크탑 화면일 때의 애니메이션
            if ($scrollTop < 200) {
                $('.sec1').stop().animate({ opacity: '0' }, 100);
                $('.plus').stop().animate({ opacity: '0' }, 1000);
                $('.plus').stop().animate({ marginTop: '-200px' }, 300);
            } else {
                $('.sec1').stop().animate({ opacity: '1' }, 100);
                $('.plus').stop().animate({ opacity: '1' }, 1000);
                $('.plus').stop().animate({ marginTop: '0px' }, 500);
            }

            if ($scrollTop < 10) {
                $('.sec2').stop().animate({ opacity: '0' }, 300);
                $('.plus2').stop().animate({ opacity: '0' }, 1000);
                $('.plus2').stop().animate({ marginTop: '-200px' }, 300);
            } else {
                $('.sec2').stop().animate({ opacity: '1' }, 200);
                $('.plus2').stop().animate({ opacity: '0' }, 1000);
                $('.plus2').stop().animate({ marginTop: '0px' }, 700);
            }

            if ($scrollTop < 200) {
                $('.sec3').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec3').stop().animate({ opacity: '1' }, 300);
            }

            if ($scrollTop < 1200) {
                $('.vission').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission').stop().animate({ opacity: '1'  }, 500);
            }

            if ($scrollTop < 1800) {
                $('.vission2').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission2').stop().animate({ opacity: '1'  }, 500);
            }
        }
    }

    // 초기 로딩 시 애니메이션 실행
    animateElements();

    // 스크롤 이벤트를 적절히 처리하여 성능 최적화
    $(window).scroll(function() {
        // 스크롤 이벤트 발생 시 애니메이션 실행
        animateElements();
    });
});
