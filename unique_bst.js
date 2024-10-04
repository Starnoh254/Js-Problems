/**
 * @param {number} n
 * @return {number}
 */
let numTrees = function (n) {
  // Create a dp array with n+1 elements
  let dp = new Array(n + 1).fill(0);

  // Base cases
  dp[0] = 1; // 1 way to arrange 0 nodes (empty tree)
  dp[1] = 1; // 1 way to arrange 1 node

  // Fill the dp array
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
};

console.log(numTrees(3))
