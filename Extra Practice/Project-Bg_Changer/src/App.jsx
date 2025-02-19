import {useState} from 'react'

function App() {
  const [color, setColor] = useState("greenyellow")

  return (
    <>
     <div className={`container ${color}`}>
        <button  onClick={()=>setColor("red")}>red</button>
        <button  onClick={()=>setColor("green")} >green</button>
        <button  onClick={()=>setColor("blue")} >blue</button>
     </div>
    </>
  )
}

export default App


/* //#   Another easy way 
  function App() {
    const [bgColor, setBgColor] = useState("white");

    return (
      <div className="app-container" style={{ backgroundColor: bgColor }}>
        <h1>Background Changer</h1>
        <div className="btn-container">
          <button onClick={() => setBgColor("red")} className="red">Red</button>
          <button onClick={() => setBgColor("blue")} className="blue">Blue</button>
          <button onClick={() => setBgColor("green")} className="green">Green</button>
          <button onClick={() => setBgColor("yellow")} className="yellow">Yellow</button>
          <button onClick={() => setBgColor("purple")} className="purple">Purple</button>
          <button onClick={() => setBgColor("white")} className="reset">Reset</button>
        </div>
      </div>
    );
  }

  //#Css
  star{
    margin: 0px;
    padding: 0px;
  }

  .app-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  .btn-container {
    display: flex;
    gap: 10px;
    margin-top: 20px;

  }

  button {
    padding: 10px 15px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    color: rgb(0, 0, 0);
    border-radius: 5px;
    transition: opacity 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }
  
*/


