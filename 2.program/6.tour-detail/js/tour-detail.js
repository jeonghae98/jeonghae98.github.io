$(function() {
    $('.detail-content, .detail-info, .list-btn, .content-img, .p').css({
        'opacity': 0,
        'position': 'relative',
        'right': '-100px' // 오른쪽으로 100px 이동하여 숨김
    });

    function checkVisibility() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();

        $('.detail-content, .detail-info, .list-btn, .content-img, .p').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            // 요소가 뷰포트에 들어오면 슬라이드 인
            if (scrollTop + windowHeight > elementTop && scrollTop < elementBottom) {
                $(this).stop().animate({
                    'opacity': 1,
                    'right': '0'
                }, 500);
            } else {
                $(this).stop().animate({
                    'opacity': 0,
                    'right': '-100px'
                }, 500);
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    $(window).on('resize', checkVisibility);
    checkVisibility(); // 페이지 로드 시 초기 가시성 확인
});

