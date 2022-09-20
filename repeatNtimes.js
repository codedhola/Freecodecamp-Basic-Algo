/*
                            QUESTION
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, num) {
    let repeat = "";
    for(let i = 0; i < num;i++){
      repeat += str
    }
    return repeat;
  }
  console.log(repeatStringNumTimes("abc", 4));
  
  // USING RECURSION 
  
  // function repeatStringNumTimes(str, num) {
  //   if(num <= 0){
  //     return "";
  //   }
  //   return repeatStringNumTimes(str, num - 1) + str;
    
  // }
  // console.log(repeatStringNumTimes("abc", 4));
  