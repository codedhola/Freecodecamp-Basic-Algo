// Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWordLength(str) {
    str = str.split(" ");
    let test = str[0];
    for(let i = 0;i < str.length;i++){
      if(str[i].length > test.length){
        test = str[i]; 
      }
    }
  
    return test.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  
  
  
  
  
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
  
  
  