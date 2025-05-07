import React, { useRef } from 'react'
import './Testimonials.css';
import user_1 from '../../assets/user1.png';
import user_2 from '../../assets/user2.png';
import user_3 from '../../assets/user3.png';
import user_4 from '../../assets/user4.png';
import next_icon from '../../assets/white-arrow.png';
import prev_icon from '../../assets/Left-Arrow.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

// const slideBackward = () => {
//     if (tx >= 0) {
//         tx = -100 + 200 / slider.current.children.length;
//     } else {
//         tx += 200 / slider.current.children.length;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`;
// };
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
// const slideFoward = () => {
//     if (tx <= -100 + 200 / slider.current.children.length) {
//         tx = 0;
//     } else {
//         tx -= 200 / slider.current.children.length;
//     }
//     slider.current.style.transform = `translateX(${tx}%)`;
// };


return (
    <div className='testimonials '>
            <img src={next_icon} className='next-btn' alt="next" onClick=
            {slideFoward} />
            <img src={prev_icon} className='prev-btn' alt="prev" onClick=
            {slideBackward} />
            <div className="slider">
                    <ul ref={slider}>
                            <li>
                                    <div className='slide'>
                                            <div className='user-info'>
                                                    <img src={user_1} alt="user" />
                                                    <div>
                                                            <h3>Chidi O.</h3>
                                                            <span>Contractor</span>
                                                    </div>
                                            </div> 
                                            <p>“JunkCycle made waste management seamless — faster pickups, lower costs, and everything organized.”</p>
                                    </div>
                            </li>
                            <li>
                                    <div className='slide'>
                                            <div className='user-info'>
                                                    <img src={user_2} alt="user" />
                                                    <div>
                                                            <h3>Kirra R.</h3>
                                                            <span>Homeowner</span>
                                                    </div>
                                            </div> 
                                            <p>"I appreciate being able to book a pickup easily and knowing it’s handled responsibly every time."</p>
                                    </div>
                            </li>
                            <li>
                                    <div className='slide'>
                                            <div className='user-info'>
                                                    <img src={user_3} alt="user" />
                                                    <div>
                                                            <h3>Brian T.</h3>
                                                            <span>Hauler</span>
                                                    </div> 
                                            </div> 
                                            <p>“Being part of this system ensures steady work and a stress-free way to connect with clients.”</p>
                                    </div>
                            </li>
                            <li>
                                    <div className='slide'>
                                            <div className='user-info'>
                                                    <img src={user_4} alt="user" />
                                                    <div>
                                                            <h3>Ming L.</h3>
                                                            <span>Shop Owner</span>
                                                    </div> 
                                            </div> 
                                            <p>“The ease of organizing pickups and knowing everything is handled responsibly is fantastic.”</p>
                                    </div>
                            </li>
                    </ul>
            </div>
    </div>
)
}

export default Testimonials
