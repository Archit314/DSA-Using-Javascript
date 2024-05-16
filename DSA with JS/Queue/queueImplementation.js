const ps = require("prompt-sync");
const prompt = ps();

class Queue {
  constructor(size) {
    this.items = [];
    this.items.length = size;
    this.rare = -1;
    this.front = -1;
  }
  enqueue(element) {
    this.rare += 1;
    if (this.rare == 0) this.front += 1;
    this.items[this.rare] = element;
  }
  dequeue(element) {}
  firstElement() {
    return this.items[this.front];
  }
  lastElement() {
    return this.items[this.rare];
  }
}

const queueArraySize = Number(prompt(`Enter the size of a queue: `));
let queueArray = new Queue(queueArraySize);

const element = Number(prompt(`Enter element to enqueue in queue: `));
let updateArray = queueArray.enqueue(element);

const firstElement = queueArray.firstElement();
console.log(`First element of queue is: ${firstElement}`);

const lastElement = queueArray.lastElement();
console.log(`First element of queue is: ${lastElement}`);

console.log(queueArray.items);
