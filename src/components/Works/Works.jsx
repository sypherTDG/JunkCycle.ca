import React from 'react'
import './Works.css';
import stepicon1 from '../../assets/1.png';
import stepicon2 from '../../assets/2.png';
import stepicon3 from '../../assets/3.png';
import stepicon4 from '../../assets/4.png';

const Works = () => {
  return (
     <div className='works-main'>
                <h3>How it Works</h3>
                <h2>One Step at a Time</h2>
            <div className='works container'>
                <div className="work">
                    <div className="caption1">
                        <img className='icon'  src={stepicon1} alt="" />
                        <p className='p1'>Request a Pickup</p>
                        <p className='pp'>Schedule your pickup , specifying your needs and location.</p>
                    </div>
                </div>
                <div className="work">
                    <div className="caption1">
                        <img className='icon'  src={stepicon2} alt="" />
                        <p className='p1'>Get Matched</p>
                        <p className='pp'>Our system matches you with available haulers in your area.</p>
                    </div>
                </div>
                <div className="work">
                    <div className="caption1">
                        <img className='icon'  src={stepicon3} alt="" />
                        <p className='p1'>Confirm Details</p>
                        <p className='pp'>Review hauler ratings, pricing, and confirm your booking.</p>
                    </div>
                </div>
                <div className="work">
                    <div className="caption1">
                        <img className='icon' src={stepicon4} alt="" />
                        <p className='p1'>Track & Complete</p>
                        <p className='pp'>Track your pickup in real-time and rate your experience when complete."</p>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Works
