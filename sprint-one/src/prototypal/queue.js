var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.firstInd = 0;
  instance.lastInd = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(val) {
  //last index moves
  this.storage[this.lastInd] = val;
  this.lastInd++;

};

queueMethods.dequeue = function() {
  //first index moves
  if (!this.size()) {
    return 0;
  }

  var toDequeue = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;

  return toDequeue;
};

queueMethods.size = function() {
  return this.lastInd - this.firstInd;
};


