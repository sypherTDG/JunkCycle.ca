import React from 'react'
import './About.css';
import about_img from '../../assets/about.png';

const About = () => {
  return (
    <div className='about container'>
        <div className='about-left'>
            <img src={about_img} className="about_img" />
        </div>
        <div className='about-right'>
            <h3>About Us</h3>
            <h2>Welcome to JunkCycle!</h2>
            <p>JunkCycle is a community-focused, environmentally driven platform
            that merges everyday waste needs with long-term sustainability goals. 
            We’re not just a junk pickup service — we’re building a connected 
            circular economy that scales from local neighbourhoods to the 
            entire nation.</p>
            <p>Our Mission: To simplify responsible waste management, empower 
            local haulers, reduce landfill dependence, and support Canada’s environmental
            future through innovative tech.</p>
            <p>Vision: To lead Canada’s shift toward a circular, zero-waste economy by 
            connecting individuals, haulers, and businesses through smart waste technology.</p>
            <p>We are a team of passionate individuals dedicated to making a positive impact
            on the environment and our communities. Our platform connects users with local haulers,
            making it easier than ever to dispose of unwanted items responsibly.</p>
            <p>Join us in our mission to create a cleaner, greener future for all. Together,
            we can make a difference!</p>
            <p>Thank you for choosing JunkCycle!</p>
        </div>
    </div>
  )
}

export default About
