function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return `${new Array(padding + 1).join(' ')}${input}`
  }
  return padding + input
}

function printAll(strs?: string | string[]) {
  if (!strs) return
  if (typeof strs === 'string') {
    strs = [strs]
  }
  for (const str of strs) {
    console.log(str)
  }
}

function multiplyAll(values: number[] | null, factor: number) {
  return values ? values.map((x) => x * factor) : values
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim()
  } else {
    animal.fly()
  }
}

function logValue(x: Date | String) {
  if (x instanceof Date) {
    console.log(x.toLocaleDateString())
  } else {
    console.log(x)
  }
}

// 断言
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}
