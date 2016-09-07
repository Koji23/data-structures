var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};
//
setPrototype.contains = function(item) {
  return this._storage[item] === item;
};
//
setPrototype.remove = function(item) {
  var temp = this._storage[item];
  delete this._storage[item];
  return temp;
};
//
