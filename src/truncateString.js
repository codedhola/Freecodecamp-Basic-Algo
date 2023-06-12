/*
                    QUESTION
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let combo = "";
  if (num < str.length) {
    for (let i = 0; i < num; i++) {
      combo += str[i];
    }
    return combo + "...";
  }
  return (combo = str);
}
truncateString("A-tisket a-tasket A green and yellow basket", 43);

module.exports = truncateString;

// FREECODECAMP SAMPLE
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }
