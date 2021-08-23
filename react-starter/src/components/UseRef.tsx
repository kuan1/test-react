import React, {useRef} from 'react'

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const force = () => {
    inputRef.current?.focus()
  }

  return (
    <div>
      <input ref={inputRef} placeholder="请输入" />    
      <button onClick={force}>点击聚焦</button>
    </div>
  )
}

export default UseRef
