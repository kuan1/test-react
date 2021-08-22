/**
 * 三斜线依赖
 * /// <reference types="jquery" />
 */

// npm包中定义全局变量
declare global {
  interface File {
    webkitSlice(start: string | undefined, end: string | undefined, contentType: string | undefined): Blob
  }
}

// 扩展模块文件
declare module fooModule {
  export function test(): void
}

export { fooModule }

// 变量声明
declare var jQuery: (selector: string) => any

// 函数声明
declare function jQuery2(selector: string): any

// 函数重载
declare function jQuery2(domReadyCallback: () => any): any

// class
declare class Animal {
  name: string
  constructor(name: string)
  hello(text: string): string
}

// enum
declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}

// declare namespace
declare namespace jQuery2 {
  const version: string

  function ajax(url: string, options: any): void

  class Event {
    blur(): void
  }

  namespace fn {
    function extend<T>(object: T): T
  }
}

jQuery2.fn.extend<Record<string, string>>({ a: '1' })
