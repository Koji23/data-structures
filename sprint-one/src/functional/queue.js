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
  };

  someInstance.size = function() {
  };

  return someInstance;
};
