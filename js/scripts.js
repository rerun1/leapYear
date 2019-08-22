

var userYear = 0;
var years = [];
var leapYears = [];

for (var i = 1600; i <= 2400; i += 4) {
  years.push(i);
}
  // years.splice(25,1);
  // years.splice(49,1);
  // years.splice(73,1);
  // years.splice(122,1);
  // years.splice(146,1);
  // years.splice(170,1);

var remove100Year = [25,50,75,125,150,170];

for (var i = remove100Year.length -1; i >= 0; i--) {
  years.splice(remove100Year[i],1);
}

// won't mess up index if start from back

console.log(years);




$(document).ready(function(){

  $("form#enterYear").submit(function(event){
    event.preventDefault();

    $("p#leapYear").empty();

    userYear = parseInt($("input#inputYear").val());

    alert(userYear);

    $("div#displayLeap").show();

    for (var i = 0; i <= years.length; i += 1) {
      if (userYear === years[i]) {
        return $("p#leapYear").text(years[i]+" is a leap year.");
      } else {
        $("p#leapYear").text(userYear + " is not a leap year.")
      }
    }

    var leapList = years.join(", ");

    $("p#leapList").text(leapList);

  });

});
