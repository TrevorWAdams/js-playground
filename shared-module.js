// Shared
module.exports = {
  compose: (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x),
  pipe: (...fns) => x => fns.reduce((acc, fn) => fn(acc), x),
  trace: msg => x => (console.log(msg, x), x),
  prop: key => obj => obj[key],
  map: fn => xs => xs.map(fn),
  filter: fn => xs => xs.filter(fn),
  reduce: fn => start => xs => xs.reduce((acc, x) => fn(acc)(x), start),
  add: x => y => x + y,
  subtract: x => y => x - y,
  multiply: x => y => x * y,
  divide: x => y => x / y,
  split: pattern => str => str.split(pattern),
  join: separator => xs => xs.join(separator),
  lowerCase: str => str.toLowerCase(),
  upperCase: str => str.toUpperCase(),
  scream: str => str.toUpperCase(),
  exclaim: str => `${str}!`,
  repeat: str => `${str} ${str}`
}
