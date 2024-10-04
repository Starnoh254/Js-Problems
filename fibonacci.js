// function fibonacci(n) {
//   let start = [0, 1];
//   if (n < 2) return start.slice(0, n);
//   for (let i = 2; i < n; i++) {
//     start[i] = start[i - 1] + start[i - 2];
//   }
//   return start;
// }

console.log(recursionFibonacci(7))

function recursionFibonacci(n){
    let start = [0,1]
    if (n < 2) return start[n]
    else {
        return  recursionFibonacci(n - 1) + recursionFibonacci(n - 2)
        
    } 
        
}
