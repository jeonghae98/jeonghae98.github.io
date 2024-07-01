$(function() {
    //===================== main =====================
     // <공통 애니메이션>
     $('.news-title').css('opacity', '1');
     $('.search').css('opacity', '1');


     function Visibility() {  // 리스트 애니메이션
        $('.box').each(function() {
            var boxTop = $(this).offset().top;
            var boxBottom = boxTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (boxBottom > viewportTop && boxTop < viewportBottom) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }

    $(window).on('scroll resize', Visibility);
    $(window).trigger('scroll');



    // <상세페이지 연결>
    let i = 0;
    

    $('.box').each(function(i) {
        $(this).on('click', function() {
            let num = i + 1;

            window.location.href = `./news/news-detail-page_${num}.html`;
        })
    })
});