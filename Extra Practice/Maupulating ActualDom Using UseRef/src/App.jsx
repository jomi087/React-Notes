import {useState,useEffect,useRef} from 'react'
import './App.css'

const App = () => {
  const divRef = useRef(null);

  const changeColor = () => {
     console.log(divRef.current.style.backgroundColor )
    if(divRef.current.style.backgroundColor == "lightblue"){
      divRef.current.style.backgroundColor = "red"
    }else{
      divRef.current.style.backgroundColor = "lightblue"
    }
  };

  return (
    <div ref={divRef} style={{ padding: "20px", backgroundColor: "red" }}>
      <p>Click the button to change background color</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}


export default App
