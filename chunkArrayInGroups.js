// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

function chunkArrayInGroups(arr, size) {
    let arrr = arr.length;
    const sup = [];
    for(let i = 0;i < (arrr / size);i++){
    const split = arr.splice(0, size);
    sup.push(split);
    }
    return sup
  }
  chunkArrayInGroups(["a", "b", "c", "d", "b", "c", "d", "h"], 2); 
   
  
  //  function chunkArrayInGroups(arr, size) {
  //   let temp = [];
  //   let result = [];
  
  //   for (let a = 0; a < arr.length; a++) {
  //     if (a % size !== size - 1) temp.push(arr[a]);
  //     else {
  //       temp.push(arr[a]);
  //       result.push(temp);
  //       temp = [];
  //     }
  //   }
  
  //   if (temp.length !== 0) result.push(temp);
  //   return result;
  // }
  
  
  
  // function chunkArrayInGroups(arr, size) {
  //   // Break it up.
  //   let newArr = [];
  //   for (let i = 0; i < arr.length; i += size) {
  //     newArr.push(arr.slice(i, i + size));
  //   }
  //   return newArr;
  // }
  
  
  // function chunkArrayInGroups(arr, size) {
  //   // Break it up.
  //   let newArr = [];
  //   let i = 0;
  
  //   while (i < arr.length) {
  //     newArr.push(arr.slice(i, i + size));
  //     i += size;
  //   }
  //   return newArr;
  // }
  // chunkArrayInGroups(["a", "b", "c", "d"], 2);