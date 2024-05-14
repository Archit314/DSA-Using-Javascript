const ps = require("prompt-sync");
const prompt = ps();

class Stack {
  // Constructor to initialise an empty array
  constructor() {
    this.items = [];
    this.top = -1;
  }

  addElement(element) {
    this.top += 1;
    this.items[this.top] = element;
  }
  removeElement() {
    if (this.top == -1) {
      console.log(`Stack is empty`);
      return this.items;
    }
    this.top -= 1;
    let updateArray = [];
    for (let i = 0; i <= this.top; i++) {
      updateArray.push(this.items[i]);
    }
    this.items = updateArray;
    return this.items;
  }
  viewTopElement() {
    return this.items[this.top];
  }
}

// Creating an object of class Stack and contructor function will automatically call when object creates.
const array = new Stack();

let userAction;
do {
  console.log(
    `Enter your choice:\n1. To add element in stack press 1\n2. To remove element from stack press 2\n3. To see top element of stack press 3\n4. To exit press 4`
  );
  const choice = Number(prompt(`Enter you choice: `));
  console.log(choice);
  switch (choice) {
    case 1:
      console.log(`Add`);
      let element = prompt(`Enter element: `);
      array.addElement(element);
      break;

    case 2:
      console.log(`remove`);
      let updateStack = array.removeElement();
      console.log(`Updated array: ${updateStack}`);
      break;

    case 3:
      console.log(`See`);
      let topElement = array.viewTopElement();
      console.log(`Top element in stack is: ${topElement}`);
      break;

    case 4:
      console.log(`exit`);
      break;

    default:
      console.log(`Invalid choice`);
      break;
  }

  userAction = prompt(`Do you want to continue (Y/N): `);
  console.log(userAction);
} while (userAction != "n" && userAction != "N");

console.log(array.items);
