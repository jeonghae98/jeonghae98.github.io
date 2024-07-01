$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
    let i = 0;

    $('.list').each(function(i) {
        $(this).on('click', function() {
            let num = 5 - i;
            window.location.href = `./recruitment/detail-page_0${num}.html`;
        });
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