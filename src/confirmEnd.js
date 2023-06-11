/*              
                                QUESTION
 Check if a string (first argument, str) ends with the given target string (second argument, target).
 This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
 */

function confirmEnding(str, target) {
    const arr = str.slice(str.length - target.length)
    
    return arr == target ? true : false;
  }
  //confirmEnding("Bastian", "n")
  console.log(confirmEnding("Bastian", "ian"));  
  



// FIRST TRY: TOO MANY CODES 

// function confirmEnding(str, target) {
//   const test = str.length - (str.length - target.length);
//   const arr = str.slice(str.length - target.length)
//   let get = str.substring(str.length - target.length)
//   console.log(get);
//   return arr == target ? true : false;
// }
// //confirmEnding("Bastian", "n")
// console.log(confirmEnding("Bastian", "ian"));  
