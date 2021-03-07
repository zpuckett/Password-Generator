// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);


var confirmLength = "";
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// password variables 
// number set
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// character set
var character = ["$", "!", "%", "&", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
// lowercase alphabetical set
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase alphabetical set
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// password variables end

function generatePassword() {
  var confirmLength = (prompt("How many characters in password? Must be between 8 and 128."));
  while (confirmLength <= 8 || confirmLength >= 128) {
    var confirmLength = (prompt("How many characters in password? Must be between 8 and 128."));
  }

  // confirm window for password parameters
  var confirmNumber = confirm("Click OK to include numbers in password.");
  var confirmCharacter = confirm("Click OK to include characters in password.");
  var confirmUppercase = confirm("Click OK to include uppercase letters in password.");
  var confirmLowercase = confirm("Click OK to inlcude lowercase letters in password.");


  while (confirmUppercase === false && confirmLowercase === false && confirmCharacter === false && confirmNumber === false) {
    alert("You must choose at least ONE!!");
    var confirmNumber = confirm("Click OK to include numbers in password.");
    var confirmCharacter = confirm("Click OK to include characters in password.");
    var confirmUppercase = confirm("Click OK to include uppercase letters in password.");
    var confirmLowercase = confirm("Click OK to inlcude lowercase letters in password.");

  }
// if statements for password conditions//
  var passwordCharacters = ""

  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number)
  }
  
  if (confirmCharacter) {
    passwordCharacters = passwordCharacters.concat(character)
  }

  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  }

  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  }

  console.log(passwordCharacters)

  var randomPassword = ""
// loop for password genrator
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }

  return randomPassword;

}

// password function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)
}


  

