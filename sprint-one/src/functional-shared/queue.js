var Queue = function() {
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  return someInstance;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.tail] = val;
    this.tail++;
    return this.storage;
  },
  dequeue: function() {
    if (this.tail !== this.head) {
      var temp = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return temp;
    }
  },
  size: function() {
    var diff = this.tail - this.head;
    return diff >= 0 ? diff : 0;
  }
};


