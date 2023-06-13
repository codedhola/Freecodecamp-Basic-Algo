/**
 * 
    Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.




 */

function dropElements(arr, func) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      result = arr.slice(i);
      return result;
    }
  }
  return [];
}

dropElements([1, 2, 3, 4], function (n) {
  return n < 3;
});

module.exports = dropElements;

/**
   * 
   * 
``1)
  function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});



2)
function dropElements(arr, func) {
  // drop them elements.
  let originalLen = arr.length;
  for (let i = 0; i < originalLen; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});



   */
