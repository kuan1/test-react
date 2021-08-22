export {}

// basic
interface Person {
  name: string
  age: number
}

interface ReadonlayPerson {
  readonly name: string
  readonly age: number
}

interface Dicrectionary {
  [index: number]: string
  length: number
  readonly name?: string
}

// intersection
interface ColorFul {
  color: string
}
interface Circle {
  radius: number
}
type ColorFulCircle = ColorFul & Circle

// generic object type
interface Box<T> {
  contents: any
  contents2: unknown
  contents3: T
}

const m = new Map<string, string>()

const s = new Set<string | number>()

const p = new Promise<string>((resolve) => resolve('1'))
