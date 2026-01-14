import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter">{count}</div>
        <div className="buttons">
          <button className="btn btn-decrement" onClick={decrement}>-</button>
          <button className="btn btn-reset" onClick={reset}>Reset</button>
          <button className="btn btn-increment" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  )
}

export default App
