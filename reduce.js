const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.reduce((total, value, index, array) => {
  console.log(total);
  console.log(`current index ${index}`);
  return total + value;
}, 0);

const product = numbers.reduce((total, value) => {
  return total * value;
}, 1);

console.log("Product " + product);
console.log("Addition " + result);

// grouping an array of objects by their property

const people = [
  { name: "Starnoh John", age: 28 },
  { name: "Starnoh James", age: 28 },
  { name: "Reagan James", age: 25 },
  { name: "Agwambo John", age: 26 },
  { name: "Richard John", age: 27 },
  { name: "Richard Johnte", age: 28 },
  { name: "Richardo John", age: 25 },
  { name: "Richard Johnny", age: 25 },
  { name: "Richard John", age: 26 },
  { name: "Richarde Mily", age: 26 },
  { name: "Ochicghi John", age: 22 },
  { name: "Ochichhi g", age: 21 },
  { name: "Ochichjhi Jgohn", age: 20 },
  { name: "Ochicghi Jogshn", age: 24 },
  { name: "Ochichi Johsn", age: 22 },
  { name: "Ochicghi Jonhn", age: 29 },
  { name: "Ochikhchi Jogshn", age: 22 },
  { name: "Ochicrrhi Johgn", age: 21 },
  { name: "Ochicikhi Jogghn", age: 20 },
  { name: "Ochiffchi Joujhn", age: 25 },
  { name: "Ochichhi Johjn", age: 26 },
  { name: "Ochichmi Johhhn", age: 23 },
  { name: "Ochichhi Johhn", age: 26 },
  { name: "Ochicffhi Jnnohn", age: 21 },
  { name: "Ochichgi John", age: 24 },
  { name: "Ochichri Jonnnhn", age: 26 },
  { name: "Ochichie Jsohn", age: 27 },
  { name: "Ochichie Johshn", age: 27 },
  { name: "Ochichyi Johhn", age: 23 },
  { name: "Ochichig Johhn", age: 20 },
  { name: "Ochichit Johhn", age: 20 },
  { name: "Ochichid Johhhn", age: 19 },
  { name: "Ochichis Johhn", age: 17 },
];

const groupedPeople = people.reduce((ageGroup, person) => {
  const key = person.age;
  if (!ageGroup[key]) {
    ageGroup[key] = [];
  }
  ageGroup[key].push(person);
  return ageGroup;
}, {});
console.log(groupedPeople);

const ages = [1, 1, 2, 2, 4, 5, 6, 4, 4, 5, 8, 9];
function removeDuplicateValues(arr) {
  const cleanAges = arr.reduce((newArray, age) => {
    if (!newArray.includes(age)) {
      newArray.push(age);
    }
    return newArray;
  }, []);

  return cleanAges;
}

console.log(removeDuplicateValues(ages));

function sum(a, b) {
    return a + b;
}

module.exports = {removeDuplicateValues , sum}
