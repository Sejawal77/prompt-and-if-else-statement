//  chapter no 9 - 10 
// //  no . 1 

// var city = prompt("enter the city name");
// if(city == "karachi") {
//     document.write("welcome to the city of the light");
// }


//  no.2

// var gender = prompt (" tell the gender !") ;
//  if ( gender == "male" ){
//     document.write(" Good Morning sir !");
//  }
//  else if ( gender == "female"){
//     document.write("Good morining Ma'am ");
//  }


//  no . 3 

// var signalColor = prompt(" tell the color of raod traffic ");

// if ( signalColor == "red"){
//     document.write("Must stop")

// }
// else if ( signalColor == "yellow"){
//     document.write("ready to move")

// }
// else if ( signalColor == "green"){
//     document.write("Move Now");

// }

// no . 4 

// var fuel = +prompt("how many litres of fuel are in your car right now");

// if (fuel < 0.25 ){
//     document.write("please refill the fuel in your car");
// }

//  no . 5 


//  Run this script and check alert message would be displayed or not record the output

//  a.
//  var a = 4;
//  if ( ++a === 5){
//     alert("given condition for variable is true");
//  }
// output  statement a works correctly


//   b. 

// var b  = 82;
// if (b++ === 83){
//     alert("given condition for varible b is true");
// }
//  b does not work
//  c .
// var c = 12;
// if(c++ === 13) {
//     alert("condition 1 is true")
// }
// if(c === 13){
//     alert("condition 2 is true")
// }
// if(++c <14){
//     alert("condition 3 is true")
// }
// if(c === 14){
//     alert("condition 4 is true")
// }

//  condition 2 and condition 4 works others not





//  d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost){
//     alert("the cost equals ");
// }

// outpur the cost equals it means this code works

// e.
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }
//  this prints True 

// f.

// if("car" < "cat"){
//     alert("car is smaller than cat")
// }
//  output this shows alert how i dont know


// no.6

// var totalMarks = +prompt("please put total marks first");
// var  obtainMarks = +prompt("please  enter your obtained marks ");

// var grade1 = "A-one";
// var grade2 = " A";
// var grade3 = "B";
// var grade4 = "Fail";

// var marksInParcent = (obtainMarks * 100)/totalMarks;

// if(marksInParcent >= 80){
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("<br>" + "Total marks:" + " " + totalMarks );
//     document.write("<br>" + "Otained marks:" + " " + obtainMarks);
//     document.write("<br>" + "Percentage:" + " " + marksInParcent+"%");
//     document.write("<br>" + " Grade :" + grade1) ;
//     document.write("Exellent:")
// }
// else if (marksInParcent >= 70){
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("<br>" + "Total marks:" + " " + totalMarks );
//     document.write("<br>" + "Otained marks:" + " " + obtainMarks);
//     document.write("<br>" + "Percentage:" + " " + marksInParcent+"%");
//     document.write("<br>" + " Grade :" + grade2) ;
//     document.write("Good:")

// }
// else if (marksInParcent >= 60){
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("<br>" + "Total marks:" + " " + totalMarks );
//     document.write("<br>" + "Otained marks:" + " " + obtainMarks);
//     document.write("<br>" + "Percentage:" + " " + marksInParcent+"%");
//     document.write("<br>" + " Grade :" + grade3) ;
//     document.write("You need to improve:")

// }
// else if (marksInParcent < 60) {
    
//     document.write("<h1> Marks Sheet </h1>")
//     document.write("<br>" + "Total marks:" + " " + totalMarks );
//     document.write("<br>" + "Otained marks:" + " " + obtainMarks);
//     document.write("<br>" + "Percentage:" + " " + marksInParcent+"%");
//     document.write("<br>" + " Grade :" + grade3) ;
//     document.write("<br>" +"Sorry :" + grade4)

// }


// no.7 

// var secret = 7;
// var user = +prompt("Guess the number from 1 to 10 \n you have 2 attempts ");


//  if (user === secret){
//     alert("oh great you guess the correct number");
// }
// else if (user == 8){
//     alert("enough close to the secrect number");
// }

// else if(user < 7 || ( user < 11 &&  user > 8)     ){
//     alert("try again");
// }

// else if (user > 10){
//     alert("you dont have permission to enter greater than 10!");
// }



//  chapter no 12 - 13

// no . 3
//  state the user's number is positive , negative or zero

// var userInput = +prompt("enter any number ");
// if(userInput === 0){
//     alert("number you entered is zero")
// }
// else if (userInput > 0){
//     alert("number you entered is positive")
// }
// else{
//     alert("number you entered is negative ")
// }



//  no . 4

// var input = prompt("enter a letter \n example : a , b , c ....");
// if(input == ("a" || " e" || " i" || " o " || " u") && input.length <=1 ){
//     alert(" True ")
// }
// else if (input.length > 1   ){
//     alert("please put one letter")

// }
// else{
//     alert("False");
// }


// no. 5

// var password = "sejawal";
// var userPassword = prompt("enter your password");
// if(userPassword == password){
//     alert("you entered correct password")
// }
// else {
//     alert("wrong password try again");
// }


// no.6
// fixing the code

// var greeting;
// var hour = 19;
// if(hour < 18){
//     greeting = "Good day";

// }
// else {
//     greeting = "Good evening"
// }

