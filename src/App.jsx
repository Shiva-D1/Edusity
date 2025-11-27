import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hiro from './components/hiro'
import Programs from './components/Programs'
import Title from './components/Title'
import About from './components/About'
import Campus from './components/Campus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Videoplayer from './components/VideoPlayer/Videoplayer'

const App = () => {
  const [playState,setPlayState] = useState(false); 



  return (
    <div>
      <Navbar/>
      <Hiro/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials/>
        <Title subTitle='Contact us' title='Get In Touch' />
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
