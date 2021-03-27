var DateTime = luxon.DateTime;

//use this for top of the page
console.log(DateTime.now().toFormat("MM/dd/yyyy"));

//use this for change of colors if statement
var hour = (DateTime.now().toFormat("h a"));

var nineAM = "9 am";
var tenAM = "10 am";
var elevenAM = "11 am";
var twelvePM = "12 pm";
var onePM = "1 pm";
var twoPM = "2 pm";
var threePM = "3 pm";
var fourPM = "4 pm";
var fivePM = "5 pm";
var sixPM = "11 pm";//test

switch (hour){
case 0: (hour === tenAM);
  $("#tenAM").addClass("bg-danger").removeClass("bg-success");
break;
//add new lines for all hours same way, add grey for past multiple lines
case 1: (hour === elevenAM);
    $("#elevenAM").addClass("bg-danger").removeClass("bg-success");
break;
case 2: (hour === twelvePM);
    $("#twelvePM").addClass("bg-danger").removeClass("bg-success");
break;
case 3: (hour === onePM);
    $("#onePM").addClass("bg-danger").removeClass("bg-success");
break;
case 4: (hour === twoPM);
    $("#twoPM").addClass("bg-danger").removeClass("bg-success");
break;
case 5: (hour === threePM);
    $("#threePM").addClass("bg-danger").removeClass("bg-success");
break;
case 6: (hour === fourPM);
    $("#fourPM").addClass("bg-danger").removeClass("bg-success");
break;
case 7: (hour === fivePM);
    $("#fivePM").addClass("bg-danger").removeClass("bg-success");
break;
case 8: (hour === sixPM);
    $("#sixPM").addClass("bg-danger").removeClass("bg-success");
break;
}



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