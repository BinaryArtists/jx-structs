/** 
* *********  操作实例  ************** 
*   var map = new HashMap(); 
*   map.put("key1","Value1"); 
*   map.put("key2","Value2"); 
*   map.put("key3","Value3"); 
*   map.put("key4","Value4"); 
*   map.put("key5","Value5"); 
*   alert("size："+map.size()+" key1："+map.get("key1")); 
*   map.remove("key1"); 
*   map.put("key3","newValue"); 
*   var values = map.values(); 
*   for(var i in values){ 
*       document.write(i+"："+values[i]+"   "); 
*   } 
*   document.write("<br>"); 
*   var keySet = map.keySet(); 
*   for(var i in keySet){ 
*       document.write(i+"："+keySet[i]+"  "); 
*   } 
*   alert(map.isEmpty()); 
*/  

export function hashFunc(str, max) {
  // 1.初始化hashCode的值
  var hashCode = 0
  // 2.霍纳算法, 来计算hashCode的数值
  for (var i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
  }
  // 3.取模运算
  hashCode = hashCode % max
  return hashCode
}
  
export const HashMap =  function () {
  var length = 0
  var obj = new Object()

  this.isEmpty = function () {
    return length == 0
  }

  this.containsKey = function (key) {
    return (key in obj)
  }

  this.containsValue = function (value) {
    for (var key in obj) {  
      if(obj[key] == value) {
        return true
      }  
    }  
    return false
  }

  this.put = function (key, value) {
    if (!this.containsKey(key)) {
      length++
    }  
    obj[key] = value
  }
 
  this.get = function (key) {
    return this.containsKey(key)?obj[key] : null
  }
  
  this.remove = function (key) {
    if (this.containsKey(key) && (delete obj[key])) {
      length--
    }
  }

  this.values = function () {
    var _values = new Array()
    for (var key in obj) {
      _values.push(obj[key])
    }
    return _values
  }
 
  this.keySet = function () {
    var _keys = new Array()
    for(var key in obj) {
      _keys.push(key)
    }
    return _keys
  }

  this.size = function () {
    return length
  }

  this.clear = function () {
    length = 0
    obj = new Object()
  }
}