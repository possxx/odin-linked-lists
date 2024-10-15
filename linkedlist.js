import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = new Node();
  }

  append(value) {
    let currentNode = this.headNode;
    let nextNode = this.headNode.nextNode;
    while (nextNode !== null) {
      currentNode = nextNode;
      nextNode = nextNode.nextNode;
    }
    currentNode.nextNode = new Node(value);
  }

  prepend(value) {
    let oldStartNode = this.headNode.nextNode;
    let newStartNode = new Node(value);
    this.headNode.nextNode = newStartNode;
    newStartNode.nextNode = oldStartNode;
  }

  size() {
    let size = 0;
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      size += 1;
      currentNode = currentNode.nextNode;
    }
    return size;
  }

  head() {
    return this.headNode.nextNode;
  }

  tail() {
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    let currentNode = this.headNode;
    for (let i = 0; i <= index; i++) {
      if (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      } else {
        return null;
      }
    }
    return currentNode;
  }

  pop() {
    let previousNode = this.headNode;
    let currentNode = this.headNode.nextNode;
    while (currentNode.nextNode !== null) {
      previousNode = previousNode.nextNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.headNode.nextNode;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.headNode.nextNode;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }
    return null;
  }

  toString() {
    let currentNode = this.headNode.nextNode;
    let string = "";
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    string += `null`;
    return string;
  }

  insertAt(value, index) {
    if (index > this.size()) throw Error("Can't insert value after tail!");
    let currentNode = this.headNode.nextNode;
    let previousNode = this.headNode;
    let newNode = new Node(value);
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
      previousNode = previousNode.nextNode;
    }
    previousNode.nextNode = newNode;
    newNode.nextNode = currentNode;
  }

  removeAt(index) {
    if (index > this.size() - 1)
      throw Error("Can't remove tail or anything after tail!");
    let previousNode = this.headNode;
    let currentNode = this.headNode.nextNode;
    for (let i = 0; i < index; i++) {
      previousNode = previousNode.nextNode;
      currentNode = currentNode.nextNode;
    }
    previousNode.nextNode = currentNode.nextNode;
  }
}
