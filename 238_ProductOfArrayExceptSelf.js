/**
 * 238. Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30

 /*
* @param {number[]} nums
* @return {number[]}
*/
var productExceptSelf = function (nums) {
   var prefix = new Array(nums.length).fill(1)
   var suffix = new Array(nums.length).fill(1)
   var result = []

   for (let i = 1; i < nums.length; i++) {
       prefix[i] = prefix[i - 1] * nums[i - 1]
   }
   for (let i = nums.length - 2; i >= 0; i--) {
       suffix[i] = suffix[i + 1] * nums[i + 1]
   }
   for (let i = 0; i <= nums.length - 1; i++) {
       result[i] = prefix[i] * suffix[i]
   }
   return result

};

/**
 * Let's dry run this algorithm on a test case:

Test Case: nums = [1, 2, 3, 4]

Initialize left = [1, 1, 1, 1] and right = [1, 1, 1, 1].
Calculate left array:
left[1] = left[0] * nums[0] = 1 * 1 = 1
left[2] = left[1but ] * nums[1] = 1 * 2 = 2
left[3] = left[2] * nums[2] = 2 * 3 = 6
[1,1,2,6]
Calculate right array:
right[2] = right[3] * nums[3] = 1 * 4 = 4
right[1] = right[2] * nums[2] = 4 * 3 = 12
right[0] = right[1] * nums[1] = 12 * 2 = 24
[24,12,4,1]
Calculate result array:
result[0] = left[0] * right[0] = 1 * 24 = 24
result[1] = left[1] * right[1] = 1 * 12 = 12
result[2] = left[2] * right[2] = 2 * 4 = 8
result[3] = left[3] * right[3] = 6 * 1 = 6
[24,12,8,6]
The final result is [24, 12, 8, 6], which matches the expected output.
 */