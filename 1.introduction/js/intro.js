
$(function() {
    $(window).scroll(function() {
        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

        if($(window).width() <= 768) {
            // mobile only code
            if ($scrollTop < 500) {
                $('.box1-title').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box1-title').stop().animate({ opacity: '1' }, 300);
            }
            
            if ($scrollTop < 600) {
                $('.box1 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box1 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 700) {
                $('.box1 .years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box1 .years li:nth-child(2)').stop().animate({ opacity: '1' }, 1300);
            }

            if ($scrollTop < 800) {
                $('.box1 .years li:nth-child(3)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box1 .years li:nth-child(3)').stop().animate({ opacity: '1' }, 1500);
            }

            if ($scrollTop < 900) {
                $('.box1 .years li:nth-child(4)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box1 .years li:nth-child(4)').stop().animate({ opacity: '1' }, 1600);
            }


            /////////////////////////////////////////////////////////////


            if ($scrollTop < 1400) {
                $('.box2-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box2-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 1500) {
                $('.box2 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1600) {
                $('.box2 .years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(2)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1700) {
                $('.box2 .years li:nth-child(3)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(3)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1800) {
                $('.box2 .years li:nth-child(4)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(4)').stop().animate({ opacity: '1' }, 1000);
            }


            ///////////////////////////////////////////////////////


            if ($scrollTop < 2300) {
                $('.box3-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box3-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 2400) {
                $('.box3 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box3 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 2500) {
                $('.box3 .years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box3 .years li:nth-child(2)').stop().animate({ opacity: '1' }, 1000);
            }


            ////////////////////////////////////////////////////////////

            
            if ($scrollTop < 2700) {
                $('.box4-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box4-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 2800) {
                $('.box4 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box4 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }



        } else {
            if ($scrollTop < 600) {
                $('.box1-title').stop().animate({ opacity: '0' }, 200);
            } else {
                $('.box1-title').stop().animate({ opacity: '1' }, 500);
            }


            if ($scrollTop < 700) {
                $('.years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1000) {
                $('.years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.years li:nth-child(2)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1100) {
                $('.years li:nth-child(3)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.years li:nth-child(3)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1200) {
                $('.years li:nth-child(4)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.years li:nth-child(4)').stop().animate({ opacity: '1' }, 1000);
            }

            ////////////////////////////////////////////////////////////////////

            
            if ($scrollTop < 1600) {
                $('.box2-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box2-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 1800) {
                $('.box2 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 1900) {
                $('.box2 .years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(2)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 2000) {
                $('.box2 .years li:nth-child(3)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(3)').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 2100) {
                $('.box2 .years li:nth-child(4)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box2 .years li:nth-child(4)').stop().animate({ opacity: '1' }, 1000);
            }

            /////////////////////////////////////////////////////////////////////


            if ($scrollTop < 2400) {
                $('.box3-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box3-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 2600) {
                $('.box3 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box3 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

            if ($scrollTop < 2700) {
                $('.box3 .years li:nth-child(2)').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box3 .years li:nth-child(2)').stop().animate({ opacity: '1' }, 1000);
            }

            /////////////////////////////////////////////////////

            if ($scrollTop < 3000) {
                $('.box4-title').stop().animate({ opacity: '0' }, 600);
            } else {
                $('.box4-title').stop().animate({ opacity: '1' }, 600);
            }
            
            if ($scrollTop < 3200) {
                $('.box4 .years li:first-child').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.box4 .years li:first-child').stop().animate({ opacity: '1' }, 1000);
            }

        }  
    });
});