var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var tail = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    tail++;
    storage[tail] = value;
    return storage;
  };

  someInstance.pop = function() {
    if (tail > 0) {
      var temp = storage[tail];
      delete storage[tail];
      tail--;
      return temp;
    }
  };

  someInstance.size = function() {
    return tail >= 0 ? tail : 0;
  };

  return someInstance;
};
