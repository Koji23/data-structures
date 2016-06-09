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
  
};

Stack.prototype.size = function() {
  
};


