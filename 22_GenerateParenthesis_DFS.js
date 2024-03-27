/**
 * 22. Generate Parentheses
 * 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = []

  let iterate = (str, open, close) => {
      if (open > n || close > n || close > open) return
      if (str.length === n * 2 && open === close) {
          console.log(str)
          result.push(str)
          return
      }
      iterate(str+'(', open + 1, close)
      iterate(str+')', open, close + 1)
  }

  iterate('', 0, 0)
  return result
};