//empty array


 // Assignment Code
 var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {

  //get password back from generate pass function
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
function generatePassword() {
  //prompt how many characters we would like the Pw to contain. Must be at least 8 but no more than 128
  var lengths = prompt("How many characters would you like the password to contain");
console.log(length)
if (!lengths || isNaN(lengths) == true ) {
  alert("please enter a numeric value");
  generatePassword()
}
else if (lengths < 8 || lengths >128) {
  alert("Password length must be between 8 and 128 characters!");
  generatePassword()
}
else {
  //Do you want special characters
var useSpecial = confirm("Do you want special characters?");

// Numbers
var useNumb = confirm( "Do you want numbers?");

// lowercase letters

var useLower = confirm( "Do you want lowercase letters?");

// Uppercase letters
var useUpper = confirm("Do you waant uppercase letters?");



//Final password options array
var passArray = []

if (useSpecial){
  passArray = passArray.concat(specialChars);
}
if (useNumb){
  passArray = passArray.concat(numberChars);
}
if (useLower){
  passArray = passArray.concat(uppercase);
}
if (useUpper){
  passArray = passArray.concat(lowercase);
}
console.log(passArray);
var word = "";
console.log(lengths)
for (let index = 0; index < lengths; index++) {

  //get random values from passArray
  word += passArray[Math.floor(Math.random() * passArray.length)];
  
}
return word;
}

}









 
 