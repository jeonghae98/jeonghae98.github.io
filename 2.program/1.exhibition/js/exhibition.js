$(function () {

    /* ---------첫 섹션 스크롤 이벤트 */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var introText = $('.intro-text');
        var maxTranslateY = windowHeight / 1.4;

        if (scroll > 0) {
            var scale = 1 - (scroll / (2 * windowHeight));
            var translateY = Math.min(scroll, maxTranslateY);
            var opacity = 1 - (scroll / windowHeight);
            var fontSizeH1 = 7 - (scroll / windowHeight * 3); // h1 폰트 크기 조정
            var fontSizeH2 = 6 - (scroll / windowHeight * 2.6); // h2 폰트 크기 조정

            $('.intro-page').css({
                'background-size': scale * 100 + '%',
                'background-position': 'center ' + (scroll / 2) + 'px'
            });

            introText.css({
                'transform': 'translateY(' + translateY + 'px)'
            });

            introText.find('h1').css({
                'font-size': fontSizeH1 + 'vh'
            });
            introText.find('h2').css({
                'font-size': fontSizeH2 + 'vh',
                'margin-top': '50px',
                'margin-right': '50px'
            });
            $('.intro-page p').css({
                'opacity': 0
            });

        } else {
            $('.intro-page').css({
                'background-size': 'cover',
                'opacity': 1,
                'background-position': 'center center'
            });

            introText.css({
                'transform': 'translateY(0)',
            });

            introText.find('h1').css({
                'font-size': '7vh' // 초기 폰트 크기 설정
            });
            introText.find('h2').css({
                'font-size': '6vh', // 초기 폰트 크기 설정
                'margin-top': '0px'

            });
            $('.intro-page p').css({
                'opacity': 1
            });
        }
    });



/* ----------------탭버튼---------------- */

    $('#toggle-on').on('click', tabmenu);
    function tabmenu() {
        $('.fin-exhibition').hide();
        $('.now-exhibition').fadeIn(1000);
        $('.scrollbar').hide();
        // $('.scrollbar').fadeIn();
    }

    $('#toggle-off').on('click', tabmenu2);
    function tabmenu2() {
        $('.fin-exhibition').fadeIn(1000);
        $('.now-exhibition').hide();
        $('.scrollbar').hide();
        $('.scrollbar').fadeIn();

    }

    var savedToggleState = localStorage.getItem('toggleState');
    if (savedToggleState === 'true') {
        $('#toggle-off').click();
    } else {
        $('#toggle-on').click();
    }

    // 토글 버튼 상태가 변경될 때 로컬 스토리지에 저장
    $('#toggle-on').on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem('toggleState', 'false');
        }
    });

    $('#toggle-off').on('change', function() {
        if ($(this).is(':checked')) {
            localStorage.setItem('toggleState', 'true');
        }
    });

    





    


    /* -----------스크롤 바------------ */

        const $scrollbarThumb = $('.scrollbar-thumb'); // 스크롤바 thumb 요소
        const $exhibitionList = $('.fin-exhibition'); // 본문 내용 요소
        const $scrollbarTrack = $('.scrollbar-track'); // 스크롤바 트랙 요소
    
        // 본문 내용이 스크롤될 때 thumb 위치 업데이트
        $exhibitionList.on('scroll', function() {
            const scrollPercentage = $exhibitionList.scrollTop() / ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
            if ($(window).width() < 768) { // 모바일 환경
                const thumbLeft = scrollPercentage * ($scrollbarTrack.width() - $scrollbarThumb.outerWidth());
                $scrollbarThumb.css('left', thumbLeft + 'px'); // thumb를 가로로 이동
            } else { // 데스크탑 환경
                const thumbTop = scrollPercentage * ($scrollbarTrack.height() - $scrollbarThumb.outerHeight());
                $scrollbarThumb.css('top', thumbTop + 'px'); // thumb를 세로로 이동
            }
        });
    
        // 스크롤바 thumb 드래그 이벤트
        $scrollbarThumb.on('mousedown touchstart', function(e) {
            e.preventDefault();
            const thumbHeight = $scrollbarThumb.outerHeight();
            const thumbWidth = $scrollbarThumb.outerWidth();
            const trackHeight = $scrollbarTrack.height();
            const trackWidth = $scrollbarTrack.width();
            const startX = e.pageX || e.originalEvent.touches[0].pageX;
            const startY = e.pageY || e.originalEvent.touches[0].pageY;
            const startTop = parseFloat($scrollbarThumb.css('top'));
            const startLeft = parseFloat($scrollbarThumb.css('left'));
    
            $(document).on('mousemove.thumb touchmove.thumb', function(e) {
                e.preventDefault();
                if ($(window).width() < 768) { // 모바일 환경
                    const moveX = e.pageX || e.originalEvent.touches[0].pageX;
                    const deltaX = moveX - startX;
                    let newLeft = startLeft + deltaX;
    
                    if (newLeft < 0) newLeft = 0;
                    if (newLeft > trackWidth - thumbWidth) newLeft = trackWidth - thumbWidth;
    
                    $scrollbarThumb.css('left', newLeft + 'px');
    
                    const scrollPercentage = newLeft / (trackWidth - thumbWidth);
                    const newScrollTop = scrollPercentage * ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
                    $exhibitionList.scrollTop(newScrollTop);
                } else { // 데스크탑 환경
                    const moveY = e.pageY || e.originalEvent.touches[0].pageY;
                    const deltaY = moveY - startY;
                    let newTop = startTop + deltaY;
    
                    if (newTop < 0) newTop = 0;
                    if (newTop > trackHeight - thumbHeight) newTop = trackHeight - thumbHeight;
    
                    $scrollbarThumb.css('top', newTop + 'px');
    
                    const scrollPercentage = newTop / (trackHeight - thumbHeight);
                    const newScrollTop = scrollPercentage * ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
                    $exhibitionList.scrollTop(newScrollTop);
                }
            });
    
            $(document).on('mouseup.thumb touchend.thumb', function() {
                $(document).off('.thumb');
            });
    
            return false; // 텍스트 선택 방지
        });
    
        // 연도 클릭 이벤트
        $('.year').on('click', function() {
            const year = $(this).text(); // 클릭된 연도의 텍스트를 가져옴
            let $target;
            const $yearElement = $(`#${year}`); // 해당 연도의 id를 가진 요소를 찾음
            if ($yearElement.length === 0) {
                return; // id가 없는 경우 아무 일도 일어나지 않음
            }
            if ($(window).width() < 768) { // 모바일 환경
                $target = $yearElement.prev('a'); // 해당 연도의 id를 가진 요소의 이전 'a' 요소를 찾음
                if (!$target.length) {
                    $exhibitionList.animate({ scrollTop: 0 }, 300); // 이전 'a' 요소가 없는 경우 맨 위로 스크롤 이동
                    return;
                }
            } else {
                $target = $yearElement; // 데스크탑 환경에서는 해당 연도 요소로 이동
            }
            if ($target.length) {
                const containerHeight = $exhibitionList.height(); // 컨테이너 높이
                const targetOffset = $target.position().top; // 타겟 요소의 상단 위치를 컨테이너 기준으로 계산
                const targetHeight = $target.outerHeight(); // 타겟 요소의 높이
                const scrollTo = targetOffset + $exhibitionList.scrollTop() - (containerHeight / 2) + (targetHeight / 2); // 중앙에 맞추기 위한 스크롤 위치 계산
                $exhibitionList.animate({ scrollTop: scrollTo }, 300); // 부드럽게 스크롤 이동
            }
        });
    
    
    
    
    
    
    
    /* ----------캐러셀------------- */
    
    
    
    // var carousel = $('.carousel');
    // var Items = $('.exhibition-list a');



   /* --------------캐러셀 시도1-------------------- */

   function applyStyles() {
    let $container = $('.fin-exhibition');
    let $anchors = $container.find('.exhibition-list a');
    let containerHeight = $container.height();
    let containerTop = $container.offset().top;
    let scrollTop = $container.scrollTop();
    let containerCenter = scrollTop + containerHeight / 2;
    let containerScrollHeight = $container.prop('scrollHeight');
    let closestElement = null;
    let closestDistance = Infinity;

    // 모든 앵커 요소의 크기와 투명도를 초기화
    $anchors.css({
        'transform': 'scale(0.8)',
        'opacity': 0.5
    });

    // 스크롤이 맨 위에 있을 때 맨 위의 요소를 확대
    if (scrollTop === 0 && $anchors.length > 0) {
        $anchors.first().css({
            'transform': 'scale(1)',
            'opacity': 1
        });
    } 
    // 스크롤이 맨 아래에 있을 때 맨 마지막 요소를 확대
    else if (scrollTop + containerHeight >= containerScrollHeight - 1 && $anchors.length > 0) {
        $anchors.last().css({
            'transform': 'scale(1)',
            'opacity': 1
        });
    } 
    // 그 외의 경우 가장 가까운 요소를 확대
    else {
        $anchors.each(function(index, element) {
            let $element = $(element);
            let elementOffsetTop = $element.offset().top - containerTop + scrollTop;
            let elementCenter = elementOffsetTop + $element.outerHeight() / 2;
            let distance = Math.abs(containerCenter - elementCenter);

            // 가장 가까운 요소 찾기
            if (distance < closestDistance) {
                closestDistance = distance;
                closestElement = $element;
            }
        });

        if (closestElement) {
            closestElement.css({
                'transform': 'scale(1)',
                'opacity': 1
            });
        }
    }
}

// 스크롤 이벤트 시 스타일 적용
$('.fin-exhibition').on('scroll', function() {
    applyStyles();
});

// 페이지 로드 시 초기 스타일 적용
applyStyles();









/* -------------------후 처리------------------------ */

    // function update() {
    //     if ($('.toggle-right').is(':checked')) {
            
    //     }
    // }
    // update();

    // $('input[type="radio"]').change(function() {
    //     update();
    // });



    

});

