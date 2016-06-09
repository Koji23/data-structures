var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.length = 0;
  instance.firstInd = 0;
  instance.lastInd = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(val) {
  //last index moves
};

queueMethods.dequeue = function() {
  //first index moves
};

queueMethods.size = function() {
  return this.lastInd - this.firstInd;
};


