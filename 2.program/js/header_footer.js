$(function() {
    //===================== header =====================
    //--------------------- 공통 ---------------------
    // <search-box 나오게 하기>
    $('.right-menu .search > img').on('click', function() {
        $('.header-search-box').toggleClass('sub-visible');
    });
    
    

    //--------------------- 모바일 ---------------------
    var mobile = $('#mobileBar');
    
    mobile.on('click', function() {
        var mainMenu = $('#mainMenu');

        // <햄버거 메뉴 -> X 모양>
        mobile.toggleClass('active');  
        
        
        // <search 없애기>
        $('.search').toggleClass('hide');



        // <모바일 메뉴>
        mainMenu.toggleClass('active');
        
        if ($('.main-menu').hasClass('active')) {
            $('body').addClass('stop-scroll');
            $('.logo-gnb-rightmenu').addClass('active');
            $('.main-menu').css({
                'display': 'block',
                'position': 'fixed',
                'top': '12vh',
                'right': 0,
                'borderTop': '1px solid #dbdbdb',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            });
            $('.main-menu').append('<div class="only-mobile"><div class="small-title">서울284</div><div class="login-txt"><a>로그인</a></div></div>');
            $('.fixed-menu').css('display', 'none');
        } else {
            $('body').removeClass('stop-scroll');
            $('.logo-gnb-rightmenu').removeClass('active');
            $('.main-menu').css('display', 'none');
            $('.main-menu .only-mobile').remove();
            $('.fixed-menu').css('display', 'block');

            // $('.gnb').removeClass('active');
        }
        
        // <모바일 로그인 연결>
        $('.login-txt a').attr('href', '../../2.program/8.login/login.html');


        // #sub-menu 나오게 하기
        $('.gnb-title').on('click', function(e) {
            e.preventDefault();
        
            var $parentLi = $(this).parent('li');  // 클릭된 메뉴의 부모 li 요소 찾기
        
            $parentLi.find('.sub-menu').stop().slideToggle(500);  // 클릭된 메뉴의 하위 메뉴를 슬라이드 토글
        
            $('.gnb li').not($parentLi).find('.sub-menu').stop().slideUp(500);  // 다른 모든 하위 메뉴를 슬라이드 업
        
        
            // #gnb-title 눌렀을 때 모습
            $('.gnb-title').removeClass('active');  // 모든 .gnb-title 요소에서 active 클래스 제거
    
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
            }  
           
            $('.sub-menu li').css('padding', '5px 0');
        });
        

        // #sub-menu 눌렀을 때 모습
        $('.sub-menu a').click(function() {
            $('.sub-menu a').css({  
                'color': '',
                'textDecoration': '',
            });
    
            $(this).css({  
                'color': '#000',
                'textDecoration': 'underline'
            });
        });
    });

 

    //--------------------- PC ---------------------
    var pcWindowWidth = $(window).width() > 768;

    if (pcWindowWidth) {
        $("#mainMenu > ul > li").hover(
            function () {
                $('header').addClass('active');
                $("#mainMenu").addClass("active");
            },
            function () {
                $('header').removeClass('active');
                $("#mainMenu").removeClass("active");
            }
        );
        $("#mainMenu > ul > li:first-child > a").focusin(function () {
            $("#mainMenu").addClass("active");
        });
        $("#mainMenu li:last-child li:last-child a").focusout(function () {
            $("#mainMenu").removeClass("active");
        });
        $("#mainMenu > ul > li > a").focusin(function () {
            $(this).parent().addClass("active");
        });
        $("#mainMenu li li:last-child a").focusout(function () {
            $("#mainMenu > ul > li").removeClass("active");
        });
    }



    // <색 변경>
    $('header').addClass('sub-bg');
    $('.gnb-title').css('color', '#000');
    $('.sub-menu a').css('color', '#000');
    
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

    
    //--------------------- fixed-menu ---------------------
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});

