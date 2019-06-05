// Currying = turning a multi-varient function and turning it into a series of uary functions

// Arity = number of arguments a function receives
// 1 = unary
// 2 = binary
// 3 = ternary

function binaryAdd(x, y) {
  return x + y
}
console.log(binaryAdd(2, 3)) // 5

function add(x) {
  return function(y) {
    return x + y
  }
}
const addThree = add(3)
console.log(addThree(2))

const add2 = x => y => x + y
console.log(add2(2)(3))
