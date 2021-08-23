import React, {useState, useEffect, useCallback} from 'react'

function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)

  const load = useCallback(
    (fn: () => Promise<any>) => {
      setLoading(true)
      fn().finally(() => {
        setLoading(false)
      })
    },
    [],
  )

  return [loading, load] as const
}

function fetchData() {
  return new Promise(resolve => setTimeout(resolve, 1000, 1000))
}


const CustomHooks = () => {
  const [loading, load] = useLoading()

  useEffect(() => {
    load(fetchData)
  }, [load])

  return (
    <div>
      <h2>customer hooks</h2> 
      <p>{loading ? 'loading' : 'loaded'}</p>
    </div>
  )
}

export default CustomHooks
