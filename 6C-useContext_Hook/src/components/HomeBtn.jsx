import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import {Link} from 'react-router-dom'


const HomeBtn = () => {

  const {user} = useContext(UserContext)  // accesing the user obj for availing the value
  
  
  if(!user) return (
    <div style={{ textAlign: "center" }}>
      <p> Not Verified </p>
    </div>
  )

  return (
    <div style={{ textAlign: "center" }}>
            <p >{user.userName} Verified✅{user.userPassword}</p>   {/*value accesssed*/}
            <Link to='/home'>Enter In </Link>
    </div>
  )
}

export default HomeBtn