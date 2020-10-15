// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  var newPassword = "";
  // var passwordChars = "";

  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCharacters = upperCharacters.toLowerCase();
  var specialCharacters = "!#$%&()*+,-'./:;<=>?@][^_`{|}~";
  var numberCharacters = "0123456789";

 function generatePassword() {
 
  var charactersNum = prompt("How many characters (between 8 and 128)?");
  while (charactersNum < 8 || charactersNum > 128) {
    alert("Password must be between 8 and 128 characters");
    charactersNum = prompt("How many characters (between 8 and 128)?");
  }

  var special = confirm("Do you want to use special characters?")
  var numbers = confirm("Do you want to use numeric characters?")
  var lower = confirm("Do you want to use lower case?")
  var upper = confirm("do you want to use upper case?")


  var index ;

  while (newPassword.length <= charactersNum) {
    if(special === true) {
      index = getRandomIndex(specialCharacters.length);
      newPassword += specialCharacters[index];
    }
    if(numbers === true) {
      index = getRandomIndex(numberCharacters.length);
      newPassword += numberCharacters[index];
    }
    if(lower === true) {
      index = getRandomIndex(lowerCharacters.length);
      newPassword += lowerCharacters[index];
    }
    if(upper = true) {
      index = getRandomIndex(upperCharacters.length);
      newPassword += upperCharacters[index];
      }
}

console.log(newPassword);

return newPassword
 }

 function getRandomIndex(max) {
   return Math.floor(Math.random() * max);
 }







// for(var i = 0; i < charactersNum; i++) {
//   console.log(Math.floor(Math.random() * 10))
// }



// console.log((upperCharacters[math.random(upperCharacters)])*upperCharacters.length);

// console.log(upperCharacters[for(var i = 0; i < )])


// these all need to be a function, not a var
// var randomUpper = upperCharacters[Math.floor(Math.random()*upperCharacters.length)];
// var randomLower = lowerCharacters[Math.floor(Math.random()*lowerCharacters.length)];
// var randomSpecial = specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
// var randomNumber = numbers[Math.floor(Math.random()*numbers.length)];

// var password1 = [randomUpper,randomLower,randomSpecial,randomNumber];

// for (var i = 0; i < 100; i++) {
//   return((password1[Math.floor(Math.random()*4)]))
// }

// console.log(randomUpper)




// // how many characters? must be 8 or more
// // special characters?
// // numeric characters?
// // lower case?
// // upper case?
// // function that executes 72-73
// function getRandomChar() {
//   return password1[Math.floor(Math.random()*4)]


// }


// // var password = ""

// // and then +=