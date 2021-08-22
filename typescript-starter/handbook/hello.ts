// function greeter(person: string) {
//   return `hello ${person}`
// }

// const user = 'kuan1'

interface Person {
  name: string
  age: number
}

function greeter(person: Person) {
  return `${person.name}: ${person.age}岁`
}

class Student {
  public info: string
  constructor(public name: string, public age: number) {
    this.info = `${name}: ${age}岁`
  }
}

const user: Person = { name: 'kuan1', age: 27 }

greeter(new Student('kuan1', 20))

document.body.textContent = greeter(user)
