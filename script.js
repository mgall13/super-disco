$(document).ready(function () {
  var colorOn = function () {
    var actualTime = moment().hours();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]);

      if (blockTime < actualTime) {
        $(this).addClass("past");
      } else if (blockTime === actualTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  };

  colorOn();

  $("#currentDay").text(moment().format('LLLL'));

  $(".saveBtn").on("click", function() {
      //set variables for key and value
      var key = $(this).parent().attr("id")
      var value = $(this).siblings(".description").val()

      //set local stroage
    localStorage.setItem(key, value);
  }
  )

  $("#hour-9 .description").val(localStorage.getItem("hour-9"))


});


//localStorage.setItem("key", JSON.stringify(value))
//JSON.parse(localStorage.getItem("key"))