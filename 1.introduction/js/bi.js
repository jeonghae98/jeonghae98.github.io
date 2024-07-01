$(function() {
    let animatedSec2Title = false;
    let animatedImgBox = false;
    let animatedSec3 = false;
    let animatedColor = false;

    function animateElements() {
        let $scrollTop = $(window).scrollTop();

        if ($(window).width() <= 768) {
            // 모바일 화면일 때의 애니메이션
            if ($scrollTop < 400 && !animatedSec2Title) {
                animatedSec2Title = true;
                $('.sec2-title h2, .sec2-title p').stop().animate({ opacity: '0' }, 300);
            } else if ($scrollTop >= 400 && animatedSec2Title) {
                animatedSec2Title = false;
                $('.sec2-title h2, .sec2-title p').stop().animate({ opacity: '1' }, 300);
            }

            if ($scrollTop < 500 && !animatedImgBox) {
                animatedImgBox = true;
                $('.img-box').stop().animate({ marginTop: '1000px' }, 800);
            } else if ($scrollTop >= 500 && animatedImgBox) {
                animatedImgBox = false;
                $('.img-box').stop().animate({ marginTop: '0px' }, 800);
            }

            if ($scrollTop < 1300 && !animatedSec3) {
                animatedSec3 = true;
                $('.sec3').stop().animate({ opacity: '0' }, 800);
            } else if ($scrollTop >= 800 && animatedSec3) {
                animatedSec3 = false;
                $('.sec3').stop().animate({ opacity: '1' }, 800);
            }

            if ($scrollTop < 2500 && !animatedColor) {
                animatedColor = true;
                $('.color').stop().animate({ opacity: '0', height: '0px' }, 1000);
            } else if ($scrollTop >= 2000 && animatedColor) {
                animatedColor = false;
                $('.color').stop().animate({ opacity: '1', height: '1300px' }, 1000);
            }

        } else {
            // 데스크탑 화면일 때의 애니메이션
            if ($scrollTop < 600 && !animatedSec2Title) {
                animatedSec2Title = true;
                $('.sec2-title h2, .sec2-title p').stop().animate({ opacity: '0' }, 300);
            } else if ($scrollTop >= 600 && animatedSec2Title) {
                animatedSec2Title = false;
                $('.sec2-title h2, .sec2-title p').stop().animate({ opacity: '1' }, 300);
            }

            if ($scrollTop < 600 && !animatedImgBox) {
                animatedImgBox = true;
                $('.img-box').stop().animate({ marginTop: '1000px' }, 800);
            } else if ($scrollTop >= 600 && animatedImgBox) {
                animatedImgBox = false;
                $('.img-box').stop().animate({ marginTop: '0px' }, 800);
            }

            if ($scrollTop < 1700 && !animatedSec3) {
                animatedSec3 = true;
                $('.sec3').stop().animate({ opacity: '0' }, 800);
            } else if ($scrollTop >= 1700 && animatedSec3) {
                animatedSec3 = false;
                $('.sec3').stop().animate({ opacity: '1' }, 800);
            }

            if ($scrollTop < 2200 && !animatedColor) {
                animatedColor = true;
                $('.color').stop().animate({ opacity: '0', height: '0px' }, 200);
            } else if ($scrollTop >= 2200 && animatedColor) {
                animatedColor = false;
                $('.color').stop().animate({ opacity: '1', height: '600px' }, 700);
            }
        }
    }

    // 초기 로딩 시 애니메이션 초기화
    animateElements();

    // 스크롤 이벤트를 적절히 처리하여 성능 최적화
    $(window).scroll(function() {
        // 스크롤 이벤트 발생 시 애니메이션 실행
        animateElements();
    });
});
