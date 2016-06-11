

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._entries = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var toOverwrite = false;
  var tupleCollection = this._storage.get(index);
  var currentThis = this;
  //doubling on insertion @ 75%:
  if (this._entries === Math.floor(.75 * this._limit)) {
    this._limit *= 2;
    var _newStorage = LimitedArray(this._limit);
    this._storage.each(function(bucket) {
      if (bucket !== undefined) {
        _.each(bucket, function(tuple) {
          var newIndex = getIndexBelowMaxForKey(tuple[0], currentThis._limit);
          if (_newStorage.get(newIndex) === undefined) {
            _newStorage.set(newIndex, []);
          }
          _newStorage.get(newIndex).push(tuple);
        });
      }
    });
    this._storage = _newStorage;
  }





  //insertion
  if (tupleCollection !== undefined) {
    _.each(tupleCollection, function(tuple, tupleIndex) {
      if ([tuple][0] === k) {
        toOverwrite = tupleIndex;
      }
    });

    if (toOverwrite === false) {
      tupleCollection.push([k, v]);
      this._entries++;
    } else {
      tupleCollection[tupleIndex][1] = v;
    }
  } else {
    var limit = this._limit;
    this._storage.set(index, []);
    this._storage.get(index).push([k, v]);
    this._entries++;
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
      this._entries--;
    }
  });


  //halving on removal @ 25%
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


