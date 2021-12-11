// tells our document we are ready to load HTML & CSS. 
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

  // calling our function
  colorOn();

  // display current day & time using moment
  $("#currentDay").text(moment().format('LLLL'));

  // saves info to local storage when save btn is clicked
  $(".saveBtn").on("click", function() {
      //set variables for key and value

      var key = $(this).parent().attr("id")
      var value = $(this).siblings(".description").val()

      //set local stroage
    localStorage.setItem(key, value);
  });

  // load saved data from our local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#hour-10 .description").val(localStorage.getItem("hour-10"));

  $("#hour-11 .description").val(localStorage.getItem("hour-11"));

  $("#hour-12 .description").val(localStorage.getItem("hour-12"));

  $("#hour-13 .description").val(localStorage.getItem("hour-13"));

  $("#hour-14 .description").val(localStorage.getItem("hour-14"));

  $("#hour-15 .description").val(localStorage.getItem("hour-15"));

  $("#hour-16 .description").val(localStorage.getItem("hour-16"));

  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});