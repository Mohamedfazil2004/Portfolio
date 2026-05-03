import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import heroImg from '../assets/Hero png.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.p 
            className="intro-text text-cyan"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1 
            className="name-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Mohamed Fazil
          </motion.h1>
          
          <motion.h2 
            className="role-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            I build <span className="text-gradient">exceptional</span> digital experiences.
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Frontend Developer specializing in building clean, responsive, and user-friendly web interfaces using modern technologies like React.js and JavaScript.
          </motion.p>
          
          <motion.div 
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a 
              href="/Mohamed_Fazil_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-premium"
              aria-label="View Resume"
            >
              View Resume <ExternalLink size={18} />
            </a>
            <a 
              href="/Mohamed_Fazil_Resume.pdf" 
              download="Mohamed_Fazil_Resume.pdf"
              className="btn btn-outline"
              aria-label="Download Resume"
            >
              Download
            </a>
            <a href="#projects" className="btn btn-outline">
              Projects
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="hero-image-container">
            <div className="image-glow"></div>
            <div className="image-blob"></div>
            <div className="image-mask">
              <img src={heroImg} alt="Mohamed Fazil" className="hero-photo" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
