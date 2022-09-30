// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetter = true;
var upLetter = true;
var specChar = true;
var num = true;
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
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
  grabPassLength();
  grabLowerLetter();
  grabUpperLetters();
  grabSpecialChar();
  grabNumbers();
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
   lowLetter =confirm("Do you want to include lowercase letters?");
  }

function grabUpperLetters(){
    confirm("Do you want to include Uppercase letters?");
}

function grabSpecialChar(){
    confirm("Do you want to include Special Characters?");
}

function grabNumbers(){
    confirm("Do you want to include numbers?");
}

