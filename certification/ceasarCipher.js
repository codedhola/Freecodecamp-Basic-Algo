/**
 * 
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.



 */
function rot13(str) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    let index
    
    for(let i = 0;i < str.length;i++){
       index = letters.indexOf(str[i]) + 13
       
      if(index >= 26){
        result += letters[index - 26]
      }else if(index <= 12){
        result += str[i]
      }else{
      result += letters[index]
      }
    } 
    return result;
  }
  
  console.log(rot13("SERR PBQR PNZC"));