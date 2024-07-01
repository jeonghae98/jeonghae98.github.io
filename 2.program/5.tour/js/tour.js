$(function () {
    $('.outside-tour .reservation-btn').on('click', function() {
        window.location.href = '../7.tour-reservation/tour-reservation-outside.html'; 
    });
    $('.inside-tour .reservation-btn').on('click', function() {
        window.location.href = '../7.tour-reservation/tour-reservation-inside.html'; 
    });
    $('.outside-tour .detail-btn').on('click', function() {
        window.location.href = '../6.tour-detail/tour-detail-outside.html'; 
    });
    $('.inside-tour .detail-btn').on('click', function() {
        window.location.href = '../6.tour-detail/tour-detail-inside.html'; 
    });
});

