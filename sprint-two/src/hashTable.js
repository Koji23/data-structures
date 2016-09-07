

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || []; // handle tuplecontainer doesn't exist
  var updated = false;
  console.log(bucket, k, v);
  for (var i = 0; i < bucket.length; i++) {
    // debugger;
    if (bucket[i][0] === k) {
      bucket[i][1] = v; // handle tuple will update
      console.log(bucket[i]);
      updated = true;
    }
    // debugger;
  }
  if (!updated) {
    bucket.push([k, v]); // handle new tuple
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++ ) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

