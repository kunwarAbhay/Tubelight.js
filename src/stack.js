class Stack {
  /**
   * Initialize a stack
   */
  constructor() {
    this.stack = [];
    this.len = 0;
    this.top = -1;
  }

  /**
   *
   * @param {Object} val
   */
  push(val) {
    if (val !== null && val !== undefined) {
      this.stack.push(val);
      this.len++;
      this.top++;
    }
  }

  /**
   *
   * @returns last element, null if stack is empty
   */
  pop() {
    if (this.len > 0) {
      this.len--;
      this.top--;
      return this.stack.pop();
    }

    return null;
  }

  /**
   *
   * @returns top element of the stack, null if stack is empty
   */
  peek() {
    if (this.top !== -1) {
      return this.stack[this.top];
    }

    return null;
  }

  /**
   *
   * @returns {number} size of the stack
   */
  size() {
    return this.len;
  }

  /**
   *
   * @returns {boolean} true if stack is empty, otherwise false
   */
  isEmpty() {
    if (this.len > 0) return false;

    return true;
  }
}

module.exports = Stack;
