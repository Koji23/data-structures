var Stack = function() {
  var someInstance = {};
  var storage = {};
  var tail = 0;

  someInstance.push = function(value) {
    storage[tail] = value;
    tail++;
    return storage;
  };

  someInstance.pop = function() {
    if (tail > 0) {
      var temp = storage[tail - 1];
      delete storage[tail - 1];
      tail--;
      return temp;
    }
  };

  someInstance.size = function() {
    return tail >= 0 ? tail : 0;
  };

  return someInstance;
};
