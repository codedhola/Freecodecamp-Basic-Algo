// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
    if(bool === true || bool === false){
      return true
    }
    return false
  }
  console.log(booWho(null));
  
  // FREECODECAMP
  
  // function booWho(bool) {
  //   return typeof bool === "boolean";
  // }
  
  // // test here
  // booWho(null);
  
  