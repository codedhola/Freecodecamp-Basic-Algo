/*
             QUESTION 
  Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
 
 */


//  First hack
/*
            function factorialize(num) {
                let perm = 1;
                for(let i = 1;i < num + 1;i++){
                perm *= i;
                }
                return perm;
            }
            
            console.log(factorialize(5));
*/


// INVERSE: SECOND HACK
/*
            function factorialize(num) {
                let perm = 1;
                for(let i = num;i > 1;i--){
                perm *= i;
                }
                return perm;
            }
            
            console.log(factorialize(5));
*/

// SOLVED USING RECURSION 

function factorialize(num) {
    if(num > 1){
  
    return factorialize(num - 1) * num;
    }else {
      return num = 1;
    }
  }
  console.log(factorialize(5));


