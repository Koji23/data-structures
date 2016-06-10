var FuncQueue = function() {
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

var FuncStack = function() {
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

var FuncAry = [];
for (var i = 0; i < 100000; i++) {
  FuncAry.push(FuncQueue());
  FuncAry.push(FuncStack());
}


//Shared:
var SharedQueue = function() {
  var instance = {
    length: 0,
    nextKey: 0
  };

  _.extend(instance, SharedqueueMethods);

  return instance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var SharedqueueMethods = {
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

var SharedStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.length = 0;

  _.extend(instance, SharedstackMethods);

  return instance;
};

var SharedstackMethods = {};

SharedstackMethods.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
};

SharedstackMethods.pop = function() {
  if (!this.length) {
    return 0;
  }
  this.length--;  
  var toReturn = this.storage[this.length];
  delete this.storage[this.length];
  return toReturn;
};

SharedstackMethods.size = function() {
  return this.length;
};

var SharedAry = [];
for (var i = 0; i < 100000; i++) {
  SharedAry.push(SharedQueue());
  SharedAry.push(SharedStack());
}

//prototypal:
var ProtoQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.firstInd = 0;
  instance.lastInd = 0;
  instance.storage = {};

  return instance;
};

var queueMethods = {};
queueMethods.enqueue = function(val) {
  //last index moves
  this.storage[this.lastInd] = val;
  this.lastInd++;

};

queueMethods.dequeue = function() {
  //first index moves
  if (!this.size()) {
    return 0;
  }

  var toDequeue = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;

  return toDequeue;
};

queueMethods.size = function() {
  return this.lastInd - this.firstInd;
};

var ProtoStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.lastInd = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {
  push: function(val) {
    this.storage[this.lastInd] = val;
    this.lastInd++;
  },
  pop: function() {
    if (!this.lastInd) {
      return 0;
    }
    this.lastInd--;
    var toPop = this.storage[this.lastInd];
    delete this.storage[this.lastInd];
    return toPop;
  },
  size: function() {
    return this.lastInd;
  }
};

var ProtoAry = [];
for (var i = 0; i < 100000; i++) {
  ProtoAry.push(ProtoQueue());
  ProtoAry.push(ProtoStack());
}

//Pseudo-Classical:
var PseudoQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.firstInd = 0;
  this.lastInd = 0;

};

PseudoQueue.prototype.enqueue = function(val) {
  this.storage[this.lastInd] = val;
  this.lastInd++;
};

PseudoQueue.prototype.dequeue = function() {
  if (!this.size()) {
    return 0;
  } 
  var removedItem = this.storage[this.firstInd];
  delete this.storage[this.firstInd];
  this.firstInd++;
  return removedItem;
};

PseudoQueue.prototype.size = function() {
  return this.lastInd - this.firstInd;
};

var PseudoStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
};

PseudoStack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;  
};

PseudoStack.prototype.pop = function() {
  if (!this.length) {
    return 0;
  }
  this.length--;
  var toPop = this.storage[this.length];
  delete this.storage[this.length];
  return toPop;
};

PseudoStack.prototype.size = function() {
  return this.length;
};

var PseudoAry = [];
for (var i = 0; i < 100000; i++) {
  PseudoAry.push(new PseudoQueue());
  PseudoAry.push(new PseudoStack());
}