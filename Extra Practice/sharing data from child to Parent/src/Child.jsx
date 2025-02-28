import React, { useEffect } from 'react'

const Child = ({data}) => {
    console.log(data)
    useEffect(()=>{

        data("B")
    },[])
  

  return (
    <>
        <h2>Child</h2>
        

    </>
  )
}

export default Child