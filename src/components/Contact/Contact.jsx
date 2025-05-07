import React from 'react'
import cityDataRaw from '../../data/canadianCities.json';
import './Contact.css';
import msg_icon from '../../assets/Send-email.png';
import phone_icon from '../../assets/Phone.png';
import email_icon from '../../assets/Paper-Plane.png';
import address_icon from '../../assets/Location.png';
import instagram_icon from '../../assets/Instagram.png';
import x_icon from '../../assets/X.png';
import linkedin_icon from '../../assets/LinkedIn.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");
    const [selectedProvince, setSelectedProvince] = React.useState('');
    const [cities, setCities] = React.useState([]);

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending...");

      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      console.log(Object.fromEntries(formData.entries()));

      try {
        const response = await fetch("https://junkcycleca-production.up.railway.app/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });

        const resultData = await response.json();
        if (response.ok) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          setResult(resultData.message || "Submission failed.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setResult("An error occurred. Please try again later.");
      }
    };

  const cityData = Object.fromEntries(
    cityDataRaw.map(entry => [
      entry.Province,
      [...(entry.City || []), ...(entry.Town || [])]
    ])
  );

  return (
    <div className='contact'>
       <div className='contact-info'> 
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>We’re here to help with any questions or concerns you may have.
            Feel free to reach out to us via the listed contact details or give us a call.
            We look forward to hearing from you!
        </p>
            <ul>
                <li><img src={phone_icon} alt='Phone Icon' /><a href="tel:+14315568533">1-431-556-8533</a></li>
                <li><img src={email_icon} alt='Email Icon' /> <a href="mailto:contact@junkcycle.ca">contact@junkcycle.ca</a></li>
                <li><img src={address_icon} alt='Address Icon' /> <a href="https://maps.app.goo.gl/q2PM4D9rsM4HtaL49" target="_blank" rel="noopener noreferrer">Winnipeg, Manitoba, Canada</a></li> 
                <li><img src={instagram_icon} alt='Instagram Icon' /> <a href="https://www.instagram.com/hellojunkcycle/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><img src={linkedin_icon} alt='LinkedIn Icon' /> <a href="https://www.linkedin.com/in/junk-cycle-31ba82362" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><img src={x_icon} alt='X Icon' /> <a href="https://x.com/HelloJunkCycle" target="_blank" rel="noopener noreferrer">X</a></li> 
            </ul>
       </div>
       <div className='contact-info'>
        <h3>Join the Waitlist!!</h3>
        <form onSubmit={onSubmit}>
            <label><input type="text" name='firstname' placeholder='First Name' required autoComplete="given-name" pattern=".*\S.*" title="This field cannot be empty or contain only spaces" /></label>
            <label><input type="text" name='lastname' placeholder='Last Name' required autoComplete="family-name" pattern=".*\S.*" title="This field cannot be empty or contain only spaces" /></label>
            <label>
            <select name='role' required >
                <option value="" disabled selected>Select Role</option>
                <option value="Customer">Customer</option>
                <option value="Hauler">Hauler</option>
            </select>
            <select name='province' required onChange={(e) => {
              const province = e.target.value;
              setSelectedProvince(province);
              setCities(cityData[province] || []);
            }}>
                <option value="" disabled selected>Select Province</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
            </select>
            <select name='city' required disabled={!selectedProvince}>
              <option value="" disabled selected>Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            </label>
            <label> <input type="email" name='email' placeholder='Email Address' required autoComplete="email" /></label>
            <label><input type="tel" name='phone' placeholder='Phone Number' required autoComplete="tel" pattern="\d{10}" title="Please enter a valid 10-digit phone number" /></label>
            {/* <textarea name="message" id="" rows="6" placeholder='Message' required></textarea> */}
            <button type='submit' className='btn dark-btn'>Join the Waitlist<img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
