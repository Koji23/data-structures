
// regular BST
var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
  // return undefined if value is same as current BST's value
};
// O(log(n))

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (target > this.value) {
      if (this.right && this.right.contains(target)) {
        return true;
      }
    } else if (target < this.value) {
      if (this.left && this.left.contains(target)) {
        return true;
      }
    }
  }
  return false;
};
// O(log(n))


BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};
// O(log(n))
