import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Logistic API",
      description: "Developed a Logistic REST API using Spring Boot and PostgreSQL, enabling real-time tracking of loading and unloading activities. Implemented order and schedule management functionalities to streamline operations and enhance efficiency. Integrated inventory control features to manage stock levels effectively and ensure timely deliveries. Utilized route optimization algorithms to improve logistics planning and reduce transportation costs. Designed and implemented reporting features to provide insights into operational performance and facilitate decision-making.",
      link: "https://github.com/raviyd2/"
    },
    {
      title: "Library Management System",
      description: "A full-stack application for managing library resources using Spring Boot, REST API, HTML, CSS, and ReactJS. Optimized cataloging, circulation, acquisition, and inventory functions. Implemented full-stack solutions to enhance efficiency in managing library resources and improve user experience for staff and patrons alike. Utilized MySQL for robust data storage, ensuring seamless integration of library data and transaction records. Designed and implemented intuitive user interfaces to streamline operations and facilitate easy navigation and usage.",
      link: "https://github.com/raviyd2/library-management-system"
    },
    {
      title: "Portfolio",
      description: "We developed using ReactJs.",
      link: "https://github.com/raviyd2/my-porfolio"
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
