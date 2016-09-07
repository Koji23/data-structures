var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

// Queue.prototype.constructor = Queue;
Queue.prototype.enqueue = function(val) {
  this.storage[this.tail] = val;
  this.tail++;
  return this.storage;
};
Queue.prototype.dequeue = function() {
  if (this.head !== this.tail) {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return temp;
  } 
};
Queue.prototype.size = function() {
  var diff = this.tail - this.head;
  return diff > 0 ? diff : 0;
};


