function isPalindrome(word) {
  let stringToTest = word.split("").reverse().join('');
  if (word === stringToTest) {
    return true;
  } else {
    return false;
  }
}

/* 
  separate the individual letters in the word
  push into an array
  match first element in array to last? but what about a middle letter?
  
*/

/*
  string is parameter. 
  function returns true if the string can be constructed forwards and backwards
  what tools can make it do that? 
  not all palidromes are odd, as in abba, though many are
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
