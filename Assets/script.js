
//variables
var timeNow = dayjs().hour();
var timeBlockLG = document.querySelector('container-lg px-5');


$('#currentDay').text(today.format('LLLL'));
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
$('.saveBtn').on('click',function(event) {
 event.preventDefault();
//variables for saving user input
 var clickSave = $(this);
 var timeBlockEL = clickSave.parent();
 var timeID = clickSave.parent().attr("id");
 var inputEL = clickSave.prev();
 var userInput = inputEl.val();
 //save to local storage
localStorage.setItem(timeID, userInput);
})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

