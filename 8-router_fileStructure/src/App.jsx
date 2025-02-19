import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Error from './pages/errorpage'
import NotFound from './pages/pageNotFound'

import Layout from './components/layout'
import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//createBrowserRouter() //takes 1 argument which is  an array of route objects.with path (route) and element (component)
const appRouter = createBrowserRouter([ 
  {
    path: "/",
    element: <Layout/>,    //  Layout wraps all pages and outlet Renders the matching child route of a parent route or nothing if no child route matches
    errorElement : <Error/>, 
    children : [
      {
        path: "/",
        element: <Home/>,
  
      }, 
      {
        path: "/contact",
        element: <Contact />,

      },
      {
        path : "/about",
        element : <About/>,
      },
      {
        path : "*",   //this for handling undefined routes
        element : <NotFound/>, 
      }
    ]
  }

]) 
//console.log(appRouter) //obj

function App() { 
  return <RouterProvider router={appRouter} />  //RouterProvider is an built in componet in react-router-dom library
  //RouterProvider makes the appRouter available to the app.It ensures the correct component is shown based on the current URL.
}

export default App; 
