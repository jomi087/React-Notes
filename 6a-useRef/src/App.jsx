import { useEffect, useRef, useState } from "react"  

//using User Ref to interact with Dom
// function App() {
//   const x = useRef(null) //return  an object { current: null }  
//   console.log("x", x) // ouput   x = { current: null }   

//   function fun(){
//     console.log("x", x) // output=>   x = { current: input  }   now this input will be a object with it properties and methods  
//     console.log("x.current", x.current)  // output  <input placeholder="Type here..." type="text">
//     console.log(x.current.focus())
//     //  It works like getElementByTagName('input'), & the result will be same as abouve that means we can now manupulate input by DOM
//     //  by the help of react declarative  way 
//   }

//   return (
//     <div>
//       <input ref={x} type="text" placeholder="Type here..." />
//       <button  onClick={fun}>Focus Input</button>
//     </div>
//   )
// }

// Using useRef to store a value that persists across renders without causing re-renders
// function App() {
//   const x = useRef(0); // useRef returns { current: 0 }
//   const [count, setCount] = useState(0); // useState manages state and triggers re-renders
//   console.log("Rendered - x.current:", x.current, " | count:", count);

//   function fun() {

//     x.current++; // This changes the value without triggering a re-render
//     setCount(prev => prev + 1); // This triggers a re-render
//   }

//   return (
//     <div>
//       <h3>useRef value: {x.current}</h3>
//       <h3>useState value: {count}</h3>
//       <input onChange={fun} type="text" placeholder="Type here..." />
//     </div>
//   );
// }

export default App
 