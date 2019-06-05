// Trampoline

const trampoline = fn => (...args) => {
  let result = fn(...args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

var sumTrampoline = trampoline(
  function f(sum, next, ...nums) {
    sum += next
    if(nums.length == 0) return sum
    return function(){
      return f(sum, ...nums)
    }
  }
)

console.log(sumTrampoline(3,4,5,6,7,8,9))