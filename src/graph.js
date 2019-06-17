import { Dictionary } from './dictionary';
import { Queue } from './queue';

export function Graph() {
  // 属性
  this.vertexes = [] // 存储顶点
  this.adjList = new Dictionary() // 存储边
  // 添加方法
  Graph.prototype.addVertex = function (v) {
      this.vertexes.push(v)
      this.adjList.set(v, [])
  }
  Graph.prototype.addEdge = function (v, w) {
      this.adjList.get(v).push(w)
      this.adjList.get(w).push(v)
  }
  Graph.prototype.toString = function () {
      var resultStr = ""
      for (var i = 0; i < this.vertexes.length; i++) {
          resultStr += this.vertexes[i] + "->"
          var adj = this.adjList.get(this.vertexes[i])
          for (var j = 0; j < adj.length; j++) {
              resultStr += adj[j] + " "
          }
          resultStr += "\n"
      }
      return resultStr
  }
  // 初始化颜色
  Graph.prototype.initializeColor = function () {
      var colors = []
      for (var i = 0; i < this.vertexes.length; i++) {
          colors[this.vertexes[i]] = "white"
      }
      return colors
  }
  // 广度优先算法
  Graph.prototype.bfs = function (v, handler) {
      // 1.初始化颜色
      var color = this.initializeColor()
      // 2.创建队列
      var queue = new Queue()
      // 3.将传入的顶点放入队列中
      queue.enqueue(v)
      // 4.从队列中依次取出和放入数据
      while (!queue.isEmpty()) {
          // 4.1.从队列中取出数据
          var qv = queue.dequeue()
          // 4.2.获取qv相邻的所有顶点
          var qAdj = this.adjList.get(qv)
          // 4.3.将qv的颜色设置成灰色
          color[qv] = "gray"
          // 4.4.将qAdj的所有顶点依次压入队列中
          for (var i = 0; i < qAdj.length; i++) {
              var a = qAdj[i]
              if (color[a] === "white") {
                  color[a] = "gray"
                  queue.enqueue(a)
              }
          }
          // 4.5.因为qv已经探测完毕, 将qv设置成黑色
          color[qv] = "black"
          // 4.6.处理qv
          if (handler) {
              handler(qv)
          }
      }
  }
  // 深度优先搜索
  Graph.prototype.dfs = function (handler) {
      // 1.初始化颜色
      var color = this.initializeColor()
      // 2.遍历所有的顶点, 开始访问
      for (var i = 0; i < this.vertexes.length; i++) {
          if (color[this.vertexes[i]] === "white") {
              this.dfsVisit(this.vertexes[i], color, handler)
          }
      }
  }
  // dfs的递归调用方法
  Graph.prototype.dfsVisit = function (u, color, handler) {
      // 1.将u的颜色设置为灰色
      color[u] = "gray"
      // 2.处理u顶点
      if (handler) {
          handler(u)
      }
      // 3.u的所有邻接顶点的访问
      var uAdj = this.adjList.get(u)
      for (var i = 0; i < uAdj.length; i++) {
          var w = uAdj[i]
          if (color[w] === "white") {
              this.dfsVisit(w, color, handler)
          }
      }
      // 4.将u设置为黑色
      color[u] = "black"
  }
}
