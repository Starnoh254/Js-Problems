// function to filter out odd numbers
function isEven(num) {
  return num % 2 === 0;
}

function filterOddNumbers(arr) {
  return arr.filter(isEven);
}

// test the code with a sample array
const sampleArr = [1, 3, 5, 7, 9, 10, 20, 68, 54, 92];
console.log("Original Array:", sampleArr);
console.log(
  "Array after filtering out odd numbers:",
  filterOddNumbers(sampleArr)
);
