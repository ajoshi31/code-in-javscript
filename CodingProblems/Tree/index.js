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

    idDuplicateTree(tree1, tree2) {
        if (tree1 === null && tree2 === null) {
            return true;
        } else {
            return (tree1.val === tree2.val)
                && this.idDuplicateTree(tree1.left, tree2.left)
                && this.idDuplicateTree(tree1.right, tree2.right)
        }
    }

    convertToSum(node) {

        let left = 0, right = 0;
        if (node === null) {
            return 0;
        }

        left = this.convertToSum(node.left);

        right = this.convertToSum(node.right);

        // console.log(node.val);
        let old = node.val;
 
        node.val = left + right;
 
        // return the updated value plus old value (sum of tree rooted at root node)
        return node.val + old;
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

let tree2 = new Tree();

tree2.insert(10);
tree2.insert(-2);
tree2.insert(6);
tree2.insert(8);
tree2.insert(-4);
tree2.insert(7);
tree2.insert(5);

// console.log(tree.idDuplicateTree(tree.root, tree2.root));
tree.inorder(tree.root);
console.log("\n")
let sumTree = tree.convertToSum(tree.root);

// console.log(sumTree);

tree.inorder(tree2.root);