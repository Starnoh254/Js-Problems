const { sum, removeDuplicateValues } = require("./reduce.js");
const arrayOfOddNumbers = require("./loops.js");

const ages = [1, 1, 2, 2, 4, 5, 6, 4, 4, 5, 8, 9];
test("removes duplicate values in an array", () => {
  expect(removeDuplicateValues(ages)).toStrictEqual([1, 2, 4, 5, 6, 8, 9]);
});

test("add 1 + 2 to equal 3 ", () => {
  expect(sum(1, 2)).toBe(3);
});

test("get the odd numbers for a certain range", () => {
  expect(arrayOfOddNumbers(8)).toStrictEqual([1, 3, 5, 7]);
});
