/**
 * 

    Steamroller

Flatten a nested array. You must account for varying levels of nesting.


 */


function steamrollArray(arr) {
    // Recursion is the breakfast of champions. ― Don Stewart
    var steamrolled = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        var subArray = steamrollArray(arr[i]);
        steamrolled = steamrolled.concat(subArray);
      } else {
        steamrolled.push(arr[i]);
      }
    }
    return steamrolled;
  }


  /**
   * 1)
function steamrollArray(arr) {
  // I'm a steamroller, baby
    var newArr = [];

    function check(val2) {
        if (!Array.isArray(val2)) {
            return newArr.push(val2);
        } else
            return val2.map(check);
    }

    arr.map(check);
    return newArr;
}
   * 
   * 
   * 
   2) WITHOUT RECURTSION
   function steamrollArray(arr) {
  // I'm a steamroller, baby
  while(arr.findIndex(Array.isArray)>-1){
    var x=arr.shift();
    if(Array.isArray(x)){
      arr=arr.concat(x);
    }else{
      arr.push(x);
    }
    
  }
  return arr;
}
   */