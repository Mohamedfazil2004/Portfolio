import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#">M<span>F</span>G</a>
        </motion.div>

        <ul className="nav-links">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="/Mohamed_Fazil_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline btn-sm"
              aria-label="View Resume"
            >
              Resume
            </a>
          </motion.li>
        </ul>

        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#64ffda" /> : <Menu color="#64ffda" />}
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div 
        className={`mobile-nav ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <ul>
          {navLinks.map((link, i) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
          <li>
            <a 
              href="/Mohamed_Fazil_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline" 
              style={{marginTop: '20px'}}
              aria-label="View Resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.div>

    </nav>
  );
};

export default Navbar;
