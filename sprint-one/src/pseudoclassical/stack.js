var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;  
};

Stack.prototype.pop = function() {
  if (!this.length) {
    return 0;
  }
  this.length--;
  var toPop = this.storage[this.length];
  delete this.storage[this.length];
  return toPop;
};

Stack.prototype.size = function() {
  
};


