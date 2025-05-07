import React, { useEffect } from 'react'; // Ensure React and useEffect are imported
import './Navbar.css';
import logo from '../../assets/JunkCycle-Logo1.svg';
import { Link, Element } from 'react-scroll';
import menu from '../../assets/Menu.png';

const Navbar = () => {
  // Logic function to add sticky class to navbar (enables changing navbar during scroll)
  const [sticky, setSticky] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  },[]);

  const [mobileMenu, setMobileMenu] = React.useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
    return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}> {/* Fixed template literal */}
      <img src={logo} alt="JunkCycle Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
        <li><Link to='services' smooth={true} offset={-250} duration={500}>Services</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li><Link to='choose' smooth={true} offset={-250} duration={500}>Choose Us</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={500} className="btn">Join Waitlist</Link></li>
      </ul>
      <img src={menu} className='menu-icon' alt="" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar;




// import React, { useState, useEffect } from 'react';
// import './Navbar.css'; // Import your CSS file
// import logo from '../../assets/JunkCycle-Logo.svg'; // Correct the file paths
// import { Link, Element } from 'react-scroll'; // Import Element if you are going to use it
// import menu from '../../assets/Menu.png'; // Correct the file paths

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   const [isOpen, setIsOpen] = useState(false); // Add state for menu open/close

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggle = () => {
//     setIsOpen(!isOpen); // Toggle the menu state
//   };

//   return (
//     <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
//       <img src={logo} alt="JunkCycle Logo" className="logo" />
//       <ul className={isOpen ? 'menu-open' : 'menu-closed'}> {/* Added conditional class */}
//         <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
//         <li><Link to="about" smooth={true} offset={-100} duration={500}>About us</Link></li>
//         <li><Link to="services" smooth={true} offset={-250} duration={500}>Services</Link></li>
//         <li><Link to="testimonials" smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
//         <li><Link to="choose" smooth={true} offset={-250} duration={500}>Choose</Link></li>
//         <li><Link to="contact" smooth={true} offset={0} duration={500} className="btn">Join Waitlist</Link></li>
//       </ul>
//       <img src={menu} className="menu-icon" alt="" onClick={toggle} />
//     </nav>
//   );
// };

// export default Navbar;
