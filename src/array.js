export const ArrayUsage = [
  // 初始化一个数组
  'var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]',

  // 添加一个元素10到数组的最后位置
  // 方式一:
  'numbers[numbers.length] = 10',
  // 方式二:
  'numbers.push(11)',
  'numbers.push(12, 13)',

  // 在数组首位插入一个元素
  'for (var i = numbers.length; i > 0; i--) { numbers[i] = numbers[i-1] } \
  numbers[0] = -1',

  // 通过unshift在首位插入数据
  'numbers.unshift(-2)',

  // 删除最后的元素
  'numbers.pop()',

  // 删除首位的元素
//    for (var i = 0; i < numbers.length; i++) {
//        numbers[i] = numbers[i+1]
//    }
//    numbers.pop()

//    numbers.shift()

  // 删除指定位置的几个元素
  'numbers.splice(5, 3)',

  // 插入指定位置元素
  'numbers.splice(5, 0, 3, 2, 1)',

  // 修改指定位置的元素
  'numbers.splice(5, 3, "a", "b", "c")',

  //    // 数组的合并
//    var nums1 = [1, 2, 3]
//    var nums2 = [100, 200, 300]
//    var newNums = nums1.concat(nums2)
//    alert(newNums) // 1,2,3,100,200,300
//
//    newNums = nums1 + nums2
//    alert(newNums)
//
//    nums1.eve
    // 定义数组
    'var names = ["abc", "cb", "mba", "dna"]',
    // 在names中所有的元素后面拼接-abc
    'var newNames = names.map(function (t) { \
        return t + "-abc" \
    })',
    
//    // 获取names中所有包含'a'字符的元素
//    var newNames = names.filter(function (t) {
//        return t.indexOf("a") != -1
//    })
//    alert(newNames)
//    // forEach的使用
//    names.forEach(function (t) {
//        alert(t)
//    })
//    // 判断数组中是否包含有a字符的字符
//    var flag = names.some(function (t) {
//        alert(t)
//        return t.indexOf("a") != -1
//    })
//    alert(flag)
//    // 判断数组的元素是否都包含a字符
//    var flag = names.every(function (t) {
//        return t.indexOf('a') != -1
//    })
//    alert(flag)

// 1.定义数组
'var numbers = [1, 2, 3, 4]',
// 2.for实现累加
//    var total = 0
//    for (var i = 0; i < numbers.length; i++) {
//        total += numbers[i]
//    }
//    alert(total) // 10
// 3.使用forEach
//    var total = 0
//    numbers.forEach(function (t) {
//        total += t
//    })
//    alert(total)
// 4.使用reduce方法
'var total = numbers.reduce(function (pre, cur) { \
    return pre + cur \
})'
]