var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var _length = 0;
  var _nextKey = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[_nextKey] = value;
    _length++;
    _nextKey++;
  };

  someInstance.dequeue = function() {
    if (_length) {
      var toDequeue = storage[_nextKey - _length];
      delete storage[_nextKey - _length];
      _length--;
      return toDequeue;
    } else {
      return 0;
    }
  };

  someInstance.size = function() {
    return _length;
  };

  return someInstance;
};
