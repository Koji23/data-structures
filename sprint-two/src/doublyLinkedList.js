var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;

};

DoublyLinkedList.prototype.addToHead = function(value) {
  //create a new node called 'node'
  var node = new Node(value);  
  //if DLL's head does not exist
  if (this.head === null) {
    //set head and tail to new 'node'
    this.head = node;
    this.tail = node;
  } else {
  //if DLL's head does exist
    //change current head's prev from null to new 'node'
    this.head.prev = node;
    //change new node's next to current head
    node.next = this.head;
    //set new 'node' to head
    this.head = node;
  }
};

DoublyLinkedList.prototype.removeTail = function() {
  //check if a tail exists
  if (this.tail) {
    //create variable to capture existing tail
    var severedTail = this.tail;
    //check if tail is same as head
    if (this.tail === this.head) {
      //if it is, set both head and tail to null
      this.tail = null;
      this.head = null;
    } else {
    //otherwise:
      //change tail to current tail's prev node
      this.tail = this.tail.prev;
      //change new tail's next to null
      this.tail.next = null;
    }
    return severedTail;
  }
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};

// var newDLL = new DoublyLinkedList;
// newDLL.addToHead('7');
// newDLL.addToHead('6');
// newDLL.addToHead('hi');
// newDLL.addToHead('dog');
// newDLL.addToHead('32');
// console.log(newDLL);
// newDLL.removeTail();
// newDLL.removeTail();
// newDLL.removeTail();
// console.log(newDLL);
// newDLL.removeTail();
// console.log(newDLL);

