import React from 'react';
import Footer from './Footer';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="about-text">
          <h1>About Me Page</h1>
          <p>Welcome to the About Me page. Here you can find more information about me and my work.</p>
          
        </div>
        
      </section>

      <Footer />
    </div>
  );
}
