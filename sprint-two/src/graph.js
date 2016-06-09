

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  this.forEachNode(function(nodeKey) {
    if (nodeKey === node) {
      result = true;
    }
  });
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if graph contains node
    //forEach edge on node, find node to which it points and remove reference to node from that point
    //remove node
  if (this.contains(node)) {
    _.each(this.storage[node], function(edge, key) {
      delete edge[node];
    });
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this.storage[fromNode], function(edge, edgeKey) {
    if (+edgeKey === toNode) {
      result = true;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode][toNode] = this.storage[toNode];
  this.storage[toNode][fromNode] = this.storage[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.storage, function(val, key) {
    cb(+key); //only passes for number valued nodes
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


