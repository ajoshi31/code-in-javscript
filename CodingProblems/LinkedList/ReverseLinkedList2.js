/*
 Reverse a linked list from position m to n. Do it in one-pass.
 Note: 1 ≤ m ≤ n ≤ length of list.
 Example:
 Input: 1->2->3->4->5->NULL, m = 2, n = 4
 Output: 1->4->3->2->5->NULL
 */

let LinkedList = require('./../../DSImplementations/LinkedList/LinkedList.js');
let ListNode = require('./../../DSImplementations/LinkedList/ListNode.js');

let list = new LinkedList();

list.addNode(1);
list.addNode(2);
list.addNode(3);


let reverseBetween = function (head, m , n) {
    if (!head) return null;

    let x = 1;
    let current = head;
    let tail = null;
    while(x < m  && current!= null){
        tail = current;
        current = current.next;
        x++;
    }
    // Now current reached the 1->2->3(current)
    // We will keep the tail.next saved and change the current in reverse order later will add this tail.next tp the
    // tail of the reversed string that os previous of the reversed list

    let previous = null;

    let headOfTheReverseList = current; // saving the starting position of the part ot be reversed
    while ( x <= n && current!= null ){
        let temp = current.next;
        current.next = previous;
        previous  = current;
        current = temp;
        x++
    }

    // now the list is reversed with previous as its sntry point and headOfTheReverseList as its tail

    // GLUE the tail of first to the head of middle and tail of middle to the head of remianing
    // Adding the remaining element left from present to headOfTheReverseList

    headOfTheReverseList.next = current;
    if (tail == null) return previous; // if the tail is null then the mid reverse is starting point
    tail.next = previous;
    return head;
};

let a = reverseBetween(list.head, 1,2);

while(a != null){
    console.log(a.val);
    a = a.next;
}
