'use client'
import {useState} from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className="mb-4 text-center text-xl font-bold">
        Client Composant Counter
      </h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}
