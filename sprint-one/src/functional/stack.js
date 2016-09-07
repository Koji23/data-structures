var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.tail = 0;

  someInstance.push = function(value) {
    someInstance.storage[someInstance.tail] = value;
    someInstance.tail++;
    return someInstance.storage;
  };

  someInstance.pop = function() {
    if (someInstance.tail > 0) {
      var temp = someInstance.storage[someInstance.tail - 1];
      delete someInstance.storage[someInstance.tail - 1];
      someInstance.tail--;
      return temp;
    }
  };

  someInstance.size = function() {
    return someInstance.tail > 0 ? someInstance.tail : 0;
  };

  return someInstance;
};
