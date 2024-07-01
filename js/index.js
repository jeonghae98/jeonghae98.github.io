$(function() {
    //===================== main =====================
    //--------------------- 공통 ---------------------
    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });


    //--------------------- intro ---------------------
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop(); 
        var elementOffset = $('.main-intro').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if (scrollPosition > (elementOffset - windowHeight)) {
            if(windowWidth < 768 ) { 
             $('.intro-bg-img').css({
                    'opacity': 1,
                    'background-position-y': '500px'
                });
                $('.main-intro .intro-line').animate({
                    height: '1020px'
                  }, 1500);

                setTimeout(function() {
                    $('.first-circle').delay(300).fadeIn();
                }, 300);
                setTimeout(function() {
                    $('.second-circle').delay(700).fadeIn();
                }, 300);
            } 
            else { 
                $('.intro-bg-img').css({
                    'opacity': 1,
                    'background-position-y': '600px'
                });
                $('.main-intro .intro-line').animate({
                    height: '1472px'
                }, 1500);

                setTimeout(function() {
                    $('.first-circle').delay(300).fadeIn();
                }, 300);
                setTimeout(function() {
                    $('.second-circle').delay(700).fadeIn();
                }, 300);
            }
            
            // 모바일, pc 공통
             $('.year').css('opacity', 1);
             $('.now-year').css('opacity', 1);
             $('.intro-title').css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });
             $('.intro-text').css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });
             $('.intro-btn').css('opacity', 1);
             
        }
    }); 
    

    // ****intro-btn*****
    $('.intro-btn').click(function() {
        window.location.href = './1.introduction/intro.html'
    });
        
    //--------------------- collection ---------------------
    // <title>
    function updateCollectionTxt() {
        var mainWindowWidth = $(window).width();

        if(mainWindowWidth < 768) {
            $('.collection-text').html('<p>문화역서울284의<br>소장품을 구경해보세요.</p>');
        } else {
            $('.collection-text').html('<p>문화역서울284의 소장품을<br>구경해보세요.</p>');
        }
    }

    updateCollectionTxt();

    $(window).resize(function() {
        updateCollectionTxt();
    });


    // <line&text>
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
        var colOffset = $('.main-collection').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if(scrollPosition > (colOffset - windowHeight)) {
            if(windowWidth > 768) {
                $('.collection-line').animate({
                    height: '1238px'
                  }, 2000);
    
                $('.main-collection-list').css({
                    'opacity': 1,
                    'transform': 'translateX(0)'
                });

                $('.main-collection-row-line').animate({
                    width: '100%'
                }, 1500);
            } else {
                $('.main-collection-row-line').animate({
                    width: '100%'
                }, 1000);
            }


            // <공통>
            $('.main-collection-row-line').animate({
                width: '100%'
            }, 1500);
            $('.collection-title').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
            $('.collection-text').css({
                'opacity': 1,
                'transform': 'translateY(0)'
            });
            $('.col-btn').css({
                'opacity': 1,
                'transform': 'scale(1)'
            });
            $('.collection-image').css('opacity', '1');
        }
    }); 
    
    
    // ****intro-btn*****
    $('.col-btn').click(function() {
        window.location.href = './3.referenceroom/collection.html'
    });


    //--------------------- exhibition ---------------------
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var exTitleTop = $('.exhibition-title').offset().top;
        var windowHeight = $(window).height(); 
        var mainWindowWidth = $(window).width();

        if (scrollPos <= (exTitleTop - windowHeight)) {
            $('.exhibition-title').css({
                'opacity': 0,
                'transform': 'translateY(50px)'
            });
            $('.exhibition-content .ex').each(function() {
                var $img = $(this).find('.ex-img img');
                var $title = $(this).find('.ex-txt .title');
                if(mainWindowWidth < 768) {
                    $img.stop().css({
                        'opacity': 0,
                        'transition': 'opacity 0.5s'
                    });
                    $title.stop().css({
                        'opacity': 0,
                        'transform': 'translateY(20px)',
                        'transition': 'opacity 0.5s, trnasform 0.5s'
                    });
                } else {
                    $img.stop().css({
                        'transform': 'translateX(50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s, opacity 0.5s'
                    });
                    $('.exhibition2').find('.ex-img > img').stop().css({
                        'transform': 'translateX(-50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s, opacity 0.5s'
                    });
                    $title.stop().css({
                        'opacity': 0,
                        'transform': 'translateY(40px)',
                        'transition': 'opacity 0.5s, transform 0.5s'
                    });
                }
            });
        }
        else {
            animateScroll();
        }
    });
    
    function animateScroll() {
        var windowHeight = $(window).height();
        var windowMiddle = $(window).scrollTop() + windowHeight / 2;
        var mainWindowWidth = $(window).width();
        $('.exhibition-title').css({
            'opacity': '1',
            'transform': 'translateY(0)'
        });
    
        $('.exhibition-content .ex').each(function() {
            var $img = $(this).find('.ex-img > img');
            var $title = $(this).find('.ex-txt .title');
            var imgOffset = $img.offset().top;
    
            if (windowMiddle > imgOffset && $img.css('opacity') == 0) {
                if (mainWindowWidth < 768) {
                    $img.stop().css({
                        'opacity': '1',
                    });
                    $title.stop().css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                } else {
                    $img.stop().css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
    
                    $title.stop().css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }
            }
        });
    }
    

    // <전시 페이지 연결>
    $('.ex-txt .title').hover(
        function() {
            $(this).css('font-weight', '500');
        },
        function() {
            $(this).css('font-weight', '400'); 
        }
    );

    $('.ex-txt .ex1').click(function() {
        window.location.href = './2.program/2.exhibition-detail/ex-detail0.html';
    });

    $('.ex-txt .ex2').click(function() {
        window.location.href = './2.program/2.exhibition-detail/ex-detail5.html';
    });

    $('.ex-txt .ex3').click(function() {
        window.location.href = './2.program/2.exhibition-detail/ex-detail1.html';
    });

    $('.ex-txt .ex4').click(function() {
        window.location.href = './2.program/2.exhibition-detail/ex-detail2.html';
    });
    
    //--------------------- inform ---------------------
    function chgBox() {
        var informWindowWidth = $(window).width();
        const contentBox1 =  $('.content-box1');
        const contentBox2 =  $('.content-box2');
        
        if (informWindowWidth < 768) {
            const notice1 = $('.content-box1 .notice-content1').clone();
            const news3 = $('.content-box2 .news-content3').clone();
            
            contentBox1.insertAfter('.content-box2');

            $('.content-box1 .notice-content1').remove();
            contentBox2.append(notice1);
    
            $('.content-box2 .news-content3').remove();
            contentBox1.append(news3); 
        } else {
            const notice = $('.content-box2 .notice-content1').clone();
            const news = $('.content-box1 .news-content3').clone();
            
            contentBox1.insertBefore('.content-box2');

            $('.content-box2 .notice-content1').remove();
            contentBox1.append(notice)
            notice.insertAfter('.news-content1');
    
            $('.content-box1 .news-content3').remove();
            contentBox2.append(news);
            news.insertAfter('.notice-content2');
        }
    }

    chgBox(); 

    $(window).resize(function() {
        chgBox();
    });



    function moveAnimation() {
        const contentBox1 = $('.content-box1');
        const contentBox2 = $('.content-box2');
        const initialTranslateY1 = -1370;
        const finalTranslateY1 = 1370;
        const initialTranslateY2 = 1370;
        const finalTranslateY2 = -1370;
        const distance1 = Math.abs(finalTranslateY1 - initialTranslateY1);
        const distance2 = Math.abs(finalTranslateY2 - initialTranslateY2);
        const informBox = $('.inform-content-box');

        function onScroll() {
            const scrollTop = $(window).scrollTop();
            const informOffset = informBox.offset().top;
            const informHeight = informBox.outerHeight();
            const windowHeight = $(window).height();

            if (scrollTop + windowHeight > informOffset && scrollTop < informOffset + informHeight) {
                const scrollFraction = (scrollTop + windowHeight - informOffset) / (informHeight + windowHeight);
                const translateY1 = initialTranslateY1 + scrollFraction * distance1;
                const translateY2 = initialTranslateY2 - scrollFraction * distance2;
                contentBox1.css('transform', `translateY(${translateY1}px)`);
                contentBox2.css('transform', `translateY(${translateY2}px)`);
            } else if (scrollTop >= informOffset + informHeight) {
                contentBox1.css('transform', `translateY(${finalTranslateY1}px)`);
                contentBox2.css('transform', `translateY(${finalTranslateY2}px)`);
            } else {
                contentBox1.css('transform', `translateY(${initialTranslateY1}px)`);
                contentBox2.css('transform', `translateY(${initialTranslateY2}px)`);
            }
        }

        $(window).on('scroll.moveAnimation', onScroll);
    }

    function handleResize() {
        var windowWidth = $(window).width();

        $(window).off('scroll.moveAnimation');
        
        if (windowWidth > 768) {
            moveAnimation();
        } else {
            const contentBox = $('.content-box1, .content-box2'); 
            contentBox.css('transform', '');
            contentBox.off('scroll').on('scroll', function() {
                $(this).css('justify-content', 'initial');
            });
        }
    }

    handleResize();

    $(window).resize(function() {
        handleResize();
    });


    
    // ****info-btn*****
    $('.info-btn').click(function() {
        window.location.href = './4.inform/notice.html'
    });

    //--------------------- sns ---------------------
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowMiddle = $(window).scrollTop() + windowHeight / 2;
        var snsHeight = $('.main-sns').offset().top;
        
        $('.sns-title').each(function() {
            var txtOffset = $(this).offset().top;
            if (windowMiddle > txtOffset && $(this).css('opacity') == 0) {
                $(this).addClass('visible');
                $(this).siblings('.sns-txt').addClass('visible');
            }
        });

        if(scrollTop <= (snsHeight - windowHeight)) {
            $('.sns-title').removeClass('visible');
            $('.sns-txt').removeClass('visible');
        }
    });
    // 초기 로드 시 가시성 확인
    $(window).scroll();
    
       

    // <sns 연결>
    
    $('.youtube .sns-img').click(function() {
        window.location.href = 'https://www.youtube.com/seoul284official'
    });

    $('.instagram .sns-img').click(function() {
        window.location.href = 'https://www.instagram.com/culturestationseoul284/'
    });

    $('.facebook .sns-img').click(function() {
        window.location.href = 'https://www.facebook.com/seoul284/?locale=ko_KR'
    });
});

