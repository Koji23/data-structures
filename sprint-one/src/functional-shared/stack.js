var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

stackMethods.pop = function() {
  if (!this.length) {
    return 0;
  }
  this.length--;  
  var toReturn = this.storage[this.length];
  delete this.storage[this.length];
  return toReturn;
};

stackMethods.size = function() {
  return this.length;
};

