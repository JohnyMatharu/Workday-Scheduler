var displayTextOne = JSON.parse(localStorage.getItem("nineAMstorage")) || [];
document.getElementById("nineAM").innerHTML=displayTextOne;
console.log(displayTextOne);
var displayTextTwo = JSON.parse(localStorage.getItem("tenAMstorage")) || [];
document.getElementById("tenAM").innerHTML=displayTextTwo;
console.log(displayTextTwo);
var displayTextThree = JSON.parse(localStorage.getItem("elevenAMstorage")) || [];
document.getElementById("elevenAM").innerHTML=displayTextThree;
console.log(displayTextThree);
var displayTextFour = JSON.parse(localStorage.getItem("twelvePMstorage")) || [];
document.getElementById("twelvePM").innerHTML=displayTextFour;
console.log(displayTextFour);
var displayTextFive = JSON.parse(localStorage.getItem("onePMstorage")) || [];
document.getElementById("onePM").innerHTML=displayTextFive;
console.log(displayTextFive);
var displayTextSix = JSON.parse(localStorage.getItem("twoPMstorage")) || [];
document.getElementById("twoPM").innerHTML=displayTextSix;
console.log(displayTextSix);
var displayTextSeven = JSON.parse(localStorage.getItem("threePMstorage")) || [];
document.getElementById("threePM").innerHTML=displayTextSeven;
console.log(displayTextSeven);
var displayTextEight = JSON.parse(localStorage.getItem("fourPMstorage")) || [];
document.getElementById("fourPM").innerHTML=displayTextEight;
console.log(displayTextEight);
var displayTextNine = JSON.parse(localStorage.getItem("fivePMstorage")) || [];
document.getElementById("fivePM").innerHTML=displayTextNine;
console.log(displayTextNine);
var displayTextTen = JSON.parse(localStorage.getItem("sixPMstorage")) || [];
document.getElementById("sixPM").innerHTML=displayTextTen;
console.log(displayTextTen);

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
case nineAM:
   $("#nineAM").addClass("bg-danger").removeClass("bg-success");
break;
case tenAM:
   $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
   $("#tenAM").addClass("bg-danger").removeClass("bg-success");
break;
//add new lines for all hours same way, add grey for past multiple lines
case elevenAM:
    $("#nineAM").addClass("bg-secondary").removeClass("bg-success");    
    $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#elevenAM").addClass("bg-danger").removeClass("bg-success");
break;
case twelvePM:
    $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
    $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#twelvePM").addClass("bg-danger").removeClass("bg-success");
break;
case onePM:
    $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
    $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
    $("#onePM").addClass("bg-danger").removeClass("bg-success");
break;
case twoPM:
    $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
    $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
    $("#onePM").addClass("bg-secondary").removeClass("bg-success");
    $("#twoPM").addClass("bg-danger").removeClass("bg-success");
break;
case threePM:
      $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
      $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
      $("#onePM").addClass("bg-secondary").removeClass("bg-success");
      $("#twoPM").addClass("bg-secondary").removeClass("bg-success");
    $("#threePM").addClass("bg-danger").removeClass("bg-success");
break;
case fourPM:
      $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
      $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
      $("#onePM").addClass("bg-secondary").removeClass("bg-success");
      $("#twoPM").addClass("bg-secondary").removeClass("bg-success");
      $("#threePM").addClass("bg-secondary").removeClass("bg-success");
    $("#fourPM").addClass("bg-danger").removeClass("bg-success");
break;
case fivePM:
      $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
      $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
      $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
      $("#onePM").addClass("bg-secondary").removeClass("bg-success");
      $("#twoPM").addClass("bg-secondary").removeClass("bg-success");
      $("#threePM").addClass("bg-secondary").removeClass("bg-success");
      $("#fourPM").addClass("bg-secondary").removeClass("bg-success");
    $("#fivePM").addClass("bg-danger").removeClass("bg-success");
break;
case sixPM:
    $("#nineAM").addClass("bg-secondary").removeClass("bg-success");
    $("#tenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#elevenAM").addClass("bg-secondary").removeClass("bg-success");
    $("#twelvePM").addClass("bg-secondary").removeClass("bg-success");
    $("#onePM").addClass("bg-secondary").removeClass("bg-success");
    $("#twoPM").addClass("bg-secondary").removeClass("bg-success");
    $("#threePM").addClass("bg-secondary").removeClass("bg-success");
    $("#fourPM").addClass("bg-secondary").removeClass("bg-success");
    $("#fivePM").addClass("bg-secondary").removeClass("bg-success");
    $("#sixPM").addClass("bg-danger").removeClass("bg-success");
break;
}


document.getElementById("btnNineAM").addEventListener("click", saveTextNineAM); 
document.getElementById("btnTenAM").addEventListener("click", saveTextTenAM);
document.getElementById("btnElevenAM").addEventListener("click", saveTextElevenAM);
document.getElementById("btnTwelvePM").addEventListener("click", saveTextTwelvePM);
document.getElementById("btnOnePM").addEventListener("click", saveTextOnePM);
document.getElementById("btnTwoPM").addEventListener("click", saveTextTwoPM);
document.getElementById("btnThreePM").addEventListener("click", saveTextThreePM);
document.getElementById("btnFourPM").addEventListener("click", saveTextFourPM);
document.getElementById("btnFivePM").addEventListener("click", saveTextFivePM);
document.getElementById("btnSixPM").addEventListener("click", saveTextSixPM);

function saveTextNineAM()
{
var txtNineAM = document.getElementById('nineAM').value;
console.log(txtNineAM);
localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
//PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
var displayText = JSON.parse(localStorage.getItem("nineAMstorage")) || [];
}

function saveTextTenAM()
{
  var txtTenAM = document.getElementById('tenAM').value;
  console.log(txtTenAM);
  localStorage.setItem("tenAMstorage",JSON.stringify(txtTenAM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("tenAMstorage")) || [];
  }

function saveTextElevenAM()
{
  var txtElevenAM = document.getElementById('elevenAM').value;
  console.log(txtElevenAM);
  localStorage.setItem("elevenAMstorage",JSON.stringify(txtElevenAM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("elevenAMstorage")) || [];
  }

function saveTextTwelvePM()
{
  var txtTwelvePM = document.getElementById('twelvePM').value;
  console.log(txtTwelvePM);
  localStorage.setItem("twelvePMstorage",JSON.stringify(txtTwelvePM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("twelvePMstorage")) || [];
  }

function saveTextOnePM()
{
  var txtOnePM = document.getElementById('onePM').value;
  console.log(txtOnePM);
  localStorage.setItem("onePMstorage",JSON.stringify(txtOnePM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("onePMstorage")) || [];
  }

function saveTextTwoPM()
{
  var txtTwoPM = document.getElementById('twoPM').value;
  console.log(txtTwoPM);
  localStorage.setItem("twoPMstorage",JSON.stringify(txtTwoPM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("twoPMstorage")) || [];
  }

function saveTextThreePM()
{
  var txtThreePM = document.getElementById('threePM').value;
  console.log(txtThreePM);
  localStorage.setItem("threePMstorage",JSON.stringify(txtThreePM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("threePMstorage")) || [];
  }

function saveTextFourPM()
{
  var txtFourPM = document.getElementById('fourPM').value;
  console.log(txtFourPM);
  localStorage.setItem("fourPMstorage",JSON.stringify(txtFourPM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("fourPMstorage")) || [];
  }

function saveTextFivePM()
{
  var txtFivePM = document.getElementById('fivePM').value;
  console.log(txtFivePM);
  localStorage.setItem("fivePMstorage",JSON.stringify(txtFivePM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("fivePMstorage")) || [];
  }
function saveTextSixPM()
{
  var txtSixPM = document.getElementById('sixPM').value;
  console.log(txtSixPM);
  localStorage.setItem("sixPMstorage",JSON.stringify(txtSixPM));
  //PARSE: localStorage.setItem("nineAMstorage",JSON.stringify(txtNineAM));
  var displayText = JSON.parse(localStorage.getItem("sixPMstorage")) || [];
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