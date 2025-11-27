import React from 'react'
import '../components/Hiro.css'
import dark_arrow from '../assets/dark-arrow.png'

const Hiro = () => {
  return (
    <div className='hiro container'>
        <div className='hiro-text'>
            <h1>We Ensure Better Education For a Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in 
                the dynamic field of education.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>

        </div>
      
    </div>
  )
}

export default Hiro
