import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value ={{user,setUser}}>  {/* .Provider is a built in method*/}
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider 


/*
# This is JSX file  because this module (like a Provider) acts as a wrapper.
*Creating the Provider Component :-
    * UserContextProvider is a component that will wrap other components and provide them with user data.
    * { children } → This is a special prop in React that represents whatever components are wrapped inside UserContextProvider.
    ? Where does children come from ? [in ReadMe]
* Creating State :- 
    * useState is required because You need to store and update the user data across different components.
* Returning the Provider :-
    * <UserContext.Provider> is providing (sharing) user and setUser to all child components.
    * value={{ user, setUser }} → Any component inside this provider can now access user and update it using setUser.
    * {children} → Ensures that all components inside UserContextProvider get access to the provided values.

#Summury
    * UserContextProvider allows { user, setUser } to be accessed by any nested component where it is wrapped.
    * Wrapping a component with UserContextProvider eliminates the need for prop drilling.
    * It is recommended to wrap only where necessary to avoid unnecessary re-renders.
    ! Components must use the useContext hook to access the provided data.
*/