import {useState, FunctionComponent} from 'react'

interface Props {
  defaultValue:number
}

const Counter:FunctionComponent<Partial<Props>> = (props) => {
  const [count, setCount] = useState<number>(props.defaultValue!)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>点击次数{count}</button>
    </div>
  )
}

Counter.defaultProps = {
  defaultValue: 1
}

export default Counter
