import React from 'react';
import profileImage from '../assets/profile.jpg'; 
import About from '../pages/About';
import Project from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import Header from './Header';
import './Css.css';
import Experience from './Experience';

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div id="home" className="home">
        <div className="home-content">
          <div className="image-container">
            <img src={profileImage} alt="Profile" className="profile-image" /> 
          </div>
          <div className="text-container">
            <h1>Welcome to My Portfolio!</h1>
            <h2>I'm Ravi Kumar</h2>
          </div>
        </div>
      </div>
      <About />
      <Project />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
