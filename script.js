
// set current time
var currentHour = moment().hours(); 
//set intial time on page load
timerInterval();
// set initial background color of time row colors
setBackground();

//run setBackground function every 3 seconds
setInterval(setBackground, 3000);

//make sure that the time is always running since running on current time
setInterval(timerInterval, 1000);

// putting the current day on the jumbotron section
function timerInterval() {
    $('#currentDay').text(moment().format('LLLL'));
}


//set up function to change the background color of the time block depending on whether the time is current, in the past or in the future
// adding the specified class will change the class in the time blocks
function setBackground() {
    $(".time-block").each(function () {
        //variable of blockhour is set up to make the time displayed on the block is parseInt to make it an interger and attach it as data.
        var blockHour = parseInt($(this).data('time'));
        // the hour in the block is before the current time then remove the class of being present or future time, add past class. 
        if (blockHour < currentHour) {
            $(this).find('.text-area').removeClass('present future').addClass('past');
        // if block hour in block is equal to current hour then remove class for past and future and add class of present
        } else if (blockHour === currentHour) {
            $(this).find('.text-area').removeClass('past future').addClass('present');
        // if block hour is greater than the current hour then remove past and present class, add future class
        } else if (blockHour > currentHour) {
            $(this).find('.text-area').removeClass('past present').addClass('future');
        }
    });
};

//add event listener for the save button, i need a function to make it save user input in text content to local storage
$(".saveBtn").on("click", function () {
    //set var of key which is the specific time block the user is selecting save button on to local storage
    var key = $(this).parent().data('time');
    //set value var which is selecting for the parent element of the save button element and it's child element the text-area as a user input value
    var value = $(this).parent().find('.text-area').val();
    //saves both variales in local storage
    localStorage.setItem(key, value); 
});

// fill the textarea of each time block with user input stored in localstorage.
// .find gets child of element selecting for which is the that of "textarea" div
// then .val gets value in terms of user input for the plans made from localStorage
// .getItem returns the value stores in object data-time id by specific number corresponding to the time.
$('[data-time="8"]').find("textarea").val(localStorage.getItem("8"));   
$('[data-time="9"]').find("textarea").val(localStorage.getItem("9"));
$('[data-time="10"]').find("textarea").val(localStorage.getItem("10"));
$('[data-time="11"]').find("textarea").val(localStorage.getItem("11"));
$('[data-time="12"]').find("textarea").val(localStorage.getItem("12"));
$('[data-time="1"]').find("textarea").val(localStorage.getItem("1"));
$('[data-time="2"]').find("textarea").val(localStorage.getItem("2"));
$('[data-time="3"]').find("textarea").val(localStorage.getItem("3"));
$('[data-time="4"]').find("textarea").val(localStorage.getItem("4"));
$('[data-time="5"]').find("textarea").val(localStorage.getItem("5"));


