function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert(data) {
    let n = new Node(data, null, null);
    if(this.root == null) {
        this.root = n;
    }
    else {
        let current = this.root;
        let parent;
        while(true) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if(current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if(!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if(!(node == null)) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

function getMin() {
    let current = this.root;
    while(!(current.left == null)) {
        current = current.left
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while(!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}

function find(data) {
    let current = this.root;
    while(current.data != data) {
        if(data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if(current == null) {
            return null;
        }
    }
    return current;
}

let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("Inorder traversal: ");
inOrder(nums.root);

// console.log("Preorder traversal: ");
// preOrder(nums.root);

// console.log("Postorder traversal: ");
// postOrder(nums.root);

var min = nums.getMin();
console.log("The minimum value of the best BST is: " + min);

var max = nums.getMax();
console.log("The maximum value of the best BST is: " + max);

// let x = prompt("Enter a value to search for: ");
// let value = parseInt(x);
// let found = nums.find(value);

// if(found != null) {
//     console.log("Found " + value + " in the BST.");
// }
// else {
//     console.log(value + " was not found in the BST");
// }