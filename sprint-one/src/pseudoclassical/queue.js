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

};

Queue.prototype.size = function() {
  return this.lastInd - this.firstInd;
};



