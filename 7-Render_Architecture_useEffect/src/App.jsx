//!Notes given in ReadME
import {useEffect,useState} from 'react'
import './App.css'

function App() {
  
  //# Syntax => useEffect( effect: React.EffectCallback,  deps?: React.DependencyList): void

  //With out dependencies ==> will re-run/re-render use effect hook again when got re-rendered...[explain at read me]
  useEffect(()=>{       
    console.log("one")     
  });     

  /*  With dependencies
  useEffect(()=>{       
    console.log("one")    ==> will not re-run/re-render use effecthook again when got re-rendered...[explain at read me]
  },[]); 
  */   


  console.log("two")
  const [val,setval] = useState("") 

  return (
    <div className ="container">
      <h1>"Dummy loading  or Shimmer UI  "</h1>
      <input type="text" placeholder='enter somthing'  value={val}   onChange={(e)=>{ 
                console.log(e.target.value)
                return setval(e.target.value) 
            }  }  />   
      <p>{val.toUpperCase()}</p>
    </div>
  )
}

export default App

