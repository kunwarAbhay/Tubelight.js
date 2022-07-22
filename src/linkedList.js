/**
 * create a isolated node
 * @param {Object} val
 * @returns node
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.len = 0;
    this.tail = null;
  }

  /**
   * Convert the linked list into array
   * @return {array}
   */
  toArray() {
    const arr = [];
    for (let ptr = this.head; ptr !== null; ptr = ptr.next) {
      arr.push(ptr.val);
    }

    return arr;
  }

  /**
   *
   * @param {Object} x
   * @returns {boolean} true if x is valid node value
   * @private
   */
  _isValid(x) {
    if (x === null || x === undefined) return false;
    return true;
  }

  /**
   *
   * @param {Object} x
   * @returns {boolean} true if x is an integer
   * @private
   */
  _isInteger(x) {
    return typeof x === "number" && parseInt(x) === x;
  }

  /**
   *
   * @param {Object} val, add val at the end of the LinkedList
   * @returns {boolean}, true if value added to list successfully, otherwise false
   */
  push = function (val) {
    if (!this._isValid(val)) return false;

    const node = new Node(val);

    if (this.head === null) {
      this.head = node;
      this._updateTail();
      this.len += 1;
      return true;
    }

    // add node to the end of the linkedListg
    this.tail.next = node;
    this.tail = this.tail.next;

    this.len += 1;

    return true;
  };

  /**
   *
   * @param {number} index, remove node at index from LinkedList
   * @returns {boolean}, true if removed
   */
  remove = function (index) {
    if (!this._isInteger(index)) return false;
    if (index >= this.size() || index < 0) return false;

    if (index === 0) {
      this.head = this.head.next;

      if (this.head === null) {
        this.tail = null;
      }

      this.len -= 1;
      return true;
    }

    let ptr = this.head;

    for (let i = 0; i < index - 1; i++) {
      ptr = ptr.next;
    }

    ptr.next = ptr.next.next;

    if (index === this.len - 1) {
      this._updateTail();
    }

    this.len -= 1;

    return true;
  };

  /**
   * update the pointer to last node
   */
  _updateTail() {
    let ptr;
    for (ptr = this.head; ptr.next !== null; ptr = ptr.next);
    this.tail = ptr;
  }

  /**
   *
   * @returns {number} size of the linkedList
   */
  size() {
    return this.len;
  }
}

module.exports = LinkedList;
