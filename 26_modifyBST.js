// Modify a binary tree to get pre-order traversal using right pointer only

// Given a Binary Tree. Modify it in such a way that after modification you have a pre order traversal of it using only the right pointers. During modification, you can use right as well as left pointers.

// Examples:

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // Insert 
    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
        }
    }

    modifyTree() {

        // BASE CASE
        if (!this.root) return;

        let current = this.root
        // Create empty stack and push root
        let stack = [];
        stack.push(current);

        /* 
           Pop all items one by one.
           Do following for every popped item
           a) print it
           b) push its right child
           c) push its left child
           Note that right child is pushed first so that left is processed first 
       */
        let pre = null;
        while (stack.length > 0) {
            let node = stack[stack.length - 1];
            stack.pop();

            // Push right and lef children of the popped node to stack
            if (node.right !== null) {
                stack.push(node.right);
            }
            if (node.left !== null) {
                stack.push(node.left);
            }

            // Check if previou Node exists
            if (pre != null) {
                pre.right = node;
            }

            pre = node;
        }

        let root = this.root;
        while (root != null) {
            console.log(root.val + " ");
            root = root.right;
        }
    }

}

let bst = new BST();

bst.insert(10)
bst.root.left = new Node(8)
bst.root.right = new Node(2)

bst.root.left.left = new Node(3)
bst.root.left.right = new Node(5)


console.log(bst.modifyTree())
// console.log(bst.root)