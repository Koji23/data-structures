var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.tail] = value;
    someInstance.tail++;
    return someInstance.storage;
  };

  someInstance.dequeue = function() {
    if (someInstance.head !== someInstance.tail) {
      var temp = someInstance.storage[someInstance.head];
      delete someInstance.storage[someInstance.head];
      someInstance.head++;
      return temp;
    }
  };

  someInstance.size = function() {
    var diff = someInstance.tail - someInstance.head;
    return diff >= 0 ? diff : 0;
  };

  return someInstance;
};
