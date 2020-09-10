function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let reverseBetween = function (head, m, n) {

};


function LinkedList(head) {
    this.head = (head === undefined ? null : head);
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);


