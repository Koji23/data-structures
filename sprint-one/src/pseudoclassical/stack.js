var Stack = function() {
  this.storage = {};
  this.tail = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.tail] = val;
  this.tail++;
  return this.storage;
};

Stack.prototype.pop = function() {
  if (this.tail > 0) {
    var temp = this.storage[this.tail - 1];
    delete this.storage[this.tail - 1];
    this.tail--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.tail > 0 ? this.tail : 0;
};


