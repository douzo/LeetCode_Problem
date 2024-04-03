/**
 * 19. Remove Nth Node From End of List
Solved
Medium
Topics
Companies
Hint
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = findLength(head)
  let i=0

  let traverseTill = length-n-1
if (traverseTill===-1) return head.next
  let curr = head

  while(i<traverseTill) {
      curr=curr.next
      i++
  }

  curr.next = curr.next.next

  return head
};

var findLength = function(head) {
  let count = 0
  if (head===null) return count
  let curr = head
  while (curr!==null) {
      count++
      curr=curr.next
  }
  return count
}