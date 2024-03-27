/**
 * 128. Longest Consecutive Sequence
Solved
Medium
Topics
Companies
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
      return 0
  }

  nums.sort((a, b) => a - b)
  let count = 1
  let maximum = 0
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
          if (nums[i] === nums[i - 1] + 1) {
              count++;
          } else {
              maximum = Math.max(count, maximum)
              count = 1
          }
      }
  }
  return Math.max(count, maximum)
};

// another solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
      return 0
  }
  var uniqueNumbers = new Set(nums)
  var result = 1
  for (let value of uniqueNumbers.values()) {
      if (uniqueNumbers.has(value + 1) && !uniqueNumbers.has(value - 1)) {
          let currentCount = 1
          while (uniqueNumbers.has(value + currentCount)) {
              currentCount++
          }
          result = Math.max(result, currentCount)
      }

  }
  return result
};