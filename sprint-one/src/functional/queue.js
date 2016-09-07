var Queue = function() {
  var someInstance = {};
  var storage = {};
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
