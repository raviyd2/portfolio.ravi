import React from 'react';

const skillsData = [
  { name: "Java", certUrl: "https://drive.google.com/file/d/1bDtB8b9HByaNfI4zEQN4Yae_3kJ6QCYV/view?usp=sharing" },
  { name: "JavaScript", certUrl: "" }, 
  { name: "HTML", certUrl: "" },
  { name: "CSS", certUrl: "" }, 
  { name: "Python", certUrl: "https://www.credly.com/badges/449d013a-8424-415e-829f-e325ed91b06e/linked_in_profile" },
  { name: "Spring Boot", certUrl: "" },
  { name: "ReactJS", certUrl: "" },
  { name: "MySQL", certUrl: "" },
  { name: "PostgreSQL", certUrl: "" },
  { name: "Rest API", certUrl: "" },
  { name: "Data Structures & Algorithms", certUrl: "" },
  { name: "Operating Systems", certUrl: "" },
  { name: "Database Management System (DBMS)", certUrl: "" },
  { name: "OOPS Concept", certUrl: "" },
  { name: "AWS", certUrl: "https://www.credly.com/badges/c7f991e8-d0a9-45fb-a448-4cbffb84c0f2/public_url"}
 
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill.certUrl ? (
              <a href={skill.certUrl} target="_blank" rel="noopener noreferrer">
                {skill.name}
              </a>
            ) : (
              <span>{skill.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
