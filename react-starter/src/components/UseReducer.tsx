import React, { useReducer } from 'react'

import {reducer, initialState} from '../reducer'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({type: 'increment', payload: 1})
  }
  const decrement = () => {
    dispatch({type: 'decrement', payload: 1})
  }

  return (
    <div>
      <h2>useReducer{state.count}</h2>
      <div>
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>减少</button>
      </div>
    </div>
  )
}

export default App