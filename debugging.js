// Debugging Compositions

const { compose, map, split, join, lowerCase } = require("./shared")

const bookTitles = ["Book One", "Title Two", "Novel Three"]

const trace = msg => x => (console.log(msg, x), x)

const slugifyTrace = compose(
  map(join("-")),
  trace("after split"),
  map(split(" ")),
  trace("after lowercase"),
  map(lowerCase),
  trace("before lowercase")
)
const slugsTrace = slugifyTrace(bookTitles)
console.log(slugsTrace)


const slugify = compose(
  map(compose(join("-"),split(" "), lowerCase))
)
const slugs = slugify(bookTitles)
console.log(slugs)

