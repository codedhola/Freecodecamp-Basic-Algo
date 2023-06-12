// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
  if (typeof str !== "string") return "Please Input a valid string";
  str = str.split(" ");
  let word = str[0];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > word.length) {
      word = str[i];
    }
  }

  return word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

module.exports = findLongestWordLength;

/**
 
    // FIRST TRY : BAD CODE 
 function findLongestWordLength(str) {
   let arr = str.split(" ");
   let lent = [];
   for(let i = 0;i < arr.length;i++){
     lent.push(arr[i].length);
   }
    let answe = lent.sort((a, b) => { return b - a})
   return answe[0];
 }

 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  
  // FREECODECAMP SWEET HACK
  function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  
  
  
  
  **/
