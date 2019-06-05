// Iterative vs Recursive

function sumIterative(...nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
  }
  return sum
}
console.log(sumIterative(3, 4, 5, 6, 7, 8, 9))

function sumRecursive(sum, ...nums) {
  if (nums.length == 0) {
    return sum
  }
  return sum + sumRecursive(...nums)
}
console.log(sumRecursive(3, 4, 5, 6, 7, 8, 9))
console.log(sumRecursive(3))

function mult(product, ...nums) {
  if (nums.length == 0) return product
  return product * mult(...nums)
}
console.log(mult(3, 4, 5, 6, 7, 8, 9))
console.log(mult(3, 4))
console.log(mult(3))
