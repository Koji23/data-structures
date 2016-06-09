var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me - contains array of child nodes
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {  // append a node to current children array
  //create a new tree with value: value
  //push new tree to this' children array
  var newLeaf = Tree(value);
  this.children.push(newLeaf);  
};

treeMethods.contains = function(target) { // inspect all nodes at and below calling node to determine if tree contains target
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
