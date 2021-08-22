import {useState} from 'react'

interface Props {
  defaultValue:number
}

export default function Counter(props: Props) {
  const [count, setCount] = useState<number>(props.defaultValue)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击次数{count}</button>
    </div>
  )
}

Counter.defaultProps = {
  defaultValue: 1
}