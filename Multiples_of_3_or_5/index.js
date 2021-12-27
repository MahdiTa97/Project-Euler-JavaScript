// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function calc(number_input) {
  let result = 0;
  for (let i = 0; i < number_input.length; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }
  return result;
}
