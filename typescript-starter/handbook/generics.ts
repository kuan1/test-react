/**
 * TS泛型 generics
 */
export {}

// 普遍 identity
const identity = <T>(x: T): T => x
identity<string>('1')
identity<number>(1)
identity<boolean>(false)

const loggingIdentity = <T>(x: T[]): T[] => {
  console.log(x.length)
  return x
}
loggingIdentity<number>([1])

// 泛类型函数
interface GenericIdentityFn {
  <T>(x: T): T
}
const genericIdentityFn: GenericIdentityFn = (x) => x
genericIdentityFn<number>(1)

// 泛类型函数2
function loggingIdentity2<T extends { length: number }>(a: T) {
  console.log(a)
  return a
}

const getProperty = <T, K extends keyof T>(obj: T, key: K) => obj[key]
getProperty({ a: 1 }, 'a')
