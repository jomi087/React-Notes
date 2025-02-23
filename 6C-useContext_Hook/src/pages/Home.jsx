import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Home = () => {
  const {user} = useContext(UserContext)

  return (
    <div style={{display :"flex" , justifyContent :"center" , alignItems:"center",height:"70vh"}}>
        <h1  style={{textAlign:"center"}} > Welcom Home : {user.userName}</h1>
    </div>
  )
}

export default Home