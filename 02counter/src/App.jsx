import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  
  const addValue = () => {
    setCount(count + 1);
  }
  const removeValue = () => {
    if(count){
      setCount(count-1);
    }
    
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {count} </h2>

      <button onClick={addValue}>Add value 1</button>
      <br />
      <br/>
      <button onClick={removeValue}>Remove value 1</button>
    </>
  )
}

export default App
