/*
          
                             QUESTION

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

*/

function convertCtoF(celsius) {
  if (typeof celsius === "number") {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  } else {
    return "Invalid Input provided";
  }
}

module.exports = convertCtoF;
