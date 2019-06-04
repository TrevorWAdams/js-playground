// Argument Order

const arr = [1, 2, 3, 4, 5]

const double = x => x * 2

// Not Valuable Argument Order
const mapNotValuable = array => cb => array.map(cb)
const withArray = mapNotValuable(arr)

console.log(withArray(double))
console.log(withArray(n => n * 2))
console.log(arr.map(n => n * 2))

// Valuable Argument Order
const map = cb => array => array.map(cb)
const withDouble = map(double)

console.log(withDouble(arr))
console.log(withDouble([5, 4, 3, 2, 1]))

// General Rule: Order arguments from most specific => least specific
const people = [
  {
    name: 'One'
  },
  {
    name: 'Two'
  },
  {
    name: 'Three'
  }
]

const prop = key => obj => obj[key]
const propName = prop('name')

console.log(
  map(propName)(people)
)