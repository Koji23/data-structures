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
  //recurse through:
   //base:
  if (this.value === target) {
    return true;
  } else {
    for (var childInd = 0, length = this.children.length; childInd < length; childInd++) {
      if (this.children[childInd].contains(target)) {
        return true;
      }
    }
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
