

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this._size >= this._limit * 0.75) {
    // handle a resize if tuple count is over 75% of storage length
    var oldStorage = this._storage;
    var context = this; // 'this' cannot be accessed inside of the limitedArray's each meethod
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this._size = 0;
    // now rehash all existing tuples
    oldStorage.each(function(bucket) {
      bucket = bucket || [];
      for (var i = 0; i < bucket.length; i++) {
        context.insert(bucket[i][0], bucket[i][1]);
      }
    });
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || []; // handle tuplecontainer doesn't exist
  var updated = null;
  for (var i = 0; i < bucket.length; i++) {
    // debugger;
    if (bucket[i][0] === k) {
      updated = bucket[i][1];
      bucket[i][1] = v; // handle tuple will update
    }
    // debugger;
  }
  if (updated === null) {
    bucket.push([k, v]); // handle new tuple
    this._size++;
  } else {
    return updated;
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++ ) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  // now rehash all existing tuples
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this._size--;
    }
  }
  if (this._size < this._limit * 0.25) {  // note: '<' not '<=' in order to pass tests
    // handle resize for tuple count under 25% of storage length (to save space)
    var context = this;
    var oldStorage = this._storage;
    this._limit /= 2;
    this._storage = LimitedArray(this._limit);
    this._size = 0;
    oldStorage.each(function(bucket) {
      bucket = bucket || [];
      for (var i = 0; i < bucket.length; i++) {
        context.insert(bucket[i][0], bucket[i][1]);
      }
    });

  }
};

