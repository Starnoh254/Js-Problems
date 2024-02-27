// function to check if a word is a palindrome or not
function isPalindrome(word) {
  word = word.toLowerCase();
  reverseWord = word.split("").reverse().join("");
  return word === reverseWord;
}

console.log(isPalindrome("ANa"));

// write a function to find the sum of all values of an array
function sumOfValues(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumOfValues([1, 2, 3, 4, 5]));


