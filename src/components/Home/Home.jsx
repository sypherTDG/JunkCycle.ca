// Home.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Title from '../Title/Title';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';
import Choose from '../Choose/Choose';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'waitlist') {
      const el = document.getElementById('waitlist');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="homepage">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <div className="container">
        <Title subtitle="TESTIMONIALS" title="What Our Client Say" />
        <Testimonials />
      </div>
      <Works />
      <Choose />
      <div className="container">
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;