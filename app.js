//  Chap# 26 to 30
//Question #01
// var integer  = window.prompt("Enter any integer in decimal ");
// console.log("Number: " + integer);
// console.log("Round of value: " + Math.round(integer));
// console.log("Floor value: " + Math.floor(integer));
// console.log("Ceil value: " + Math.ceil(integer));

//Question #02
// var integer  = window.prompt("Enter any integer in decimal ");
// console.log("Number: " + integer);
// console.log("Round of value: " + Math.round(integer));
// console.log("Floor value: " + Math.floor(integer));
// console.log("Ceil value: " + Math.ceil(integer));

//Question #03
// var num = window.prompt("Enter any number");
// console.log(Math.abs(num));

//Question #04
// var num = Math.random()*6;
// var dice = Math.floor(num);
// console.log("Random Dice value is: "+ (dice+1))


//Question #05
// var num = Math.random();
// var toss= Math.round(num+1);
// if(toss == 2){
//     console.log(toss);
//     console.log("Random coin valu is: Heads");
// }
// else{
//     console.log(toss);
//     console.log("Random coin value is: Tails");
// }

//Question #06
// var num = Math.random()*100;
// var number = Math.round(num+1);
// console.log("Random number between 1 to 100 is: " + number)

//Question #07
// var weight =  window.prompt("Enter your weight");
// console.log("Your weigth is: " + parseFloat(weight) + "Kg")

//Question #08
var num = Math.random()*9;
var randomNum = Math.round(num+1);
var userNum = window.prompt("Enter Eny number between 1 to 10");
if(randomNum == userNum){
    console.log("Congratulations");
}
else{
    console.log("Try Again!")
}



