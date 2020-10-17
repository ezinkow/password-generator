// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = "";
var specialCharacters = "!#$%&()*+,-'./:;<=>?@][^_`{|}~";
var numberCharacters = "0123456789";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const specialCase = specialCharacters.split("");
const numberCase = numberCharacters.split("");
const upperCase = upperCharacters.split("");
const lowerCase = lowerCharacters.split("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// generate password function
 function generatePassword() {

  var charactersNum = prompt("How many characters (between 8 and 128)?");

  charactersNum = parseInt(charactersNum)

// number of characters
  while (charactersNum < 8 || charactersNum > 128) {
    alert("Password must be between 8 and 128 characters");
    charactersNum = prompt("How many characters (between 8 and 128)?");
  }
//  collection questions
  var special = confirm("Do you want to use special characters?")
  var numbers = confirm("Do you want to use numeric characters?")
  var lower = confirm("Do you want to use lower case characters?")
  var upper = confirm("do you want to use upper case characters?")


  var index ;
// while loop with if statements collecting answers and pulling from "buckets"
  while (newPassword.length <= charactersNum) {

    if(special === true) {
      index = getRandomIndex(specialCase.length);
      newPassword += specialCase[index];
    }
    if(numbers === true) {
      index = getRandomIndex(numberCase.length);
      newPassword += numberCase[index];
    }
    if(lower === true) {
      index = getRandomIndex(lowerCase.length);
      newPassword += lowerCase[index];
    }
    if(upper === true) {
      index = getRandomIndex(upperCase.length);
      newPassword += upperCase[index];
      }
}
// console log new password
console.log(newPassword);

return newPassword
 }

// get random function
 function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}