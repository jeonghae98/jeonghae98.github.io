$(function () {
    $('.sec1 h2').hide()
    $('.sec1 p').hide()
    $(window).scroll(function() {
        let $scrollLeft = $(this).scrollLeft(); // 수평 스크롤바의 위치인식
        $('.left').text($scrollLeft);

        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

        if($(window).width() <= 768) {
            // mobile only code
            if ($scrollTop < 300) {
                $('.sec1 h2').show()       
                $('.sec1 h2').stop().animate({ opacity: '0' }, 100);
                
            } else {
                $('.sec1 h2').show()
                $('.sec1 h2').stop().animate({ opacity: '1' }, 300);
            }
            if ($scrollTop < 300) {
                $('.sec1 p').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec1 p').show()
                $('.sec1 p').stop().animate({ opacity: '1' }, 1000);
               
            }
    
         

            if ($scrollTop < 800) {
                $('.sec2 h2').stop().animate({ opacity: '0' }, 300);
            } else if ($scrollTop < 2000) {
                $('.sec2 h2').stop().animate({ opacity: '1' }, 300);
            }
    
            if ($scrollTop < 800) {
                $('.sec2 p').stop().animate({ opacity: '0' }, 100);
            } else if ($scrollTop < 2000) {
                $('.sec2 p').stop().animate({ opacity: '1' }, 900);
            }
                
            if ($scrollTop < 1100) {
                $('.slide1').stop().animate({ opacity: '0%' }, 300);
            } else {
                $('.slide1').stop().animate({ opacity: '100%'}, 1000);
            } 

            
        } else {
            if ($scrollTop < 300) {
                $('.sec1 h2').show()       
                $('.sec1 h2').stop().animate({ opacity: '0' }, 100);
                
            } else {
                $('.sec1 h2').show()
                $('.sec1 h2').stop().animate({ opacity: '1' }, 300);
            }
            if ($scrollTop < 300) {
                $('.sec1 p').stop().animate({ opacity: '0' }, 100);
            } else {
                $('.sec1 p').show()
                $('.sec1 p').stop().animate({ opacity: '1' }, 300);
               
            }
    
            // if ($scrollTop < 100) {
            //     $('.sec1').stop().animate({ width: '0%', height: '0px' }, 300);
               
            // } else {
            //     $('.sec1').stop().animate({ width: '100%', height: '1000px' }, 500);
               
            // }
    /////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////
    
            if ($scrollTop < 1300) {
                $('.sec2 h2').stop().animate({ opacity: '0' }, 100);
            } else if ($scrollTop < 2000) {
                $('.sec2 h2').stop().animate({ opacity: '1' }, 300);
            }
    
            if ($scrollTop < 1300) {
                $('.sec2 p').stop().animate({ opacity: '0' }, 100);
            } else if ($scrollTop < 2000) {
                $('.sec2 p').stop().animate({ opacity: '1' }, 900);
            }
    
            if ($scrollTop < 900) {
                $('.sec2').stop().animate({ width: '0%', height: '0px' }, 300);
            } else {
                $('.sec2').stop().animate({ width: '100%', height: '1000px' }, 500);
            }  
            
            
            if ($scrollTop < 1700) {
                $('.slide1').stop().animate({ opacity: '0%' }, 300);
            } else {
                $('.slide1').stop().animate({ opacity: '100%'}, 800);
            }  
        }
    }) 



     // 이미지 슬라이더 설정
     if ($(window).width() <= 768) {
        $('.left1').on('click', function() {
            $('.img-list').prepend($('.img-list img:last-child')).css({left: '-500px'}).stop().animate({left: 0}, 500);
        });

        $('.right').on('click', function() {
            $('.img-list').append($('.img-list img:first-child')).css({left: '-500px'}).stop().animate({left: 0}, 500);
        });

        function auto() {         
            $('.img-list').stop().animate({left: '200px'}, 100, function() {
                $('.img-list').append($('.img-list > img:first-child'));
            });
        }
        let timer = setInterval(auto, 3000);

        $(".img-list").on('mouseover', function() {
            clearInterval(timer);
        });

        $(".img-list").on('mouseleave', function() {
            timer = setInterval(auto, 3000);
        });
    }

  

})