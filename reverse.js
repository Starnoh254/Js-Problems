// write a function that takes a string as input and returns the string reversed
function reverseString(string){
    string = string.split('')
    let i = 0;
    let letter = ''
    while (i <= string.length + 1){
        letter += string.pop()
        i++
    }
    return letter
}

console.log(reverseString('Ana'))