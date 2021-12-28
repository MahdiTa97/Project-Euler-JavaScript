// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Method 1
function calc(highest_number) {
  let result = 0;
  for (let i = 0; i < highest_number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result = result + i;
    }
  }
  return result;
}

// Method 2
function calc(highest_number) {
  const number_one = Math.floor(highest_number / 3) * 3;
  const temp1 = Math.floor(highest_number / 3) * ((3 + number_one) / 2);

  const number_two = Math.floor(highest_number / 5) * 5;
  const temp2 = Math.floor(highest_number / 5) * ((5 + number_two) / 2);

  const number_three = Math.floor(highest_number / 15) * 15;
  const temp3 = Math.floor(highest_number / 15) * ((15 + number_three) / 2);

  return temp1 + temp2 - temp3;
}
