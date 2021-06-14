/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
19. Remove Nth Node From End of List
Follow up: Could you do this in one pass?
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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {
    let a = head;
    let b = head;
    for(let i=0; i<n; i++){
        b = b.next;
    }
    if(b === null){
        return a.next;
    }
    while(b.next){
        a = a.next;
        b = b.next;
    }
    a.next = a.next.next;
    return head;
};

removeNthFromEnd