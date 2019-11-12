/**
 * 
 */
import { BinaryTreeNode } from './binarytree';

export function BinarySerachTree() {
  this.root = null

  // 二叉搜索树相关的操作方法
  // 向树中插入数据
  BinarySerachTree.prototype.insert = function (val) {
      // 1.根据key创建对应的node
      var newNode = new BinaryTreeNode(val)
      // 2.判断根节点是否有值
      if (this.root === null) {
          this.root = newNode
      } else {
          this.insertNode(this.root, newNode)
      }
  }
  BinarySerachTree.prototype.insertNode = function (node, newNode) {
      if (newNode.val < node.val) { // 1.准备向左子树插入数据
          if (node.left === null) { // 1.1.node的左子树上没有内容
              node.left = newNode
          } else { // 1.2.node的左子树上已经有了内容
              this.insertNode(node.left, newNode)
          }
      } else { // 2.准备向右子树插入数据
          if (node.right === null) { // 2.1.node的右子树上没有内容
              node.right = newNode
          } else { // 2.2.node的右子树上有内容
              this.insertNode(node.right, newNode)
          }
      }
  }
  // 获取最大值和最小值
  BinarySerachTree.prototype.min = function () {
      var node = this.root
      while (node.left !== null) {
          node = node.left
      }
      return node.val
  }
  BinarySerachTree.prototype.max = function () {
      var node = this.root
      while (node.right !== null) {
          node = node.right
      }
      return node.val
  }
  // 搜搜特定的值
  /*
  BinarySerachTree.prototype.search = function (val) {
      return this.searchNode(this.root, val)
  }
  BinarySerachTree.prototype.searchNode = function (node, val) {
      // 1.如果传入的node为null那么, 那么就退出递归
      if (node === null) {
          return false
      }
      // 2.判断node节点的值和传入的val大小
      if (node.val > val) { // 2.1.传入的val较小, 向左边继续查找
          return this.searchNode(node.left, val)
      } else if (node.val < val) { // 2.2.传入的val较大, 向右边继续查找
          return this.searchNode(node.right, val)
      } else { // 2.3.相同, 说明找到了val
          return true
      }
  }
  */
  BinarySerachTree.prototype.search = function (val) {
      var node = this.root
      while (node !== null) {
          if (node.val > val) {
              node = node.left
          } else if (node.val < val) {
              node = node.right
          } else {
              return true
          }
      }
      return false
  }
  // 删除节点
  BinarySerachTree.prototype.remove = function (val) {
      // 1.获取当前的node
      var node = this.root
      var parent = null
      // 2.循环遍历node
      while (node) {
          if (node.val > val) {
              parent = node
              node = node.left
          } else if (node.val < val) {
              parent = node
              node = node.right
          } else {
              if (node.left == null && node.right == null) {
              }
          }
      }
  }
  BinarySerachTree.prototype.removeNode = function (node, val) {
      // 1.如果传入的node为null, 直接退出递归.
      if (node === null) return null
      // 2.判断val和对应node.val的大小
      if (node.val > val) {
          node.left = this.removeNode(node.left, val)
      }
  }
  // 删除结点
  BinarySerachTree.prototype.remove = function (val) {
      // 1.定义临时保存的变量
      var current = this.root
      var parent = this.root
      var isLeftChild = true
      // 2.开始查找节点
      while (current.val !== val) {
          parent = current
          if (val < current.val) {
              isLeftChild = true
              current = current.left
          } else {
              isLeftChild = false
              current = current.right
          }
          // 如果发现current已经指向null, 那么说明没有找到要删除的数据
          if (current === null) return false
      }
      // 3.删除的结点是叶结点
      if (current.left === null && current.right === null) {
          if (current == this.root) {
              this.root == null
          } else if (isLeftChild) {
              parent.left = null
          } else {
              parent.right = null
          }
      }
      // 4.删除有一个子节点的节点
      else if (current.right === null) {
          if (current == this.root) {
              this.root = current.left
          } else if (isLeftChild) {
              parent.left = current.left
          } else {
              parent.right = current.left
          }
      } else if (current.left === null) {
          if (current == this.root) {
              this.root = current.right
          } else if (isLeftChild) {
              parent.left = current.right
          } else {
              parent.right = current.right
          }
      }
      // 5.删除有两个节点的节点
      else {
          // 1.获取后继节点
          var successor = this.getSuccessor(current)
          // 2.判断是否是根节点
          if (current == this.root) {
              this.root = successor
          } else if (isLeftChild) {
              parent.left = successor
          } else {
              parent.right = successor
          }
          // 3.将删除节点的左子树赋值给successor
          successor.left = current.left
      }
      return true
  }
  // 找后继的方法
  BinarySerachTree.prototype.getSuccessor = function (delNode) {
      // 1.使用变量保存临时的节点
      var successorParent = delNode
      var successor = delNode
      var current = delNode.right // 要从右子树开始找
      // 2.寻找节点
      while (current != null) {
          successorParent = successor
          successor = current
          current = current.left
      }
      // 3.如果是删除图中15的情况, 还需要如下代码
      if (successor != delNode.right) {
          successorParent.left = successorParent.right
          successor.right = delNode.right
      }
  }
  // 遍历方法
  // 先序遍历
  BinarySerachTree.prototype.preOrderTraversal = function (handler) {
      this.preOrderTranversalNode(this.root, handler)
  }
  BinarySerachTree.prototype.preOrderTranversalNode = function (node, handler) {
      if (node !== null) {
          handler(node.val)
          this.preOrderTranversalNode(node.left, handler)
          this.preOrderTranversalNode(node.right, handler)
      }
  }
  // 中序遍历
  BinarySerachTree.prototype.inOrderTraversal = function (handler) {
      this.inOrderTraversalNode(this.root, handler)
  }
  BinarySerachTree.prototype.inOrderTraversalNode = function (node, handler) {
      if (node !== null) {
          this.inOrderTraversalNode(node.left, handler)
          handler(node.val)
          this.inOrderTraversalNode(node.right, handler)
      }
  }
  // 后续遍历
  BinarySerachTree.prototype.postOrderTraversal = function (handler) {
      this.postOrderTraversalNode(this.root, handler)
  }
  BinarySerachTree.prototype.postOrderTraversalNode = function (node, handler) {
      if (node !== null) {
          this.postOrderTraversalNode(node.left, handler)
          this.postOrderTraversalNode(node.right, handler)
          handler(node.val)
      }
  }
}