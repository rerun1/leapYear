var year = 0;
var leapYears = [];
var leapYearsArray = [];
var leapYearsArrayList = "";

var leapYear = function(year){
  if (( year % 4 === 0 ) && ( year % 100 !== 0) || ( year % 400 === 0 )) {
    return true;
  } else {
  	return false;
  }
}

for (var i = 1600; i <= 3000; i += 4) {
  leapYears.push(i);
}

leapYearsArray = leapYears.filter(function(number) {
  if ((number % 400 === 0) || (number % 100 !== 0)) {
    return number;
  }
});

leapYearsArrayList = leapYearsArray.join(", ")


$(document).ready(function(){

  $("form#enterYear").submit(function(event){
    event.preventDefault();

    $("p#leapYear").empty();
    $("div#displayLeap").show();
    $("p#leapList").text(leapYearsArrayList);

    var year = parseInt($("input#inputYear").val());
    var result = leapYear(year);

    if (!result) {
      $("p#leapYear").text(year + " is not a leap year.")
    } else {
      $("p#leapYear").text(year + " is a leap year.")
    }

  });

});
