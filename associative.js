// Associative Property

const {
  compose,
  scream,
  exclaim,
  repeat
} = require('./shared')

const withExuberance = compose(
  repeat,
  exclaim,
  scream
)

const str = 'hello'
console.log(withExuberance(str))

const repeatExcitebly = compose(repeat, exclaim)
console.log(
  compose(repeatExcitebly, scream)(str)
)

const screamLoudly = compose(exclaim, scream)
console.log(
  compose(repeat, screamLoudly)(str)
)