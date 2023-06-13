// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(arr) {
  const arg = [];
  const result = [];
  for (let i = 1; i < arguments.length; i++) {
    arg.push(arguments[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arg.includes(arr[i]) === false) {
      result.push(arr[i]);
    }
  }
  return result;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

module.exports = destroyer;

// FREECODECAMP HACK
// function destroyer(arr) {
//     const valsToRemove = Array.from(arguments).slice(1);
//     return arr.filter(function(val) {
//       return !valsToRemove.includes(val);
//     });
//   }

// function destroyer(arr, ...valsToRemove) {
//     return arr.filter(elem => !valsToRemove.includes(elem));
//   }
