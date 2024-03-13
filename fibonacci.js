function fibonacci(n) {
  let start = [0, 1];
  if (n < 2) return start.slice(0, n);
  for (let i = 2; i < n; i++) {
    start[i] = start[i - 1] + start[i - 2];
  }
  return start;
}

console.log(fibonacci(2))
