import { useEffect, useState } from "react";
import "./Countdown.css"; 
import logo from '../../assets/JunkCycle-Logo1.svg';
// import { Link } from "react-scroll"; // Ensure you have react-scroll installed
import { Link, useNavigate } from "react-router-dom"; // Use this if you want to link to a different route
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

/**
 * Countdown component that displays a countdown timer to a specified target date.
 * It updates every second and shows the remaining days, hours, minutes, and seconds.
 *
 * @param {Object} props - The component props.
 * @param {string} props.targetDate - The target date in ISO format (e.g., "2025-07-01T00:00:00").
 */



export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const navigate = useNavigate();

  const handleJoin = () => {
    navigate('/home');
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const distance = new Date(targetDate) - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    };

    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="countdown-header">
        <Header />
      </div>
      <div className="countdown-content">
        <h1>Countdown to Pre-Launch</h1>
        <div className="timer">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
        <p>Join the waitlist to be among the first to try the app!</p>
        <button onClick={handleJoin} className="cta-button">Join Waitlist</button>
      </div>

      <div className="countdown-footer">
        <Footer />
      </div>
    </div>
  );
}
