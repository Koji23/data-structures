var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var _length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[_length] = value;
    _length++;
    
  };

  someInstance.pop = function() {
    if (_length) {
      var toRemove = storage[_length - 1];
      delete storage[_length - 1];
      _length--;
      return toRemove;
    } else {
      return 0;
    }
  };

  someInstance.size = function() {
    return _length;
  };

  return someInstance;
};
