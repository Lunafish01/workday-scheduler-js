// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//jquery wrapping to have html load before javascript
$(document).ready(function () {
 
 
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

// declare variable to store current time
var currentHour = dayjs().hour().toString();

// get a handle on all elements with class of 'time-block'
// get 'id' attribute and split off time value from 'id'
$(".time-block").each(function() {
  var timeBlock = +$(this).attr("id").split("-")[1];

// write a conditional statement
//need to add 'past', 'presnet' or 'futrue' to 'time-block' elements
  if (currentHour === timeBlock) {
    $(this).addClass("present");
  } else if (currentHour < timeBlock) {
    $(this).addClass("future");
  } else {
    $(this).addClass("past");
  }
});

  // selecting and targeting all button elements with the class selector of '.saveBtn'
  // adding event handler function to all button elements listening for a 'click' event
  // add preventDefault to keep browser from refreshing 
    $(".saveBtn").click(function (event){
      event.preventDefault();

  // declaring variables for 'value' for 'time'
  // store time and data input entered in textarea elements
      var value = $(this).siblings(".description").val();
  // use 'split' method to parse 'id' element and return second index object
      var time = $(this).parent().attr("id").split("-")[1];

  // store the data input and time in local storage
      localStorage.setItem(time, value);
    });

  // intiate for loop set saved data in local storage 
    for (var i = 0; i <= 10; i++) {
      var savedValue = localStorage.getItem(i.toString());
      $("#hour-" + i + " .description").val(savedValue);
    }

  // added date and time to the top of the page using Dayjs library.
  var date = dayjs().format('dddd MMM DD, YYYY hh:mm:ss A');
  $('#currentDay').text(date);
});
