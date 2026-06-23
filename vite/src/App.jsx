import React from 'react'
import "./App.css"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'

const App = () => {
  const url = window.location.pathname;

  return (
    <div>
      {url === "/" && <Home />}
      {url === "/contact" && <Contact />}
      {url === "/about" && <About />}



      {/* <Header /> */}
      {/* <h1 className=''>Hello i am a H1 Heading</h1> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App