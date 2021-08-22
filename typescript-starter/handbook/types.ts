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
