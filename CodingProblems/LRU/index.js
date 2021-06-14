class Node {
    constructor(key, value, next = null, prev = null) {
        this.key = key;
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LRU {

    constructor(limit = 10) {
        this.size = 0;
        this.limit = limit;
        this.head = null;
        this.tail = null;
        this.cache = {}
    }

    put(key, value) {
        this.sizeCheck();
        if (!this.head) {
            this.head = this.tail = new Node(key, value);
        } else {
            const node = new Node(key, value, this.head);
            this.head.prev = node;
            this.head = node;
        }

        //Update the cache map
        this.cache[key] = this.head;
        this.size++;
    }

    get(key) {
        if (this.cache[key]) {
            const value = this.cache[key].value;
            this.delete(key);
            this.put(key, value);
            return value;
        }
        console.log(`Item not available in cache for key ${key}`);
    }

    sizeCheck() {
        if (this.size === this.limit) {
            this.delete(this.tail.key);
        }
    }

    // Delete has to be last element
    delete(key) {
        const node = this.cache[key];

        // Checking the head consition
        if (node.prev !== null) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        // Checking the tail consition
        if (node.next !== null) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }

        delete this.cache[key];
        this.size--;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.cache = {};
    }

}

let lruCache = new LRU(3);
lruCache.put('a', 123);
lruCache.put('b', 456);
lruCache.put('c', 789);
lruCache.get('a')
lruCache.put('d', 0132)
let val = lruCache.cache;
// console.log(val)
lruCache.get('b')