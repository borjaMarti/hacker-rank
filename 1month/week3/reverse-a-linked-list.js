// Reverse a linked list

// Given the pointer to the head node of a linked list, change the next pointers
// of the nodes so that their order is reversed. The head pointer given may be
// null meaning that the initial list is empty.

function reverse(llist) {
  let currentNode = llist;
  let reverseLlist = null;

  while (currentNode) {
    reverseLlist = {
      data: currentNode.data,
      next: reverseLlist,
    };

    currentNode = currentNode.next;
  }

  return reverseLlist;
}
