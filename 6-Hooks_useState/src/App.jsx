import {useState} from 'react';

import './App.css'

const App = ()=>{

  let [count , setcount] = useState(0) 
  const incriment = ()=>{
    //setcount(count+1)   /* This may cause issues because React does not update state immediately so, If you call setCount multiple times in a single render, it won't see the latest update because count is not updated yet.setCount (prevCount => prevCount + 1) is better way because it always uses the latest state, even if React has not updated it yet.Always prefer the function form (prevCount => prevCount + 1) when updating state based on the previous value.[This is important when multiple state updates happen in the same render.]*/
    setcount(priCount=>priCount+1)
  }

  const decriment = ()=>{
    setcount(priCount=>priCount-1)
  }

  return (
    <div className = "container">
      <button onClick = {decriment} >-</button>
      <p>{count}</p>
      <button onClick = {incriment} >+</button>
    </div>
  )
}

export default App
