// Reduce - combine

const acronym = (str, word) => str + word.charAt(0)
const array = ["First", "Second", "Third", "Fourth"]
console.log(array.reduce(acronym, ""))

const sum = (total, num) => total + num
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce(sum))
