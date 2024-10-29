import React from 'react';
import './Css.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
