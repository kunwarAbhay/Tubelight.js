const { priorityQueue } = require(".");

class PriorityQueue {
  /**
   * This function will be used to decide the priority between two object
   * @param {function} comparator
   */
  constructor(comparator) {
    this.heap = [];
    this.size = 0;
    this.comparator = comparator || ((a, b) => a > b);
  }

  /**
   * swap heap elements at index i and j
   * @param {number} i
   * @param {number} j
   * @private
   */
  _swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  /**
   *
   * @param {number} index , run heapify on index
   * @private
   */
  _heapify(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;

    let priority = index;

    if (left < this.size) {
      if (!this.comparator(this.heap[index], this.heap[left])) {
        priority = left;
      }
    }

    if (right < this.size) {
      if (!this.comparator(this.heap[left], this.heap[right])) {
        priority = right;
      }
    }

    if (priority !== index) {
      this._swap(priority, index);
      this._heapify(priority);
    }
  }

  /**
   *
   * @returns {Object} top priority element
   */
  top() {
    if (this.size === 0) return null;

    return this.heap[0];
  }

  /**
   *
   * @param {Object} el, push element to priorityQueue
   */
  push(el) {
    this.size++;
    this.heap[this.size - 1] = el;

    let index = this.size - 1;
    let parent = Math.floor((index + 1) / 2 - 1);

    while (index > 0 && this.comparator(this.heap[index], this.heap[parent])) {
      this._swap(parent, index);
      index = parent;
      parent = Math.floor((index + 1) / 2 - 1);
    }
  }

  /**
   *
   * @returns {Object} pop the top priority element and return it
   */
  pop() {
    if (this.size === 0) return null;

    const min = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.heap.pop();
    this.size--;

    this._heapify(0);

    return min;
  }

  /**
   *
   * @returns {number} size of priorityQueue
   */
  size() {
    return this.size;
  }

  /**
   *
   * @returns {boolean} True if priorityQueue is empty
   */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = PriorityQueue;
