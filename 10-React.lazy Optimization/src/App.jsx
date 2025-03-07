import { lazy, Suspense } from "react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import P from "./components/P"

const C = lazy(()=>import('./components/C'))  //code spliter dont allow to load this page in intital on while need this is loaded

const router = createBrowserRouter([
  {
    path: '/', 
    element: <P/>
  },
  {
    path: '/C',
    element: <C/>
  },
])

const App = () => {

  return (
    <>
      <Suspense fallback={<h1>loading</h1>}>  {/* place holder till the code loads  here it is a ui as aplace holder   */}
        <RouterProvider router={router}/>
      </Suspense>
    </>
  )
}

export default App

