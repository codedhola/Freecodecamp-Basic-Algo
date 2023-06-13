/**
 * 
 * 
 * 
 * Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

function sumFibs(num) {
  if (num <= 0) return 0;
  const fiboTotal = [0, 1];
  let total = 0;
  for (let j = 0; j < num; j++) {
    if (fiboTotal[j] + fiboTotal[j - 1] > num) break;
    if (fiboTotal[j] / 2 !== 0) {
      fiboTotal.push(fiboTotal[j] + fiboTotal[j - 1]);
    }
  }
  for (let i = 0; i < fiboTotal.length; i++) {
    if (fiboTotal[i] % 2 !== 0) {
      total += fiboTotal[i];
    }
  }
  return total;
}

sumFibs(1000);

module.exports = sumFibs;

/**
   * 
   * 
   * function sumFibs(num) {
        let prevNumber = 0;
        let currNumber = 1;
        let result = 0;
        while (currNumber <= num) {
            if (currNumber % 2 !== 0) {
            result += currNumber;
            }
            currNumber += prevNumber;
            prevNumber = currNumber - prevNumber;
        }

        return result;
        }

        // test here
        sumFibs(4);`
   */
