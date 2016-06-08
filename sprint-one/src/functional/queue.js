var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var _length = 0;
  var _nextKey = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //create property on storage using next key
    //increment length
    //increment next key
    storage[_nextKey] = value;
    _length++;
    _nextKey++;
  };

  someInstance.dequeue = function() {
    //check if length isn't 0
      //create var toDequeueu
      //delete storage property at (nextKey - length)
      //decrement length
      //return toDequeueueu
    //else return 0
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
  };

  return someInstance;
};
