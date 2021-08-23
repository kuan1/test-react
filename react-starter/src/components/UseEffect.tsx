import React, {useEffect} from 'react'

function useDelayEffect(props: {time: number}) {
  const {time} = props
  useEffect(
    () => {
      console.log('onload')
    }, 
  [])
  useEffect(
    () => {
      const  timer = setTimeout(() => {
        console.log('delay effect')
      }, time)
      return () => clearTimeout(timer)
    },
    [time]
  )
}

const App = () => {
  useDelayEffect({time: 1000})
  return (
    <div>
      <h2>UseEffect</h2>
    </div>
  )
}

export default App
