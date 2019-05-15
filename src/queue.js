export class Queue {
  constructor () {
    this.items = [];
  }

  enqueue (ele) {
    this.items.push(ele);
  }

  dequeue () {
    return this.items.shift();
  }

  front () {
    return this.items[0];
  }

  isEmpty () {
    return this.items.length == 0;
  }

  size () {
    return this.items.length;
  }
}