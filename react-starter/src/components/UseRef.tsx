import React, {useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const force = () => {
    inputRef.current?.focus()
  }

  const change = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e);
  }

  return (
    <div>
      <input ref={inputRef} placeholder="请输入" onInput={change} />    
      <button onClick={force}>点击聚焦</button>
    </div>
  )
}

export default UseRef
