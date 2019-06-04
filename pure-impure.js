// Pure functions

const f = x => x + 1

// Ex 1 - Impure because it relies on Global State
const COST_OF_ITEM = 19
const cartTotal = quantity => COST_OF_ITEM * quantity

// Ex 2 - Impure because it returns different result with same input
const generateId = () => Math.floor(Math.random() * 10000)

const createUser = (name, age) => ({
  id: generateId(),
  name,
  age
})

// Ex 3 - Impure - changes Global State
let id = 0
const createItem = name =>({
  id: ++id,
  name
})
// console.log(createItem('One'))
// console.log(id)

// Ex 4 - affects the outside world

const logger = msg => {
  console.log(msg)
}
logger('Hello')