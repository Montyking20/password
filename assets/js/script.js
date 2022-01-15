// Assignment Code
let generateBtn = document.querySelector("#generate");

// Password Characters
function generatePassword(){
  let lowCs = 'abcdefghijklmnopqrstuvwxyz';
  let upCs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  let numR = '1234567890';
  let spCh = '~!@#$%^&*()_+{}:?><;.,';
  let password = '';
  let chars = '';

// Password length
let length = prompt('Please indicate a password length between 8 and 128.')


if (length >= 8 && length <= 128) {
  console.log(length)
} else {
  alert('Password must be at least 8 to 128, characters \nPlease enter a valid number between 8 & 128.')
return '';
}

// Character Prompts
let qrylowCs = confirm('Do you want to use lower case (a-z) letters in your password?')
let qryupCs = confirm('Do you want to use upper case (A-Z) letters in your password?')
let qrynumR = confirm('Do you want to use numbers (0-9) in your password?')
let qryspCh = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

// Validate at least one criteria was selected
// Execute random character selection based on password length
// If lower case letters are wanted, randomly select a letter from the smLttrs array.
if (qrylowCs) {
  chars += lowCs
} 
if (qryupCs) {
  chars += upCs
}
if (qrynumR) {
  chars += numR
}
if (qryspCh) {
  chars += spCh
}
if (
  !qrylowCs && !qryupCs && !qrynumR && !qryspCh
) {
  return alert('Please select a character');
}

for (let i = 0; i < length; i++) {
  password +=chars[Math.floor(Math.random () * chars.length)];
}
return password;
}

// paste password into #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
