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
    if (this.rare >= this.items.length) {
      const message = `Queue is full you cannot enqueue in queue`;
      return { messaage: message, status: 422 };
    }
    this.rare += 1;
    if (this.rare == 0) this.front += 1;
    this.items[this.rare] = element;
    return { message: `Enqueued ${element} in queue`, status: 200 };
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
const insertElement = queueArray.enqueue(element);
if (insertElement && insertElement.status == 422) {
  return insertElement.messaage;
}
console.log(`Elements in queue: ${queueArray.items}`);

const firstElement = queueArray.firstElement();
console.log(`First element of queue is: ${firstElement}`);

const lastElement = queueArray.lastElement();
console.log(`First element of queue is: ${lastElement}`);

console.log(queueArray.items);
