// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);


var confirmLength = "";
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// password variables start
// number set
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// character set
var character = ["$", "!", "%", "&", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
// alphabetical set
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// upper for Uppercase conversion
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
  var confirmLength = (prompt("How many characters in password? Must be between 8 and 128."));
  while (confirmLength <= 8 || confirmLength >= 128) {
    var confirmLength = (prompt("How many characters in password? Must be between 8 and 128."));
  }

  // Get references to the #generate element
  var confirmNumber = confirm("Click OK to include numbers in password.");
  var confirmCharacter = confirm("Click OK to include characters in password.");
  var confirmUppercase = confirm("Click OK to include uppercase letters in password.");
  var confirmLowercase = confirm("Click OK to inlcude lowercase letters in password.");


  while (confirmUppercase === false && confirmLowercase === false && confirmCharacter === false && confirmNumber === false) {
    alert("You must choose at lease ONE!!");
    var confirmNumber = confirm("Click OK to include numbers in password.");
    var confirmCharacter = confirm("Click OK to include characters in password.");
    var confirmUppercase = confirm("Click OK to include uppercase letters in password.");
    var confirmLowercase = confirm("Click OK to inlcude lowercase letters in password.");

  }

  var passwordCharacters = []

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

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }

  return randomPassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

