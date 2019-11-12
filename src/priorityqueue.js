/**
 * 优先级队列
 */
export class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}

export class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // 添加元素的方法
  // 注意: 我们这里是数字越小, 优先级越高
  enqueue(element, priority) {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      var added = false;
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true
          break
        }
      }
      
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }

  // 删除元素的方法
  dequeue() {
    return this.items.shift();
  }

  // 获取前端的元素
  front() {
    return this.items[0];
  }

  // 查看元素是否为空
  isEmpty() {
    return this.items.length == 0;
  }

  // 获取元素的个数
  size() {
    return this.items.length;
  }
}