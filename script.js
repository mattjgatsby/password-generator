// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength 
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