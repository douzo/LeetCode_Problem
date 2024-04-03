/**
 * 509. Fibonacci Number
 * 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
 */

/**
 * Recursion & memoization
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  var memo = {}

  var helper = (x) => {
      if(memo[x]) return memo[x]
      if (x == 0 || x==1) return x
      return memo[x]=helper(x-1) + helper(x-2)
  }

  return helper(n)
};

/**
 * DP
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

  var fibArray = new Array(n).fill(-1)

  fibArray[0]=0
  fibArray[1]=1

  for(i=2;i<=n;i++) {
      fibArray[i]=fibArray[i-1]+fibArray[i-2]
  }
  return fibArray[n]
  
};