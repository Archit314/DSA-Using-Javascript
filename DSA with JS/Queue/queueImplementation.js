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

// Providing choices to user
let userAction;
do {
  console.log(
    `Enter your choice:\n1. To enqueue element in queue press 1\n2. To dequeue element from queue press 2\n3. To see top element of queue press 3\n4. To see last element of queue press 4\n5. To exit press 5`
  );

  const choice = Number(prompt(`Enter your choice: `));

  switch (choice) {
    case 1:
      if (queueArray.rare >= queueArray.items.length - 1) {
        console.log(`Queue is full`);
        break;
      }
      const element = Number(prompt(`Enter element to enqueue in queue: `));
      const insertElement = queueArray.enqueue(element);
      if (insertElement && insertElement.status == 422) {
        return insertElement.messaage;
      }
      break;
    case 2:
      break;
    case 3:
      if (queueArray.rare == -1) {
        console.log(`Queue is empty, please add element in queue`);
        break;
      }
      const firstElement = queueArray.firstElement();
      console.log(`First element of queue is: ${firstElement}`);
      break;
    case 4:
      if (queueArray.rare == -1) {
        console.log(`Queue is empty, please add element in queue`);
        break;
      }
      const lastElement = queueArray.lastElement();
      console.log(`Last element of queue is: ${lastElement}`);
      break;
    case 5:
      console.log(`Thank you! enjoy your day`);
      return;

    default:
      break;
  }
  userAction = prompt(`Do you want to continue? (Y/N): `);
} while (userAction != "n" && userAction != "N");

console.log(`Elements in queue: ${queueArray.items}`);

console.log(queueArray.items);
