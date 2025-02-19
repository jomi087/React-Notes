
import reactLogo from '../assets/react.svg'
const viteLogo = "/vite.svg"

import Footer from '../components/footer'



function Home() {
  return (
    <>
      <div>

        <a href="#" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>HOME PAGE</h2>
        <p>
          FROM JOMI PJ
        </p>
      </div>
      <p className="read-the-docs">
        Learn More about React in my GitHUB with brief explanation of Note 
      </p>
      <p className="read-the-docs">
        Credit's Go to Akshai-Saini "NAMASTE REACT" !
      </p>
      <Footer/>
    </>
  )
}

export default Home
