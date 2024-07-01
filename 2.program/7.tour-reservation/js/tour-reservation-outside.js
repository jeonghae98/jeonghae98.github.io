$(function () {
/* --------------날짜선택--------------------- */
  const availableDates = [
    "2024-05-09",
    "2024-05-10",
    "2024-05-11",
    "2024-05-12",
    "2024-05-14",
    "2024-05-15",
    "2024-05-16",
  ];
  
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();

  function updateMonthLabel() {
    $('#monthLabel').text(`${currentMonth}월`);
  }

  function createDates(year, month) {
    const daysInMonth = new Date(year, month, 0).getDate();
    $("#dateSelector").empty();

    for (let i = 1; i <= daysInMonth; i++) {
      const dateDiv = $('<div class="date"></div>').text(i);
      const dateString = `${year}-${month.toString().padStart(2, "0")}-${i
        .toString()
        .padStart(2, "0")}`;

      if (availableDates.includes(dateString)) {
        dateDiv.addClass("available");
        dateDiv.on("click", function () {
          $(".selected").removeClass("selected");
          dateDiv.addClass("selected");
          $(".reservation-time").slideDown('slow');
          console.log("선택한 날짜: " + dateString);
        });
      } else {
        dateDiv.addClass("unavailable");
      }

      $("#dateSelector").append(dateDiv);
    }
  }

  function changeMonth(increment) {
    currentMonth += increment;
    if (currentMonth > 12) {
      currentMonth = 0;
      currentMonth++;
    } else if (currentMonth < 1) {
      currentMonth = 12;
      currentMonth--;
    }
    updateMonthLabel();
    createDates(currentYear, currentMonth);
  }

  $("#prevMonth").on("click", function () {
    changeMonth(-1);
    $(".reservation-time").hide();
    $(".reservation-number").hide();
    $("#next-btn").hide();
  });

  $("#nextMonth").on("click", function () {
    changeMonth(1);
    $(".reservation-time").hide();
    $(".reservation-number").hide();
    $("#next-btn").hide();
  });

  updateMonthLabel();
  createDates(currentYear, currentMonth);

  /* ------------------시간선택---------------- */
  
  $('.time-option').click(function () {
    $(".time-option").removeClass("selected");
    $(this).addClass("selected");
    $(".reservation-number").slideDown('slow');
    $("#next-btn").fadeIn('slow');
  })


/* --------------인원선택 ------------------ */
  let personCount = 1;
  const personCountLabel = $('#personcount');

  $('#decreaseperson').on('click', function() {
      if (personCount > 1) {
          personCount--;
          personCountLabel.text(personCount);
      }
  });

  $("#increaseperson").on("click", function () {
    if (personCount < 6) {
      personCount++;
      personCountLabel.text(personCount);
    }
  });


  $('#prev-btn').on('click', function() {
      window.location.href = '../5.tour/tour.html';  // 이동할 파일 경로를 지정합니다.
  });
  
  $('#next-btn').on('click', function () {
      alert('비회원은 예약할 수 없습니다')
      window.location.href = '../8.login/login.html'
  })
  
});

