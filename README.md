<h1 align="center">⚡Tubelight.js</h1>
<h3 align="center">A pure javascript library providing most common data structures implementation.</h3>

## Table of Contents

- [Quick Start](#-quick-start)
- [Stack](#stack)
- [Queue](#queue)
- [Priority-Queue](#priority-queue)
- [Disjoint-Set](#disjoint-set)

## 🚀 Quick Start

### 👉 Installation

Install Tubelight from npm

```bash
npm install tubelight
```

## Stack

A stack is a linear data structure that follows the principle of Last In First Out (LIFO).

```js
const Tubelight = require("tubelight");

const stack = new Tubelight.Stack();
```

### ⚒️ Operations that can be performed on Stack :

🔘 Push : Add an element to the top of a stack

```js
/**
 * Push element on the top of the stack
 * @param {Object} element
 */

stack.push(element);
```

🔘 Pop : Remove an element from the top of a stack

```js
/**
 * Remove the topmost element from the stack
 * @return {Object} element
 */

stack.pop();
```

🔘 Peek: Get the value of the top element without removing it

```js
/**
 * return the element at the top of stack without removing it
 * @return {Object} element
 */

stack.peek();
```

🔘 IsEmpty : Check if the stack is empty

```js
/**
 * True if the stack is empty otherwise return false
 * @return {Boolean}
 */

stack.isEmpty();
```

### ⏳ Time Complexity :

🔘 Push, pop, IsEmpty & peek Operations take O(1) time.

### 📦 Space Complexity :

🔘 Stack requires O(n) Space Complexity where n is no. of elements in stack.

## Queue

Queue follows the First In First Out (FIFO) rule - the item that goes in first is the item that comes out first.

```js
const Tubelight = require("tubelight");

const queue = new Tubelight.Queue();
```

### ⚒️ Operations that can be performed on Queue :

🔘 Enqueue: Add an element to the end of the queue

```js
/**
 * add element to the end of the queue
 * @param {Object} element
 */

queue.enqueue(element);
```

🔘 Dequeue: Remove an element from the front of the queue

```js
/**
 * remove element from the front of the queue
 * @return {Object} element
 */

queue.dequeue(element);
```

🔘 front: Get the value of the front of the queue without removing it

```js
/**
 * return front element from the queue with removing it
 * @return {Object} element
 */

queue.front();
```

🔘 IsEmpty: Check if the queue is empty

```js
/**
 * return true if queue is empty otherwise false
 * @return {Boolean}
 */

queue.isEmpty();
```

### ⏳ Time Complexity :

🔘 Enqueue, dequeue, peek, isEmpty take O(1) time.

### 📦 Space Complexity :

🔘 Queue requires O(n) space complexity where n is no. of elements in queue.

## Priority Queue

A priority queue is a special type of queue in which each element is associated with a priority value and elements are served based on their priority.

```js
const Tubelight = require("tubelight");

const comparator = (a, b) => {
  // priority of a will be higher than b;
  return a > b;
};

/**
 * This function will be used to decide the priority between two object
 * @param {function} comparator
 */

const priorityQueue = new Tubelight.PriorityQueue(comparator);
```

### ⚒️ Operations that can be performed on Priority-Queue :

🔘 Push : Insert an element in priority-queue

```js
/**
 * insert element in the priority-queue
 * @param {Object} element
 */

priorityQueue.push(element);
```

🔘 Pop : Remove the topmost priority element.

```js
/**
 * remove and return the topmost priority element
 * @return {Object} element
 */

priorityQueue.pop();
```

🔘 Top : Get the topmost priority element without removing it.

```js
/**
 * return the topmost priority element
 * @return {Object} element
 */

priorityQueue.top();
```

🔘 isEmpty : Check if the priority-queue is empty

```js
/**
 * return true if priority-queue is empty otherwise false
 * @return {Boolean}
 */

priorityQueue.pop();
```

### ⏳ Time Complexity :

🔘 push and pop take O(log(n)) time.

🔘 top and isEmpty take O(1) time.

### 📦 Space Complexity :

🔘 Priority-Queue requires O(n) space.

## Disjoint Set

Disjoint set union provides near-constant-time operations to add new sets, to merge existing sets, and to determine whether elements are in the same set.

```js
const Tubelight = require("tubelight");

const disjointSet = new Tubelight.DisjointSet();
```

### ⚒️ Operations that can be performed on Disjoint-Set :

🔘 Union : Combine two subsets into one.

```js
/**
 * Union(x, y) combines the set containing element x and set containing element y
 * @param {Object} x
 * @param {Object} y
 */

disjointSet.union(x, y);
```

🔘 sameSet : Check if two elements belong to the same subset or not.

```js
/**
 * check if the set containing element x and set containing element y are same or not
 * @param {Object} x
 * @param {Object} y
 * @returns {Boolean} true if x and y are in same set otherwise false
 */

disjointSet.sameSet(x, y);
```

### ⏳ Time Complexity :

🔘 union and sameSet operations acheive almost constant time complexity.Although, the final amortized time complexity is calculated to be O(α(n)).

### 📦 Space Complexity :

🔘 Disjoint-Set requires O(n) space.
