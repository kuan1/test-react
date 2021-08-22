// keyof
type Pointer = { x: number; y: number }
type Keys = keyof Pointer

// typeof
const pointer2 = { x: 1, y: 2 }
type Pointer2 = typeof pointer2

// ReturnType
type testFn = () => { a: number; b: number }
type TestReturn = ReturnType<testFn>

// 根据索引访问类型 Indexed Access Types
type Person = { name: string; age: number }
type age = Person['age']

// 条件类型 Conditional Types
interface Animal {
  live(): void
}
interface Dog extends Animal {
  woof(): void
}
type ExampleType = Dog extends Animal ? string : number

// 泛类型声明
type MessageOf<T> = T extends { message: string } ? T['message'] : never

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(eventName: Key, callback: (newValue: Type[Key]) => void): void
}

// 指定类型
const canvas = <HTMLCanvasElement>document.querySelector('canvas')
const canvas2 = document.querySelector('canvas') as HTMLCanvasElement

// 强制制定类型
const a = '1' as any as number

// 非空断言，不是null ｜ undefined
function test(a?: string) {
  return a!.slice()
}

export {}
