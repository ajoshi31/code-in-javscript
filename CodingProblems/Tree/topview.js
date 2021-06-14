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

    printTop(map, horizontalShift, node ){

        if(node === null){
            return;
        }

        if(!map.hasOwnProperty(horizontalShift)){
           map[horizontalShift] = node.val;
        }
        if(node.left){
            this.printTop(map, horizontalShift - 1, node.left);
        }
        if(node.right){
            this.printTop(map, horizontalShift + 1, node.right);
        }

    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.val);
            this.inorder(node.right);
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

let map = {};
tree.printTop(map, 0, tree.root )

console.log(map)