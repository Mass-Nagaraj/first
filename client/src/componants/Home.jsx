import React from 'react'
import "./Home.css";
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'
import Img3 from '../assets/img3.jpg'

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>Travel</h1>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Discounts</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Booking</a></li>
          </ul>
        </div>
        <div className="signup">
          <a href="#">Sign Up</a>
        </div>
      </div>

      <div className="body">
        <div className="heading">
          <h1>Travel With Us</h1>
          <br />
          <p>
            A greet and warmful welcome to you all, enjoy your every moment with us.
            Thank you for giving your precious time to enjoy with us.
          </p>
          <br />
          <br />
          <a href="#">Learn More</a>
        </div>

        <div className="tours">
          <div className="places">
            <h2>Australia</h2>
            <img src={Img1} alt="Australia" style={{ width: '300px', height: '250px', borderRadius: '12px' }} />
            <br />
            <br />
            <a href="#">Book Now 15% OFF</a>
          </div>
          <div className="places">
            <h2>New York</h2>
            <img src={Img2} alt="New York" style={{ width: '300px', height: '250px', borderRadius: '12px' }} />
            <br />
            <br />
            <a href="#">Book Now 20% OFF</a>
          </div>
          <div className="places">
            <h2>Thailand</h2>
            <img src={Img3} alt="Thailand" style={{ width: '300px', height: '250px', borderRadius: '12px' }} />
            <br />
            <br />
            <a href="#">Book Now 25% OFF</a>
          </div>
        </div>
      </div>

      <div className="footer">
        <a href="#">Copyright</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">Complaints</a>
      </div>
    </div>
  );
}

export default Home
