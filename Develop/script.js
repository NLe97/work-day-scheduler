
// set current time
var currentHour = moment().hours(); 
//set intial time on page load
timerInterval();
// set initial background color of time row colors
setBackground();

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



