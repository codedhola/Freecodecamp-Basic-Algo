/**
                    QUESTION
    Reverse the provided string.
    You may need to turn the string into an array before you can reverse it.
    Your result must be a string.

 */

// FIRST HACK ---- BAD CODE
/*

            function reverseString(str) {
                let st = []
                for(let i = str.length - 1;i >= 0;i--){
                st.push(str[i])
                }
                return st.join().replaceAll(",", ""); 
            }
            
            console.log(reverseString("hello"));

*/

/*

            function reverseString(str) {
                const arr = Array.from(str);
                const reverse = arr.reverse();
                str = reverse.toString().replaceAll(",", "")
            
                return str;
            }
            console.log(reverseString("hello")); 

*/

// SOLUTION

// reverse.join("")   * THIS TURNS AN ARRAY A STRING
// reverse.split(" ") * THIS TURNS A STRING TO AN ARRAY

function reverseString(str) {
  if (typeof str !== "string") return "Please Input a valid string type";

  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello world");

module.exports = reverseString;
