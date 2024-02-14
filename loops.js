function printOddNumbers(limit) {
  let count = 0;
  let arrayOfOddNumbers = [];
  if (limit > 0) {
    while (count <= limit) {
      count % 2 === 1 ? arrayOfOddNumbers.push(count) : null;
      count++;
    }
    return arrayOfOddNumbers;
  } else {
    return "Input must be a positive integer";
  }
}

console.log(printOddNumbers(5));

module.exports = printOddNumbers;
