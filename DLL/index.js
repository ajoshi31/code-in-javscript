class DLLNode {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

const head = Symbol('head');
const tail = Symbol('tail');

class DLL {
    constructor() {
        this[head] = null;
        this[tail] = null;
    }

    add(data) {
        const node = new DLLNode(data);
        if (this[head] === null) {
            this[head] = node;
        } else {
            this[tail].next = node;
            node.prev = this[tail];
        }
        this[tail] = node;
    }

    get(index) {
        if(index > -1) {
            let current = this[head];
            let i = 0;
           
            while ((i < index) && (current !== null)) {
                current = current.next;
                i++;
            }
            return current;
        } else {
            return undefined;
        }
    }

    // Remove with index
    remove(index){
        if(this[head] == null || index < 0){
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        if(index == 0){
            // head has to be shifted
            let node = this[head];
            this[head] = node.next;
            // If onely one node
            if(this[head] === null){
                this[tail] = null;
            } else {
                this[head].prev = null;
            }
            return node.data;
        } 

        let current = this[head];
        let i = 0;
        while(current !== null && i < index){
            current = current.next;
            i++;
        }

        if(current !== null){
            current.previous.next = current.next;
            if(this[tail] === current){
                this[tail] = current.prev;
            } else {
                current.next.previous = current.previous;
            }
            return current.data;
        }
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    *reverse(){
        let current = this[tail];
        while (current !== null) {
            yield current.data;
            current = current.prev;
        }
    }
}

const list = new DLL();
list.add("red");
list.add("orange");
list.add("yellow");
console.log(list.get(1));
let ch  = list.reverse();


for (const color of list.reverse()) {
    console.log(color);
}


console.log(ch.next());
console.log(ch.next());