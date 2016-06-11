var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstInd = 0;
  this.lastInd = 0;

};

Queue.prototype.enqueue = function(val) {
  this.storage[this.lastInd] = val;
  this.lastInd++;
};

Queue.prototype.dequeue = function() {
  if (!this.size()) {
    return 0;
  } 
  var removedItem = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;
  return removedItem;
};

Queue.prototype.size = function() {
  return this.lastInd - this.firstInd;
};

////////////////////////////////////////////////////////////////////

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


//Advanced - Breadth First Log

BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  var queue = new Queue;
  queue.enqueue(this);

  while (queue.size() > 0) {
    var nextItem = queue.dequeue();
    cb(nextItem.value);
    if (nextItem.left !== null) {
      queue.enqueue(nextItem.left); 
    }
    if (nextItem.right !== null) {
      queue.enqueue(nextItem.right);
    }
  } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
