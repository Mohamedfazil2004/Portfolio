import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/Mohamedfazil2004" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
        {/* Add more as needed */}
      </div>
      <div className="footer-info">
        <a href="https://github.com/Mohamedfazil2004" target="_blank" rel="noreferrer">
          Designed & Built by Mohamed Fazil
        </a>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
