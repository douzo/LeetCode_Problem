/**
 * 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let characterSet = new Set()
  var left = 0
  let longLength = 0
  for (let right = 0; right < s.length; right++) {
      while (characterSet.has(s[right])) {
          characterSet.delete(s[left])
          left++
      }
      characterSet.add(s[right])
      longLength = Math.max(longLength, right - left + 1)
  }

  return longLength
};