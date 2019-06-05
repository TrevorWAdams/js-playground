// Recursive - Proper Tail Calls (PTC)
"use strict"

function sumRecursive(...nums) {
  return recursive(...nums)

  function recursive(sum, next, ...nums) {
    sum += next
    if (nums.length == 0) return sum
    return recursive(sum, ...nums)
  }
}
console.log(sumRecursive(5, 2, 3))
console.log(sumRecursive(5, 2))
