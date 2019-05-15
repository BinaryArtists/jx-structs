export class Stack {
  constructor (options) {
    this.items = [];
  }

  push () {
    this.items.push(element);
  }

  pop () {
    return items.pop();
  }

  peek () { // as top
    return items[items.length - 1];
  }

  isEmpty = function () {
    return items.length == 0;
  }

  size   () {
    return items.length
  }

  clear () {
    this.items = [];
  }

  expo () {
    return this.items;
  }
}