import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Web Developer',
            company: 'UptoSkills',
            date: 'July 2024 - October 2024',
            description: 'Led a team in developing and enhancing the frontend components of web applications while also contributing to backend development using the MERN stack (MongoDB, Express.js, React.js, Node.js). Focused on optimizing user experience through responsive design and performance improvements, ensuring seamless integration between frontend and backend systems. Collaborated closely with team members to implement best practices in coding and project management.'

        },
    ];

    return (
        <div className="experience">
            <h2>My Experience</h2>
            <p>Here are some of the experiences I have worked on:</p>
            <ul>
                {experiences.map((exp, index) => (
                    <li key={index} className="experience-item">
                        <h3>{exp.title} at {exp.company}</h3>
                        <p><strong>{exp.date}</strong></p>
                        <p>{exp.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
