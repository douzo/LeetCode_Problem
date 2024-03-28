/**
 * 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var freqMap = new Map()
  for (let eachNum of nums) {
      freqMap.set(eachNum, (freqMap.get(eachNum) || 0) + 1)
  }

  var freqBucket = new Array()
  for (let [key, value] of freqMap) {
      freqBucket[value] = freqBucket[value] ? freqBucket[value].add(key) : new Set().add(key)
  }

  var result = []
  for (let i = freqBucket.length - 1; i >= 0; i--) {
      if (freqBucket[i]) {
          result.push(...freqBucket[i])
      }
      if (result.length === k) {
          break;
      }
  }
  return result
};