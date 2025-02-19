//Controlled Component

import {useState} from 'react'
import './App.css'



function App() {

const [useValue , setValue] = useState('')

  return (
    <div>
      <input type="text" value={useValue} onChange={(e)=>{setValue(e.target.value)} }/>
      <button onClick={()=>console.log(useValue)}>Submit</button>
    </div>
  )
}

export default App
