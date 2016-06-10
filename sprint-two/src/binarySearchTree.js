var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBST = new BinarySearchTree(value);
  if (value < this.value) {
    this.left = newBST;
  } else {
    this.right = newBST;
  }
};

BinarySearchTree.prototype.contains = function(target) {

};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
