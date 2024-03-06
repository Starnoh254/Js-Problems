const MAX = 100;
const MIN = 50;
let attempts = 1;

function checkNumber(guessedNumber, actualNumber) {
  if (guessedNumber > actualNumber)
    return "Your guessed number is greater than the actual number";
  else return "Your guessed number is smaller than the actual number";
}
const actualNumber = Math.floor(Math.random() * (MAX - MIN) + MIN);
let guessedNumber = 0;
do {
  guessedNumber = parseInt(prompt(`Guess a number between ${MIN} - ${MAX}`));
  console.log(guessedNumber);
  console.log(actualNumber);
  if (isNaN(guessedNumber)) {
    alert("Please enter a valid number");
  } else if (guessedNumber < MIN || guessedNumber > MAX) {
    alert(`The number should be between ${MIN} and ${MAX}. Please try again`);
  } else if (guessedNumber === actualNumber) {
    alert("Congratulations! You got it right.It took you " + attempts + " attempts");
  } else {
    attempts++
    alert(checkNumber(guessedNumber, actualNumber));
  }
} while (guessedNumber != actualNumber);
