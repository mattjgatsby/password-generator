/*To start I named many variables that I wanted to use throughout my code. I put these global variables at the top to keep track of them.
I used boolean variables in my functions further below to give the user's choice to include or exclude options for the password effect 
the way code generates the password.
I decided a clean way to build my arrays was to use the split method where I gave the split an argument of no space. 
I however, found an array for the special character already written on the internet as it was the best way to write it out. */
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

/*Here, i went ahead and placed all of my function calls within the fuction write password.
The function write password is excuted with the event listerner "click" so I thought it would be smart to place all of my following functions to take place within it. */
function writePassword() {
  grabPassLength();
  grabLowerLetter();
  grabUpperLetters();
  grabSpecialChar();
  grabNumbers();
  makeMasterA();
  
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
/*This was the final function I wrote out.
throughout the process of building this code and testing it, I would ultimately need to define the generatepassword function.
within thise function I put a function that would choose the characters  */
function generatePassword() {
  var passwordLocal=""
  var masterALocal= makeMasterA();
  function chooseChar() {
    var char = masterALocal[Math.floor(Math.random() * masterALocal.length)];
    return char;
  }
    for(var i = 0; i < passLength; i++) {
      passwordLocal = passwordLocal + chooseChar()
    }
    return passwordLocal;
}

generateBtn.addEventListener("click", writePassword);

/*This grabPassLength function was the first one I wrote. 
the basic idea was to have a way to retrieve whatever length the user wanted to input.
I included an if else statement that would not allow the user to input a length outside the size of 8-128 length. */
function grabPassLength (){
  passLength = prompt("Choose number between 8 and 128.")

if(passLength >= 8 && passLength <= 128) {

}else(grabPassLength()); 
}

/*Next I wrote out fuctions that would further give the user confirm messages that allow the user to choose which options they wished to include in their password.
I then used the global boolean variables I had declared at the top of the page. 
These variables would then be set to equal whatever boolean outcome the user picks. */
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

/*The makeMasterA fuction was built to take all the array options and concat them into one large array.
I did this because I found it would be easier to ultimately have the password randomly choose from one single array rather than trying to pick from 
individual arrays.
I used if statments in order for the code to take the user's input on what options to include and concat the appropriate arrays into the masterA array. */
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