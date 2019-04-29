// 3-例子
window.color = 'red'
var o = {
  color:'blue'
}

function sayColor(){
  console.log(this.color)
}

sayColor()

sayColor.call(this)
sayColor.call(window)
sayColor.call(o)

// // 2-call的使用
// function sum(num1, num2) {
//   return num1 + num2
// }

// function callSum(num1, num2) {
//   return sum.call(this, num1, num2)
// }

// console.log(callSum(10, 10))

// // 1-apply的使用
// function sum(num1, num2) {
//   return num1 + num2
// }

// function applySum1(num1, num2) {
//   return sum.apply(this, arguments)
// }

// function applySum2(num1, num2) {
//   return sum.apply(this, [num1, num2])
// }

// console.log('applySum1--->', applySum1(10, 10))
// console.log('applySum2--->', applySum2(10, 10))
