import React, { useRef } from 'react'
import './Choose.css'
// import choice_1 from '../../assets/choose1.png';
// import user_2 from '../../assets/user2.png';
// import user_3 from '../../assets/user3.png';
import next_icon from '../../assets/white-arrow.png';

import prev_icon from '../../assets/Left-Arrow.png';

const Choose = () => {

    const slider = useRef();
    let tx = 0;
    
const slideBackward = () => {
    if (tx >= 0) {
        tx = -100 + 100 / slider.current.children.length;
    } else {
        tx += 100 / slider.current.children.length;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
};


const slideFoward = () => {
    if (tx <= -100 + 100 / slider.current.children.length) {
        tx = 0;
    } else {
        tx -= 100 / slider.current.children.length;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
};
    

  return (
    <div className='choose-main'>
    <h3>Why Choose</h3>
    <h2>JunkCycle</h2>
    <div className='choose'>
      <img src={next_icon} className='next' alt="next" onClick=
      {slideFoward} />
      <img src={prev_icon} className='prev' alt="prev" onClick=
      {slideBackward} />
        {/* <p>WHY CHOOSE</p>
        <h2>JunkCycle</h2> */}
      <div className="choice-slider">
          <ul ref={slider}>
              <li>
                  <div className='choice-slide'>
                      <div className='choice-info'>
                          {/* <img src={choice_1} alt="user" /> */}
                          <div className='choice-text'>
                              <h3>Transparent pricing</h3>
                              <p>We offer competitive pricing and flexible scheduling options to accommodate your needs. Our commitment to eco-friendly practices means that we recycle items whenever possible, reducing waste and helping the environment.</p>
                          </div>
                      </div> 
                  </div>
              </li>
                <li>
                  <div className='choice-slide'>
                      <div className='choice-info'>
                          {/* <img src={choice_1} alt="user" /> */}
                          <div className='choice-text'>
                              <h3>Real-time matching & tracking</h3>
                                <p>Experience seamless coordination with our real-time matching and tracking system, ensuring efficient service and complete transparency throughout the process.</p>
                          </div>
                      </div> 
                  </div>
              </li>
                <li>
                  <div className='choice-slide'>
                      <div className='choice-info'>
                          {/* <img src={choice_1} alt="user" /> */}
                          <div className='choice-text'>
                              <h3>Support for independent haulers</h3>
                                <p>We are committed to supporting independent haulers by providing them with the tools and resources they need to succeed in the junk removal industry.</p>
                          </div>
                      </div> 
                  </div>
              </li>
              <li>
                  <div className='choice-slide'>
                      <div className='choice-info'>
                          {/* <img src={choice_1} alt="user" /> */}
                          <div className='choice-text'>
                              <h3>National reach with local impact</h3>
                                <p>We are a nationwide junk removal service with a local touch, providing personalized service and support to our customers while making a positive impact in their communities.</p>
                          </div>
                      </div> 
                  </div>
              </li>
              <li>
                  <div className='choice-slide'>
                      <div className='choice-info'>
                          {/* <img src={choice_1} alt="user" /> */}
                          <div className='choice-text'>
                              <h3>Helping build a greener, circular Canada</h3>
                                <p>We are committed to building a greener, circular Canada by promoting sustainable practices and reducing waste through our eco-friendly junk removal services.</p>
                          </div>
                      </div> 
                  </div>
              </li>
          </ul>
      </div>
    </div>
    </div>
  )
}

export default Choose

        // <p>We are a reliable and efficient junk removal service that prioritizes customer satisfaction. Our team is dedicated to providing fast and friendly service, ensuring that your junk is removed quickly and safely.</p>
        // <p>We offer competitive pricing and flexible scheduling options to accommodate your needs. Our commitment to eco-friendly practices means that we recycle and donate items whenever possible, reducing waste and helping the environment.</p>
        // <p>With our experienced team and top-notch equipment, you can trust us to handle any junk removal job, big or small. Choose us for a hassle-free experience and peace of mind.</p>