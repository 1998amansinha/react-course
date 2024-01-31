import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setCounter] = useState(10);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter <= 0){
      
    }else{
      setCounter(counter - 1)
    }
  }


  return (
    <>
     <h1>Aman Sinha</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={addValue}>Add Value </button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
