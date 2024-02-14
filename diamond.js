// let asterikNumber = 0
// let spaceNumber = 0
// for (i = 4 ; i != -4 ; i --){
//     asterikNumber = 1
//     spaceNumber = 3
//     if (i > 0){
//         console.log(spaceNumber * (' ')  + asterikNumber * '*')
//         asterikNumber += 2
//         spaceNumber --
//     }
//     else{
//         console.log(spaceNumber  * (' ') + asterikNumber * ('*'))
//         asterikNumber -= 2
//         spaceNumber ++
//     }
// }
const args = process.argv;
let numberOfSides = parseInt(args[2])

let asterikNumber = numberOfSides - (numberOfSides - 1);
let spaceNumber = numberOfSides - 1;

for (let i = numberOfSides - 1; i >= -(numberOfSides - 1); i--) {
  const spaces = ' '.repeat(Math.abs(spaceNumber));
  const asterisks = '*'.repeat(asterikNumber);
  console.log(spaces + asterisks);
  
  if (i > 0) {
    asterikNumber += 2;
    spaceNumber -= 1;
  }
   else {
    asterikNumber -= 2;
    spaceNumber += 1;
  }
}
