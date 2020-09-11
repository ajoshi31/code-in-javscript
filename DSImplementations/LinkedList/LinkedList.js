let ListNode = require('./ListNode.js');

function LinkedList(head) {
    this.head = (head === undefined ? null : head);
}

LinkedList.prototype.addNode = function addNode(elem) {
    let node = new ListNode(elem);
    let curr;
    if (!this.head) {
        this.head = node;
    } else {
        curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }
}

module.exports = LinkedList;
