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

 function generatePassword() {

  var charactersNum = prompt("How many characters (between 8 and 128)?");

  charactersNum = parseInt(charactersNum)

  while (charactersNum < 8 || charactersNum > 128) {
    alert("Password must be between 8 and 128 characters");
    charactersNum = prompt("How many characters (between 8 and 128)?");
  }

  var special = confirm("Do you want to use special characters?")
  var numbers = confirm("Do you want to use numeric characters?")
  var lower = confirm("Do you want to use lower case characters?")
  var upper = confirm("do you want to use upper case characters?")


  var index ;

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

// console.log(newPassword);

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