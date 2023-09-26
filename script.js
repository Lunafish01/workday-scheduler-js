//jquery wrapping to load DOM first
$(document).ready(function () {
 
// declare variable to store current time
var currentHour = dayjs().hour().toString();

// get a handle on all elements with class of 'time-block'
// get 'id' attribute and get just the hour number from the 'id'
$(".time-block").each(function() {
  var timeBlock = +$(this).attr("id").split("-")[1];

// write a conditional statement to compare time to current time
// need to add 'past', 'presnet' or 'futrue' to 'time-block' elements
  if (currentHour === timeBlock) {
    $(this).addClass("present");
  } else if (currentHour < timeBlock) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

// selecting and targeting all button elements with the class selector of '.saveBtn'
// add event handler function to all button elements listening for a 'click' event
// add preventDefault to keep browser from refreshing 
    $(".saveBtn").click(function (event){
      event.preventDefault();

// declare variables for 'value' and 'time'
// store time and data input entered in textarea elements
      var value = $(this).siblings(".description").val();
// use 'split' method to parse 'id' element and return second index object
      var time = $(this).parent().attr("id").split("-")[1];

// store the data input and time in local storage
      localStorage.setItem(time, value);
    });

// initiate for loop to set saved data from local storage 
    for (var i = 9; i <= 18; i++) {
      var savedValue = localStorage.getItem(i.toString());
      $("#hour-" + i + " .description").val(savedValue);
    }

// add date and time to the top of the page using Dayjs library.
  var date = dayjs().format('dddd MMM DD, YYYY hh:mm:ss A');
  $('#currentDay').text(date);
});
