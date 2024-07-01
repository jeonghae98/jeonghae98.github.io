$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
     // <공통 애니메이션>
     $('.content-box').css({
        'opacity': 1,
        'transform': 'translateY(0)'
     });


    
    //===================== footer =====================
    function updateFooterLogo() {
        var footerWindowWidth = $(window).width();

        if(footerWindowWidth < 768) {
            $('.footer-logo').html('<h2>문화역서울284</h2>');
        } else {
            $('.footer-logo').html('<h2>문화역<br>서울284</h2>');
        }
    }

    updateFooterLogo();

    $(window).resize(function() {
        updateFooterLogo();
    });

    
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});