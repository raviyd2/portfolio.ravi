import React from 'react';
import './Css.css'; // Ensure your CSS is imported

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
            <div className="social-links">
                    <a href="https://github.com/raviyd2" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/raviyd" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <p>&copy; 2024 Ravi Kumar. All rights reserved.</p>
                
            </div>
        </footer>
    );
};

export default Footer;
