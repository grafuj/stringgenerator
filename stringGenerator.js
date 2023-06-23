//returns a random string of desired length, using booleans to determine what the password should contain
const generateRandomString = (length = 13, containLowercase = true, containUppercase = false, containNumbers = true, containSymbols = false) => {
  let bank = "";
  if (containLowercase) {
    bank += 'abcdefghijklmnoqrstuvwxyz';
  }
  if (containUppercase) {
    bank += "ABCDEFGHIJKLMNOPQRSTUVXYZ"
  }
  if (containNumbers) {
    bank = "0123456789";
  }
  if (containSymbols) {
    bank += "!@#$%^&*()_+-=,.<>";
  }

  console.log("characters to choose from:", bank)

  let randStr = "";
  if(!containLowercase && !containUppercase && !containNumbers && !containSymbols) {
    console.log('no ticks selected')
    return randStr;
  }
  
  for (let i = 0; i < length; i++) {
    randStr += bank[Math.floor(bank.length * Math.random())];
  }
  return randStr;
};

module.exports = { generateRandomString }
