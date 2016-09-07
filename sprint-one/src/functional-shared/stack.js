var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.tail = 0;
  return someInstance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.tail] = val;
    this.tail++;
    return this.storage;
  },
  pop: function() {
    if (this.tail > 0) {
      var temp = this.storage[this.tail - 1];
      delete this.storage[this.tail - 1];
      this.tail--;
      return temp;
    }
  },
  size: function() { 
    return this.tail >= 0 ? this.tail : 0;
  }
};


