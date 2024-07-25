import React from 'react';
import './Footer.css';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Programs</h3>
          <ul>
            <li><a href="#">open 9am to 6pm</a></li>
            <li><a href="#">One to One</a></li>
            <li><a href="#">on time</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Service</h3>
          <ul>
            <li><a href="#">online booking</a></li>
            <li><a href="#">on time delicerd</a></li>
            
          </ul>
        </div>
        
        <div className="footer-section foodservice ">
          <h3>FoodServies</h3>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
          <div className="social-media">
            <a href="#"><img src="whatsapp-icon.png" alt="WhatsApp" /></a>
            
          </div>
          <p>Mobile: +919661822471</p>
          <p>Email: vermanikesh25@gmail.com.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 foodservies.com</p>
        <div className="footer-links">
          
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cancellation & Refund Policy</a>
          <a href="#">Shipping & Delivery Policy</a>
        </div>
      </div>
    </footer>
  );
}
