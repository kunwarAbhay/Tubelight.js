const LinkedList = require("./linkedList");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  /**
   *
   * @param {Object} val , add the val to the end of list
   */
  push(val) {
    this.list.push(val);
  }

  /**
   * remove the first element of list
   * @returns {Object} first element
   */
  pop() {
    return this.list.remove(0);
  }

  /**
   *
   * @returns {Object} first element of the list
   */
  front() {
    if (this.list.head) {
      return this.list.head.val;
    }

    return null;
  }

  /**
   *
   * @returns {Object} last element of the list
   */
  back() {
    if (!this.list.tail) return null;
    return this.list.tail.val;
  }

  /**
   *
   * @returns {number} size of the list(queue)
   */
  size() {
    return this.list.size;
  }

  /**
   *
   * @returns {boolean} true if list is empty, otherwise false
   */
  isEmpty() {
    return this.list.size === 0;
  }
}

module.exports = Queue;
