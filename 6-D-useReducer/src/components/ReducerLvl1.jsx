import React, { useReducer } from 'react'

const reducer = (i , j )=>{   // i = CurrentState  , j = action 
  console.log("CurrentState =>",i) //(1st the value will be InstialState then it will updated  like accumilator in reducer )
  console.log("action =>", j )
  
  if( j == "increase"){
    return i + 1
  }else if( j == "decrease"){
    return i - 1 
  }
}
const intialState = 0

const ReducerLvl1 = () => {
    
      const [count , dispatch ] = useReducer(reducer,intialState) // count is "i" ie, currentState & dispatch is a function in where we pass any logic which will be recived in j ie action 
      return (
        <>
          <button onClick={()=>dispatch("increase")}>Increase</button>
          <p>{count}</p>
          <button onClick={()=>dispatch("decrease")} >Decrease</button>
        </>
      )
}

export default ReducerLvl1