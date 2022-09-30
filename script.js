// Assignment Code
var generateBtn = document.querySelector("#generate");
var userWantsLow = true;
var userWantsUp = true;
var userWantsSC = true;
var userWantsNum = true;
var passLength;
var lettersList = "abcdefghijklmnopqrstuvwxyz";
var lowLetter = lettersList.split("");
var upletterList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLetters = upletterList.split("");
var specialChar = [
  '[', '`', '!', '@',  '#', '$', '%',
  '^', '&', '*', '(',  ')', '_', '+',
  '-', '=', '[', ']',  '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?',  '~', ']', '/'
]; 
var numbers = "0123456798";
var numArr = numbers.split("");

// Write password to the #password input
function writePassword() {
  grabPassLength();
  grabLowerLetter();
  grabUpperLetters();
  grabSpecialChar();
  grabNumbers();
  makeMasterA();
  console.log(makeMasterA());

  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  

   
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function grabPassLength (){
  passLength = prompt("Choose number between 8 and 128.")

if(passLength >= 8 && passLength <= 128) {

}else(grabPassLength()); 
}

function grabLowerLetter(){
   userWantsLow = confirm("Do you want to include lowercase letters?");
  }

function grabUpperLetters(){
    userWantsUp = confirm("Do you want to include Uppercase letters?");
}

function grabSpecialChar(){
    userWantsSC = confirm("Do you want to include Special Characters?");
}

function grabNumbers(){
    userWantsNum = confirm("Do you want to include numbers?");
}

function makeMasterA() {
    var masterA = [];
      if(userWantsLow) {
        masterA = masterA.concat(lowLetter);
      }
      if(userWantsUp) {
        masterA = masterA.concat(upperLetters);
      }
      if(userWantsSC) {
        masterA = masterA.concat(specialChar);
      }
      if(userWantsNum) {
        masterA = masterA.concat(numArr);
      }
    return masterA;
}
function pickChar() {
  
}