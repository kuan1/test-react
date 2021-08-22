export {}

function greeter(fn: (a: string) => void) {
  return fn('hello world')
}

greeter(console.log)

interface DescriptionFunction {
  name: string
  (...args: string[]): void
}

function greeter2(fn: DescriptionFunction) {
  fn('hello', fn.name)
}

// function log()

// greeter2()
