var Queue = function() {
  var instance = {
    length: 0,
    nextKey: 0
  };

  _.extend(instance, queueMethods);

  return instance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  //holds queue methods obviously:

  enqueue: function(value) {
    this[this.nextKey] = value;
    this.length++;
    this.nextKey++;
  },

  dequeue: function() {
    if (this.length) {
      var toDequeue = this[this.nextKey - this.length];
      delete this[this.nextKey - this.length];
      this.length--;
      return toDequeue;
    } else {
      return 0;
    }
  },
  size: function() {
    return this.length;
  }
};
