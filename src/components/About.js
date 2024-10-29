import React from 'react';
import './Css.css'; 
const About = () => {
  return (
    <div id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am a dedicated Full Stack Developer with a robust foundation in Java and extensive experience in building scalable
        applications using Spring Boot and ReactJS. My technical skills are comprehensive and include data management with MySQL
        and PostgreSQL, RESTful API development, and web development technologies such as HTML, CSS, and JavaScript.
      </p>
      <h3>Education</h3>
      <div className="education">
        <div className="education-item">
          <strong>B.Tech in Computer Science</strong>
          <span>Dronacharya Group of Institutions</span>
          <span>Greater Noida, Uttar Pradesh (Expected 07/2025)</span>
        </div>
        <div className="education-item">
          <strong>12th Grade</strong>
          <span>V.M. Inter College</span>
          <span>Gopalganj, Bihar (04/2020)</span>
        </div>
        <div className="education-item">
          <strong>10th Grade</strong>
          <span>V.M. High School</span>
          <span>Gopalganj, Bihar (04/2018)</span>
        </div>
      </div>
    </div>
  );
};

export default About;
