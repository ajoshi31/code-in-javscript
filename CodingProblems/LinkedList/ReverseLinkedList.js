let LinkedList1 = require('./../../DSImplementations/LinkedList/LinkedList.js');
let list = new LinkedList1();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);
list.addNode(9);

let reverse = function (head) {
    let previous = null;
    let curr = head;
    while ( curr != null){
        let temp = curr.next;
        curr.next = previous;
        previous  = curr;
        curr = temp;
    }
    return previous
};

let a = reverse(list.head);

while(a != null){
    console.log(a.val);
    a = a.next;
}
