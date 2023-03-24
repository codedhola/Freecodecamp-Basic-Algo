/**
 * 
    Palindrome Checker

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.



 */

// FIRST ROUGH TRY
function palindrome(str) {
    str = str.replace(/[\s|.|_|,|-|(|)|-]/g, '')
    console.log(str)
    let reverse = []
    for(let i = str.length - 1;i >= 0;i--){
      reverse.push(str[i])
    }
    console.log(str, reverse.join(''))
    if(str.toLowerCase() === reverse.join('').toLowerCase()){
      return true
    }
    return false
  }
   
  console.log(palindrome("0_0 (: /-\ :) 0-0"));
  console.log(palindrome("A man, a plan, a canal. Panama")) 