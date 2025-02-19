//!simple and basic implimentation of JSX in react
import  ReactDOM  from 'react-dom/client'  

let heading = (<h1>hlo world 1</h1>) ; 
let root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(heading)




//! vite has its own way which is given below 
/*
  import { StrictMode } from 'react'             //warns about these deprecated methods
  import { createRoot } from 'react-dom/client'  //React 18 has no default export that's why we have to use destructuring 

  let heading = <h1>hlo world 2</h1>;
  createRoot(document.getElementById('root')).render(
    <StrictMode>               //cz  of StrictMode  JSX treats "heading" as plain text, not as the variable you defined (in line number 16).
      {heading}                //To use the heading variable inside <StrictMode>, you must use curly braces:
    </StrictMode>
  )
*/