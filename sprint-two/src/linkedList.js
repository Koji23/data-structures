var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //use Node to add a tail
    //if tail is not null, set tail.next to new node
    //if head === null set head to new instance of Node
    //change list.tail to new Node instance
    var newNode = Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    //check if Head exits
      //check if Head.next exists
        //Change Head to Head.next
      //else Head.next = null and Head.tail = null
    if (this.head) {
      var severedHead = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
    }
    return severedHead.value;
  };

  list.contains = function(target) {
    for (var currentNode = this.head; currentNode !== this.tail; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    return currentNode.value === target;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
