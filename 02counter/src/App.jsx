import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15

  let [ counter, setCounter ] = useState(15)

  const addValue = () => {
    if(counter >= 20){
      setCounter("Limit Exceed");
    }else{
      counter = counter + 1;
      setCounter(counter);
    }
  }

  const decreaseValue = () => {
    if(counter <= 15){
      setCounter("Not Authorized");
    }else{
      counter = counter-1;
      setCounter(counter)
    }
  }


  return (
   <>
   <h1>Chai aur React</h1>
   <h2>Counter Value : {counter}</h2>

   <button onClick={addValue}>Add Value</button>
   <br />
   <button onClick={decreaseValue}>Decrease Value</button>
   </>
  )
}

export default App
