/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;  // Store next node
        curr.next = prev;      // Reverse the link
        prev = curr;           // Move prev forward
        curr = next;           // Move curr forward
    }

    return prev; // New head of reversed list
}
}
