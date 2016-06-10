var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
  instance.value = value;
  instance.left = null;
  instance.right = null;
  return instance;
};

BinarySearchTree.prototype.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (value < this.value) {
    if (!this.left) {
      this.left = newBST;      
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.value < target && this.right) {
    return this.right.contains(target) || false;
  } else if (this.value > target && this.left) {
    return this.left.contains(target) || false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  //if current BST has left call dfl on left 
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
