// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// MY PATCHING CODE
function mutation(arr) {
  const arr2 = arr[1].toLowerCase();
  let bool = true;
  for (let i = 0; i < arr2.length; i++) {
    if (arr[0].toLowerCase().indexOf(arr2[i]) == -1) {
      bool = false;
    }
    console.log(arr[0].indexOf(arr2[i]));
  }
  return bool;
}

mutation(["hello", "hey"]);

module.exports = mutation;

// FREECODECAMP
// function mutation(arr) {
//   let test = arr[1].toLowerCase();
//   let target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }
