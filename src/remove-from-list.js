const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
/*
function removeKFromList(l, k) {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    if (k !== l[i]) {
      res.push(l[i]);
    }
  }
  return res;
} */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // Handle the case where the list is empty
  if (!l) {
    return null;
  }

  // Create a dummy node to simplify edge cases
  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;

  // Traverse the list and remove nodes with value equal to k
  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

module.exports = {
  removeKFromList,
};
