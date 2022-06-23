class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  //INSERT
  insert(data) {
    var rootNode = new node(data);
    if (this.root == null) {
      this.root = rootNode;
    } else {
      this.pushNode(this.root, rootNode);
    }
  }
  pushNode(node, newNode) {
    if (newNode.data < node) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.pushNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.pushNode(node.right, newNode);
      }
    }
  }
  getRoot() {
    return this.root;
  }
  preorder(root) {
    if (root == null) {
      return;
    }
    console.log(root.data);
    this.preorder(root.left);
    this.preorder(root.right);
  }
  //SEARCH
  search(r, el) {
    if (r === null) {
      return null;
    }
    if (this.root == el) {
      return this.root;
    }
    if (el < this.root) {
      this.search(r.left, el);
    }
    if (el > this.root) {
      this.search(r.right, el);
    }
  }
}

const B = new BST();
B.insert(1);
B.insert(2);
B.insert(3);
B.insert(5);
B.insert(7);
var myRoot = B.getRoot();
console.log(myRoot);
B.preorder(myRoot);
var res = B.search(myRoot, 5);
if (res === null) console.log("Not found");
else console.log("node found in tree");
