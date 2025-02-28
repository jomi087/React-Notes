import React, { useRef , useContext } from 'react'
import HomeBtn from '../components/HomeBtn'
import UserContext from '../context/UserContext'

const Login = () => {
    const userInputRef  = useRef(null)
    const passwordInputRef = useRef(null)

    const {setUser} = useContext(UserContext)   //accessing  the context value provided by UserContextProvider.
    // console.log(useContext(UserContext))

    const someLogic= (e)=>{
        let userName = userInputRef.current.value
        let userPassword = passwordInputRef.current.value
        setUser({userName,userPassword}) // added value / updates the user state inside UserContextProvider with a new object.

    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
            <div style={{ border: "2px solid red", padding: "20px" }}>
                <label htmlFor="name">UserName &nbsp;</label>
                <input ref={userInputRef} type="text" id="name" />
                <br /> <br />
                <label htmlFor="password">Password &nbsp; &nbsp;</label>
                <input ref={passwordInputRef} type="text" id="password" />
                <br/><br/>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button onClick={someLogic}>Submit</button>
                </div>
                <HomeBtn />
            </div>
        </div>

  )
}

export default Login