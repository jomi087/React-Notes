import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [value,setValue] = useState("A")
    
    function callbackFunction(valueFromChildcomp){ // definition which takes a parameter 
        console.log("testing",valueFromChildcomp)
        setValue(valueFromChildcomp)
    }

   
    return (  
        <>
            <h1>Parent</h1>
            <p>data =&gt; {value}</p>
            <Child data={callbackFunction}/> {/* passing function to child whicb is a call back function */}
        </>
    )

  
}

export default Parent