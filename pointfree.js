// Pointfree Programming

const array = [1, 2, 3]

// Before
const array2 = array.map(item => item * 2)
console.log(array2)

// After
const double = x => x * 2
const array3 = array.map(double)
console.log(array3)
