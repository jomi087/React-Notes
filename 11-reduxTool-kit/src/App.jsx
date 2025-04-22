import React from 'react'
import Todo from './pages/Todo'
import AppStore from './store/AppStore'
import { Provider } from 'react-redux'


const App = () => {
  

  return (
    <>
      <Provider store={AppStore}> 
        <Todo/>
      </Provider>
    </>
  )
}

export default App