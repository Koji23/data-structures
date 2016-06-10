

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    this._storage.get(index).push([k, v]);
  } else {
    var limit = this._limit;
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result;
  _.each(this._storage.get(index), function(tuple) {
    if (k === tuple[0]) {
      result = tuple[1];
    }
  });
  return result;                                                                                                        
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleCollection = this._storage.get(index);
  _.each(tupleCollection, function(tuple, i) {
    if (k === tuple[0]) {
      tupleCollection.splice(i, 1);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


