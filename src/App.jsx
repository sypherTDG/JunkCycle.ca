import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Choose from './components/Choose/Choose'
import Works from './components/Works/Works'
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Countdown from './components/Countdown/Countdown'


const App = () => {
  return (
    <Router>

      {/* Define the routes for the application */}
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />

        {/* Admin Dashboard */}
        <Route path="/admin" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />


        {/* Countdown Page */}
        <Route path="/countdown" element={<Countdown targetDate="2025-07-01T00:00:00" />} />

      </Routes>
    </Router>
  );
};

export default App



// App.jsx section to connect home.jsx for the scroll functionality
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home/Home';
// import Countdown from './components/Countdown/Countdown';
// import AdminLogin from './pages/AdminLogin';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminRoute from './components/AdminRoute';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/countdown" element={<Countdown targetDate="2025-07-01T00:00:00" />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/admin" element={
//           <AdminRoute>
//             <AdminDashboard />
//           </AdminRoute>
//         } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;