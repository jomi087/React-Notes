import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(App())

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  {/* This is creating an instance of a class (cz of class component) */}
  </StrictMode>,
)
