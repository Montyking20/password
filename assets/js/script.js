// Assignment Code
let generateBtn = document.querySelector("#generate");

// Password Characters
function generatePassword(){
  let lowCs = 'abcdefghijklmnopqrstuvwxyz';
  let upCs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numR = '1234567890';
  let spCh = '~!@#$%^&*()_+{}:?><;.,';
  let generatedPassword = '';
  let chars = '';

// Password length
let length = prompt('How many characters would you like your password length to be? \n 8 - 128 characters.')


if (length >= 8 && length <= 128) {
  console.log(length)
} else {
  alert('Password must be at least 8 to 128, characters \nPlease enter a valid number between 8 & 128.')
return '';
}

// Character Prompts
let checklowCs = confirm('Would you like to use lower case (a-z) letters?')
let checkupCs = confirm('Would you like to use upper case (A-Z) letters?')
let checknumR = confirm('Would you like to use numbers (0-9)?')
let checkspCh = confirm('Would you like to use any special characters (!#$%&\')?')

// Verify a character was chosen.
if (checklowCs) {
  chars += lowCs
} 
if (checkupCs) {
  chars += upCs
}
if (checknumR) {
  chars += numR
}
if (checkspCh) {
  chars += spCh
}
if (
  !checklowCs && !checkupCs && !checknumR && !checkspCh
) {
  return alert('Please select a character');
}

for (let i = 0; i < length; i++) {
  generatedPassword +=chars[Math.floor(Math.random () * chars.length)];
}
return generatedPassword;
}

// paste password into #password input
function writePassword() {
  let generatedPassword = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
