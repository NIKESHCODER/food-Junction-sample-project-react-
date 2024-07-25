import React from 'react';
import Footer from './Footer';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-section">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.</p>
          
          <h2>General Inquiries</h2>
          <p>Email: vermanikesh25@gmail.com</p>
          
          <h2>Customer Support</h2>
          <p>Email: food services@gmail.com</p>
          <p>Phone: +919661822471</p>
          
          <h2>Address</h2>
          <p>Office: m.k food services sitamarhi</p>
          <p>City: sitamarhi</p>
          <p>State: Bihar</p>
          <p>Zip Code: 843302</p>
          
          <h2>Social Media</h2>
          <p>Facebook: <a href="http://facebook.com/example">facebook.com/example</a></p>
          <p>Twitter: <a href="http://twitter.com/example">twitter.com/example</a></p>
          <p>LinkedIn: <a href="http://linkedin.com/company/example">linkedin.com/company/example</a></p>
        </div>
      </section>
      
      <Footer />
    </div>
  );  
}
