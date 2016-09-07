var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.head = 0;
  someInstance.tail = 0;

  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
    return storage;
  };

  someInstance.dequeue = function() {
    if (head !== tail) {
      var temp = storage[head];
      delete storage[head];
      head++;
      return temp;
    }
  };

  someInstance.size = function() {
    return tail - head >= 0 ? (tail - head) : 0;
  };

  return someInstance;
};
