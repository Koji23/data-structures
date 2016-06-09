var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.lastInd = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.lastInd] = val;
    this.lastInd++;
  },
  pop: function() {

  },
  size: function() {
    return this.lastInd;
  }
};


