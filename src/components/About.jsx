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
            Hello, I’m Mohamed Fazil G, a frontend developer passionate about building responsive and user-focused web applications. I specialize in creating clean, visually appealing interfaces using modern technologies like React.js and JavaScript.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{marginTop: '20px'}}
          >
            I focus on delivering well-structured, performant, and intuitive user experiences across different devices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{marginTop: '20px'}}
          >
            I also have a basic understanding of backend technologies and MySQL, which enables me to collaborate effectively in full-stack development environments.
          </motion.p>
        </div>

        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="img-wrapper">
            {/* Placeholder for professional photo */}
            <div className="img-placeholder">
              <span>MFG</span>
            </div>
            <div className="img-overlay"></div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
