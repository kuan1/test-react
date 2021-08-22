export {}

// partail<Type>
interface Todo {
  title: string
  description: string
  info: string
}
type TodoFileds = Partial<Todo>

// required<Type>
interface Props {
  a?: string
  b?: string
}
type RequiredProps = Required<Props>

// ReadOnly<Type>
type ReadonlyTodo = Readonly<Todo>

// Record
type Keys = 'title' | 'age' | 'info'
type TodoRecord = Record<Keys, string>

// Pick
type TodoPick = Pick<Todo, 'title' | 'description'>

// Omit
type TodoOmit = Omit<Todo, 'title'>

// Exclude
type T0 = Exclude<'a' | 'b', 'a'>

// Extract
type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>

// NonNullable
type T2 = NonNullable<string | number | undefined>

// Parameters<Type>
declare function f1(arg: { a: number; b: string }): void
type T3 = Parameters<typeof f1>

// ReturnType<Type>
type T4 = ReturnType<typeof f1>
