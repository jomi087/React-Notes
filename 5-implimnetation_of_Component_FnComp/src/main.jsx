// i have delete some files  to make it understandable will lern the actual order 

/* //! IMPOPRTANT POINT TO BE NOTED 
  In actual implimentation we cant write the code in this file, we will be writing in app.jsx file and import it here
  cz to avoid complexity i have written the code here
  there for i have additionly added a export to avoid a refresh error in actual implimentation we dont need to add export  in actual implimentation
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

let arr = [1,2,3]
//react element 
let para = <p className = "para" >random text....</p> // creating an element in react 
console.log("para",para) 

//React function component
function AnotherComponent(){ //an example of composition component  // deffinition in readme.md 
  return <h4>This is a componant</h4>
}

//React function component with props
function AnotherComponentWithProps(props){ 
  console.log(props) // This is an object ie , props = {name: "Jomi", age: 22} 
  return <h4>This is a my name {props.name} and this is my {props.age}</h4>
}


//STARTS FROM HERE 
//React function component
export function FunctionComponent(){   //pascal case must be used for function name
  return ( 
    <div>

      <h1>This is a  Function Component !!</h1>
      <p className = "test"> class should be mentioned as className</p>  

      {/*//# Provided 3 Example, This is how we write js code in jsx */} 
        <p>my name is {"Jomi"}</p> 
        {2+3} 
        {para}
        {arr} 

        {/* //!  Each child in a list should have a unique "key" /*}

        {/* {arr.map((item) => <p>{item}</p>)} */}  
        {/*  Aslo the above code will give a warnign in console to add key  */}

        {arr.map((item,index) => <p key={index}>{item}</p>)} 
        {/* This is how its done & Use a unique id if available, instead of index */}
        {/* why key ? => deffined in readMD */}
        
      
      {/*//# Given below is 3 ways  we use another component inside a component which also known as component composition*/} 
        <AnotherComponent />
        <AnotherComponent></AnotherComponent>
        {AnotherComponent()}

      {/*//# passing props to the component (props menas properties they are like arguments in function)*/}
        <AnotherComponentWithProps name = "Jomi" age = {22} />

    </div>
  
  ) //* () parenthesis is used to return multiple elements this make esbuild to understand were jsx starts and ends
}  //*  so  (compnent) function is defined now we need to render it for that we have to invoke it

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FunctionComponent/>  {/* This is how we invoke the component this also know as self closing tag */}
  </StrictMode>
)

