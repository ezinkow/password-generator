// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var newPassword = "";
  var passwordChars = "";

  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCharacters = upperCharacters.toLowerCase();
  var specialCharacters = "!#$%&()*+,-'./:;<=>?@][^_`{|}~";
  var numbers = "0123456789";

  var charactersNum = prompt("How many characters (between 8 and 128)?")
  if((charactersNum < 8) || (charactersNum) > 128) {
  alert("Password must be between 8 and 128 characters");
  return;
  }

  var special = confirm("Do you want to use special characters?")
  if(special === true) {
    passwordChars += special;
  }

  var numbers = confirm("Do you want to use numeric characters?")
  if(numbers === true) {
    passwordChars += numbers;
  }

  var lower = confirm("Do you want to use lower case?")
  if(lower === true) {
    passwordChars += lower;
  }

  var upper = confirm("do you want to use upper case?")
  if(upper = true) {
    passwordChars += upper;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// for(var i = 0; i < charactersNum; i++) {
//   console.log(Math.floor(Math.random() * 10))
// }



// console.log((upperCharacters[math.random(upperCharacters)])*upperCharacters.length);

// console.log(upperCharacters[for(var i = 0; i < )])

// var randomUpper = (upperCharacters[Math.floor(Math.random()*upperCharacters.length)]);
// var randomLower = (lowerCharacters[Math.floor(Math.random()*lowerCharacters.length)]);
// var randomSpecial = (specialCharacters[Math.floor(Math.random()*specialCharacters.length)]);
// var randomNumber = (numbers[Math.floor(Math.random()*numbers.length)]);

// var password1 = [randomUpper,randomLower,randomSpecial,randomNumber];

// for (var i = 0; i < charactersNum; i++) {
//   console.log((password1[Math.floor(Math.random()*4)]))
// }





// how many characters? must be 8 or more
// special characters?
// numberic characters?
// lower case?
// upper case?
