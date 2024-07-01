$(function() {
    //===================== main =====================
    function Visibility() {  // 리스트 애니메이션
        $('.collec-image-desc-box').each(function() {
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



    // <이미지 변경>
    $('.other-images img').click(function() {
        var newSrc = $(this).attr('src'); 
        $('.main-image img').attr('src', newSrc); 
    });



    // <모바일 위치 다른 상세페이지 목록 연결>
    var windowWidth = $(window).width();
        if(windowWidth < 768) {
            $('.mobile-list-btn4 a').attr('href', './collection_3.html');
            $('.mobile-list-btn3 a').attr('href', './collection_2.html');
            $('.mobile-list-btn2 a').attr('href', './collection.html');
        } else {
            $('.mobile-list-btn4 a').attr('href', './collection_4.html');
            $('.mobile-list-btn3 a').attr('href', './collection_3.html');
            $('.mobile-list-btn2 a').attr('href', './collection_2.html');
        }
});