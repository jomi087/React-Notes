import ErrorBoundary from "./components/ErrorBoundary"


import Layout from "./components/Layout"
import UserContextProvider from "./context/ProvideUserContext"
import Home from "./pages/Home"
import Login from "./pages/Login"

import {createBrowserRouter ,RouterProvider } from 'react-router-dom'

const App = () => {
  const Router = createBrowserRouter([
    {
      path:'/',
      element :  <Layout/>,
      children:[
        {
          path:'/',
          element :  <Login/>
        }
        ,{
          path:'/home',
          element :  <Home/>
        }
    
      ]
    }
  ])

    return (
      <UserContextProvider> {/* this how to wraper a component */}
         <RouterProvider router={Router}/> 
      </UserContextProvider>
       
    )
}

export default App