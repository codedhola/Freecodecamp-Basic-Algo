// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
// BAD CODE ... too many copies 

function frankenSplice(arr1, arr2, n) {
    const test = [...arr1];
    const test2 = [...arr2]
    test2.splice(n,0, ...test)
    console.log(test2);
    return test2; 
  }
  const logger = frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
// INTERESTING METHOD FROM FREECODECAMP
// function frankenSplice(arr1, arr2, n) {
  //   // It's alive. It's alive!
  //   let localArray = arr2.slice();
  //   for (let i = 0; i < arr1.length; i++) {
  //     localArray.splice(n, 0, arr1[i]);
  //     n++;
  //   }
  //   return localArray;
  // }
  
  
  // // 
  // function frankenSplice(arr1, arr2, n) {
  //   // It's alive. It's alive!
  //   let localArr = arr2.slice();
  //   localArr.splice(n, 0, ...arr1);
  //   return localArr;
  // }
  
  