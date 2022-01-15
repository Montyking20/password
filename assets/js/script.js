// Assignment Code
let generateBtn = document.querySelector("#generate");

// Password Characters
function generatePassword(){
  lowCs = 'abcdefghijklmnopqrstuvwxyz';
  upCs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  numR = '1234567890';
  spCh = '~!@#$%^&*()_+{}:?><;.,';
  generatedPassword = '';
  chars = '';

// Password length
length = prompt('How many characters would you like your password length to be? \n 8 - 128 characters.')


if (length >= 8 && length <= 128) {
  console.log(length)
} else {
  alert('Password must be at least 8 to 128, characters \nPlease enter a valid number between 8 & 128.')
return '';
}

// Character Prompts
checklowCs = confirm('Would you like to use lower case (a-z) letters?')
checkupCs = confirm('Would you like to use upper case (A-Z) letters?')
checknumR = confirm('Would you like to use numbers (0-9)?')
checkspCh = confirm('Would you like to use any special characters (!#$%&\')?')

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
  generatedPassword = generatePassword();
  passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function myFunction() {
  /* Get the text field */
  copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  // /* Alert the copied text */
  alert("Password Copied: " + copyText.value);
}