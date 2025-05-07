import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'
import green_arrow from '../../assets/Green-Arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-content'>
            <h1 className='header1'>Smart Waste. </h1>
            <h1 className='header2'>Circular Solutions.</h1>
            <h1 className='header3'>Nationwide.</h1>
            <p>Connecting individuals, businesses, and haulers across Canada in a cleaner, smarter way to manage waste.</p>
            <Link to='contact' smooth={true} offset={0} duration={500} className='btnn'>Request a Pickup <img src={green_arrow}></img></Link>
            <Link to='about' smooth={true} offset={-100} className='btn'>Explore <img src={white_arrow}></img></Link>
            <p className='ps'>Built in Manitoba. Made for all of Canada</p>
            <div className='ps2'>
              </div>
        </div>
    </div>
  )
}

export default Hero