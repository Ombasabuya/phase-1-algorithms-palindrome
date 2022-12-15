function isPalindrome(word) {
  // Write your algorithm here
  
 for(let a =0 ; a < word.length/2 ; a++){
  const z = word.length -1 - a;
  const letterStart = word[a];
  const letterEnd =word[z];

  if (letterStart !== letterEnd) 
  return false
 }

 return true

}

/* 
  Add your pseudocode here
  Write code that will check if the index position of a letter on both ends of a word coming inwards and xheck if they will match
  iterete from the beginning to the middle of the word.
  describe a variable to represent the letters
  use a if statement which returns false when the letters do not match
*/
// 
// 
 

/*
  Add written explanation of your solution here
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