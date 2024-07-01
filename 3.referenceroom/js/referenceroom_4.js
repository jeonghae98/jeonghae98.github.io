$(function() {
    //===================== main =====================
     // <공통 애니메이션>
     $('.collection-title').css('opacity', '1');
     $('.search').css({
        'opacity': 1,
        'transform': 'translateX(0)'
    });

     function Visibility() {  // 리스트 애니메이션
        $('.box').each(function() {
            var $this = $(this);
            var boxTop = $this.offset().top;
            var boxBottom = boxTop + $this.outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
    
            if (boxBottom > viewportTop && boxTop < viewportBottom) {
                if (!$this.hasClass('visible')) {
                    setTimeout(function() {
                        $this.addClass('visible');
                    }, Math.random() * 1000);
                }
            } else {
                $this.removeClass('visible');
            }
        });
    }

    $(window).on('scroll resize', Visibility);
    $(window).trigger('scroll');



    // <상세페이지 연결>
    let i = 0;
    $('.box').each(function(i) {
        $(this).on('click', function() {
            let num = i + 28;

            window.location.href = `./collection-detail-page${num}.html`;
        })
    });


    
     // <모바일 1번 div 숨기기>
     
     var windowWidth = $(window).width();

     if(windowWidth < 768) {
         $('.box1').css('display', 'none');
     } else {
         $('.box1').css('display', 'block');
 
     }
});