var Queue = function() {

  return {
    enqueue: queueMethods.enqueue,
    dequeue: queueMethods.dequeue,
    size: queueMethods.size,
    length: 0,
    nextKey: 0
  };

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {
  //holds queue methods obviously:

  enqueue: function(value) {
    this[this.length] = value;
    this.length++;
    this.nextKey++;
  },

  dequeue: function() {
    
  },
  size: function() {
    return this.length;
  }
};
