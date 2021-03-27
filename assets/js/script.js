var DateTime = luxon.DateTime;

//use this for top of the page
console.log(DateTime.now().toFormat("MM/dd/yyyy"));

//use this for change of colors if statement
var hour = (DateTime.now().toFormat("h a"));
console.log(hour);
var nineAM = "9 AM";
var tenAM = "10 AM";
var elevenAM = "11 AM";
var twelvePM = "12 PM";
var onePM = "1 PM";
var twoPM = "2 PM";
var threePM = "3 PM";
var fourPM = "4 PM";
var fivePM = "5 PM";
var sixPM = "6 PM";

switch (hour){
  case tenAM:
  $("#tenAM").addClass("bg-danger").removeClass("bg-success");
break;
//add new lines for all hours same way, add grey for past multiple lines
case elevenAM:
    $("#elevenAM").addClass("bg-danger").removeClass("bg-success");
break;
case twelvePM:
    $("#twelvePM").addClass("bg-danger").removeClass("bg-success");
break;
case onePM:
    $("#onePM").addClass("bg-danger").removeClass("bg-success");
break;
case twoPM:
    $("#twoPM").addClass("bg-danger").removeClass("bg-success");
break;
case threePM:
    $("#threePM").addClass("bg-danger").removeClass("bg-success");
break;
case fourPM:
    $("#fourPM").addClass("bg-danger").removeClass("bg-success");
break;
case fivePM:
    $("#fivePM").addClass("bg-danger").removeClass("bg-success");
break;
case sixPM:
    $("#sixPM").addClass("bg-danger").removeClass("bg-success");
break;
}

//can add a for statement and add array for ...PM or ...AM 



//Jquery only used for updated version

//Bootstrap hints: <h4 class="card-header bg-dark text-light">, check bootstrap site
//After color has been changed it could be linked back by using Jquery, pref JS

//var repeater;

//function showcurrenttime()
//{
  //  $('.crnttym').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    //repeater = setTimeout(showcurrenttime, 500);

    //if ($('.interviewtime').data('time') < moment().format('YYYYMMDDHHmmss'))
    //{
     //   $(this).parent().addClass('dngr');
    //}       
//}
//showcurrenttime(); 

//public class MyBean {
    //private Clock clock;  // dependency inject
   // ...
    //public void process(LocalDate eventDate) {
      //if (eventDate.isBefore(LocalDate.now(clock)) {
    //console.log(clock);
     // }
    //}
  // 