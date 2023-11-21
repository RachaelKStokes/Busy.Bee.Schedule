
//variables
var timeNow = dayjs().hour();
var timeBlockLG = document.querySelector('container-lg px-5');


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
 var userInput = inputEL.val();
 //save to local storage
localStorage.setItem(timeID, userInput);
})

//assign classes that are color coded based on past present and future
for (i = 9; i <= 17; i++) {
  var timeBlockEL = $("#hour-" + i);

  if (i < timeNow) {
    timeBlockEL.addClass("past");

  }else if (i > timeNow) {
    timeBlockEL.addClass("future");

  }else{
    timeBlockEL.addClass("present");
  }
}
  
  
  


 

