// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength 
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u", "v", "w", "x","y", "z"]
var upperLetters = ["A","B", "C", "D", "E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChar = [
  '[', '`', '!', '@',  '#', '$', '%',
  '^', '&', '*', '(',  ')', '_', '+',
  '-', '=', '[', ']',  '{', '}', ';',
  "'", ':', '"', '\\', '|', ',', '.',
  '<', '>', '/', '?',  '~', ']', '/'
] 
var numbers = [0,1,2,3,4,5,6,7,8,9]

// Write password to the #password input
function writePassword() {
  grabPassLength();
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