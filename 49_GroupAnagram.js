/**
 * 242. Valid Anagram
 * 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var result = []
  var anagramMatchMap = new Map()
  for (let eachWord of strs) {
      let signature = createSignatures(eachWord)
      if (!anagramMatchMap.has(signature)) {
          anagramMatchMap.set(signature, [])
      }
      anagramMatchMap.get(signature).push(eachWord)
  }
  anagramMatchMap.forEach(value => result.push(value))
  return result;
};

var createSignatures = function (str) {
  var count = Array(26).fill(0)
  for (let eachChar of str) {
      count[eachChar.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  const result = [];
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
          result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
      }
  }

  return result.join('');
}