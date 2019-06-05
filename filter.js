// Filter - exclusion - return true to keep

const isOdd = value => value % 2 == 1
const isEven = value => value % 2 == 0
console.log(isOdd(3)) // true
console.log(isOdd(2)) // false
console.log(array.filter(isOdd))
console.log(array.filter(isEven))
