import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-container">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Hello, I’m Mohamed Fazil, a frontend developer passionate about building responsive and user-focused web applications. I specialize in creating clean, visually appealing interfaces using modern technologies like React.js and JavaScript.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I focus on delivering well-structured, performant, and intuitive user experiences across different devices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I also have a basic understanding of backend technologies and MySQL, which enables me to collaborate effectively in full-stack development environments.
          </motion.p>
        </div>

        <motion.div 
          className="about-identity"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div 
            className="identity-card glass"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-header">
              <div className="avatar-circle">MFG</div>
              <h3>Mohamed Fazil</h3>
              <p className="role">Frontend Developer</p>
            </div>
            
            <div className="card-content">
              <div className="info-group">
                <label>Specialization</label>
                <ul>
                  <li>React.js Interfaces</li>
                  <li>Responsive UI Development</li>
                  <li>Clean Code Practices</li>
                </ul>
              </div>

              <div className="info-group">
                <label>Status</label>
                <div className="status-badge">
                  <span className="pulse-dot"></span>
                  Open to Job Opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
