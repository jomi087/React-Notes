
// This version (object state) is better because:

// Scalability → You can manage multiple state values inside the object.
// Best practice → Uses an action object ({ type: "increase" }), which follows the standard reducer pattern.
// Easier to extend → You can add more properties without changing much.

import React, { useReducer } from 'react'

const intialState = {
    firstcount : 0
}


const reducer = (CurrentState , action )=>{   

    console.log("CurrentState =>",CurrentState)  ; console.log("action =>", action )

    if( action.type == "increase"){ 
        // console.log({firstcount : CurrentState.firstcount + 1});
        return {firstcount : CurrentState.firstcount + 1}
    }else if( action.type == "decrease"){
        return {firstcount : CurrentState.firstcount - 1 }
    }

}

const ReducerLvl2 = () => {
    
    const [count , dispatch ] = useReducer(reducer,intialState) // count is "i" ie, currentState & dispatch is a function in where we pass any logic which will be recived in j ie action 
    console.log("count",count)
    return (
    <>
        <button onClick={()=>dispatch({type:"increase"})}>Increase</button>
        <p>{count.firstcount}</p>
        <button onClick={()=>dispatch({type:"decrease"})} >Decrease</button>
    </>
    )
}

export default ReducerLvl2