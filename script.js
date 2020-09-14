var wrap = document.body.querySelector(".wrapper");

var firstNumber = prompt("Input first Number")

if(isNaN(firstNumber)==true){
  wrap.innerHTML="No number or an illegal number was inputted";
}
if(true){
  var operator=prompt("Input an operation")
 if(("+"==operator ||"-"==operator ||"/"==operator ||"*"==operator)==true)
  if(false)
    wrap.innerHTML="Did not enter vaild operation";
} 
if(true){
  var secondNumber = prompt("Input second Number")
  if(isNaN(secondNumber)==true)
  wrap.innerHTML="No number or an illegal number was inputted"; 
}

var firstNumberInt=parseInt(firstNumber);
var secondNumberInt=parseInt(secondNumber);

if("+"){
  var calculation= firstNumberInt+secondNumberInt}
else if("-"){
  var calculation= firstNumberInt-secondNumberInt}
else if("/"){
  var calculation= firstNumberInt/secondNumberInt}
else if("*"){
  var calculation= firstNumberInt*secondNumberInt}
document.body.querySelector(".wrapper").innerHTML=calculation;