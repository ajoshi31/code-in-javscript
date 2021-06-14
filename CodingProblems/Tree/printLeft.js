class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data);
        this.root = this._insertNode(this.root, newNode);
    }

    _insertNode(node, newNode) {
        if (node == null) {
            return newNode
        }
        if (node.val > newNode.val) {
            node.left = this._insertNode(node.left, newNode);
        } else {
            node.right = this._insertNode(node.right, newNode);
        }
        return node;
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.val);
            this.inorder(node.right);
        }
    }

    printLeftReucursive(map, level , node) {

        if(node === null){
            return
        }
        if(!map.hasOwnProperty(level)){
            map[level] = [];
        }
        map[level].push(node.val) 
        this.printLeftReucursive(map, level+1, node.left);
        this.printLeftReucursive(map, level+1, node.right);

    }
    printLeftItr(root) {
        if (root === null) {
            return;
        }
        let queue = [];
        queue.push(root);
        while (queue.length > 0) {
            let size = queue.length;
            let i = 0;
            while (i++ < size) {
                let node = queue.shift();
                if (i === 1) {
                    console.log(node.val);
                }
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
    }
}

let tree = new Tree();

tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(15);
tree.insert(5);
tree.insert(25);
tree.insert(35);

// tree.printLeftItr(tree.root);

let map = {}
tree.printLeftReucursive(map, 1, tree.root);

console.log(map)
