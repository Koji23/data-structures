var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var head = 0;
  var tail = 0;

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
    var diff = tail - head;
    return diff >= 0 ? diff : 0;
  };

  return someInstance;
};
