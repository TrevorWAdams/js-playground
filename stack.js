function createStack() {
  const stack = []

  return {
    push(x) {
      stack.push(x)
    },
    pop() {
      if (stack.length === 0) {
        return undefined
      }
      return stack.pop()
    },
    peek() {
      if (stack.length === 0) {
        return undefined
      }
      return stack[stack.length - 1]
    },
    get length() {
      return stack.length
    },
    isEmpty() {
      return stack.length === 0
    }
  }
}

const stack = createStack()

stack.push('one')
stack.push('two')
stack.push('three')
stack.push('four')

stack.pop()
stack.pop()
console.log(stack.peek())
console.log(stack.length)
