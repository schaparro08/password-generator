
 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
 
   var passwordText = document.querySelector("#password");
 
   passwordText.value = password;
 
 }
 
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);



// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}",
 "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
 "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
 "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 // MY CODE BELOW
function writePassword() {
  var length = prompt("How many characters would you like the password to contain");
console.log(length)
if (!length || isNaN(length) == true ) {
  alert("please enter a numeric value");
  writePassword()
}
else if (length < 8 || length >128) {
  alert("Password length must be between 8 and 128 characters!");
  writePassword()
}
else {
  var useSpecial = confirm("Do you want special characters?");
console.log(useSpecial);
}
var useNumb = confirm( "Do you want numbers?");

if (useNumb){
  var useLower = confirm( "Do you want lowercase letters?")
}

if (useLower){
  
}
}






 
 //prompt how many characters we would like the Pw to contain. Must be at least 8 but no more than 128


// Create randomizer

 //Do you want special characters

 //Do you want numbers

 // Do you want to include lowercase characters


 // do you want to contain uppercase characters











