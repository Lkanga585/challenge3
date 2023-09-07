// Assignment Code
var generateBtn = document.querySelector("#generate");
var number ='0123456789'
var letters ='abced'
var capletters = letters.toUpperCase()
var special ="!@#$%%"
var candidates=''


function generatePassword(){
  var password =''
for(var i =0; i<mylength; i++){
  var index= parseInt(Math.random()* candidates.length)
password+= candidates[index]
console.log (i, ' ',  password )
}
return password  
}
// Write password to the #password input
function writePassword() {
  var mylength= parseInt(prompt('how long is your password'))
console.log(mylength)

var numberAnswer =confirm('do you want to use numbers?')
console.log(numberAnswer)

if(numberAnswer ==true){
candidates = candidates+number
console.log(candidates)
}

var password =''
for(var i =0; i<mylength; i++){
  var index= parseInt(Math.random()* candidates.length)
password+= candidates[index]
console.log (i, ' ',  password )
}

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
