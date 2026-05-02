import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
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
          Mohamed Fazil G.
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
            href="/Mohamed_Fazil_Frontend_Developer_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-premium"
            aria-label="View Resume"
          >
            View Resume <ExternalLink size={18} />
          </a>
          <a 
            href="/Mohamed_Fazil_Frontend_Developer_Resume.pdf" 
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
        className="social-sidebar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <a href="https://github.com/Mohamedfazil2004" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        {/* Add Linkedin if you have one, or other links */}
        <div className="line"></div>
      </motion.div>

    </section>
  );
};

export default Hero;
