// SUM ALL NUMBER IN A RANGE
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
function sumAll(arr) {
  if (arr === "") return "";
  const firArr = arr[0] * 1;
  const secArr = arr[1] * 1;
  let sum = 0;
  if (secArr > firArr) {
    for (let i = firArr; i < secArr; i++) {
      sum += i;
    }
    return sum + secArr;
  }
  for (let i = secArr; i < firArr; i++) {
    sum += i;
  }
  return sum + firArr;
}

module.exports = sumAll;

//FREECODECAMP SOLUTION 1

// function sumAll(arr) {
//     let max = Math.max(arr[0], arr[1]);
//     let min = Math.min(arr[0], arr[1]);
//     let sumBetween = 0;
//     for (let i = min; i <= max; i++) {
//       sumBetween += i;
//     }
//     return sumBetween;
//   }

//   sumAll([1, 4]);

//FREECODECAMP SOLUTION 2

// const sumAll = arr => {
//     // Buckle up everything to one!
//     const startNum = arr[0];
//     const endNum = arr[1];

//     // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
//     // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//     const numCount = Math.abs(startNum - endNum) + 1;

//     // Using Arithmetic Progression summing formula
//     const sum = ((startNum + endNum) * numCount) / 2;
//     return sum;
//   };

//FREECODECAMP SOLUTION 3

// function sumAll(arr) {
//     const [first, last] = [...arr].sort((a, b) => a - b);
//     return first !== last
//       ? first + sumAll([first + 1, last])
//       : first;
//   }

//   sumAll([1, 4]);
