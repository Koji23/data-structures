var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode; // if list.tail doesn't exist then list.head doesn't either
    }
    list.tail = newNode;
  }; 
  // O(1)

  list.removeHead = function() {
    if (list.head) {
      var temp = list.head;
      list.head = list.head.next;
      return temp.value;
    }
  }; 
  // O(1)

  list.contains = function(target) {
    var current = list.head;
    while (current.next) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return current.value === target;
  };

  return list;
}; 
// O(n) 

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


