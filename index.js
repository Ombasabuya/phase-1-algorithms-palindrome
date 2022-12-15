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
Problem Solving Approach
Use the problem solving process Links to an external site.described in the previous lesson to come up with an approach to the problem and write your solution:

Rewrite the Problem in Your Own Words
Write Your Own Test Cases
Pseudocode
Code
Make It Clean and Readable
Optimize

*/
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;