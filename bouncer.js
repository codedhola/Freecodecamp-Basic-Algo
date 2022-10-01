// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    const result = [];
    for(let i = 0;i < arr.length;i++){
      if(Boolean(arr[i])){
        result.push(arr[i]);
      }
    }
    console.log(Boolean(4))
    return result;
  }
  bouncer([7, "ate", "", false, 9]);  

  /* NICE FREECODECAMP CHEAT 
  
        function bouncer(arr) {
            return arr.filter(Boolean);
        }
        
   */