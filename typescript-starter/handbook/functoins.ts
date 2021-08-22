export {}

// 普通函数
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

const log: DescriptionFunction = function (...args: string[]) {
  console.log(...args)
}

log.name = 'log'

greeter2(log)

// 第一个元素
function firstElement<T>(arr: T[]): T {
  return arr[0]
}
firstElement<number | string>([1, '2', 'a'])

// map
function map<T, K>(arr: T[], fn: (item: T) => K) {
  return arr.map((item) => fn(item))
}

map([1, 2, 3], (n) => n * n)

// 约束 constraints
function longest<T extends { length: number }>(a: T, b: T) {
  return a.length > b.length ? a : b
}

longest('1', '2')
longest([2, 2], [1, 3])

const combine = <T>(a: T[], b: T[]): T[] => [...a, ...b]
combine<number | string>([1], ['2'])

const filter = <T>(arr: T[], fn: (item: T) => boolean): T[] => arr.filter(fn)
filter([1, 2, 3], (item) => !!item)

const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj).forEach((key) => obj[key as keyof typeof obj])
