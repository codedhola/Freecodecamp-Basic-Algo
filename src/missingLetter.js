/**
 * 
 * Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

 * 
 */


function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);
    
    for(var i = start; i < start + len; i++){
      if(!str.includes(alphabet[i])){
        return alphabet[i];
      }
    }
    return undefined;
  }
  fearNotLetter('abce')


  /**
   * //  ANSWER FROM FREECODECAMP
   * 
   function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

   */