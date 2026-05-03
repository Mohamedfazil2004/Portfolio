import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import rsLogo from '../assets/RS Logo.jpg';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Reach Skyline",
      role: "Frontend Developer Intern",
      duration: "Jan 2026 – Mar 2026",
      location: "Madurai, India",
      points: [
        "Built dynamic and user-friendly web interfaces using HTML, CSS, and JavaScript.",
        "Developed responsive layouts ensuring seamless user experience across all devices.",
        "Contributed to the development of CRM/ERP interface modules, improving administrative efficiency.",
        "Collaborated with the team using GitHub for version control and project management."
      ],
      tech: [
        { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" }
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="section-title">
        <h2>Where I've Worked</h2>
      </div>

      <div className="experience-wrapper">
        <div className="experience-inner">
          <div className="tab-list">
            {experiences.map((exp, idx) => (
              <button 
                key={idx} 
                className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {exp.company}
              </button>
            ))}
            <div className="active-bar" style={{ transform: `translateY(${activeTab * 42}px)` }}></div>
          </div>

          <div className="tab-panels">
            {experiences.map((exp, idx) => (
              activeTab === idx && (
                <motion.div 
                  key={idx} 
                  className="tab-panel"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{exp.role} <span className="text-cyan">@ {exp.company}</span></h3>
                  <p className="exp-duration">{exp.duration}</p>
                  <p className="exp-location">{exp.location}</p>
                  <ul className="exp-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )
            ))}
          </div>
        </div>

        <div className="experience-visuals">
          <motion.div 
            className="company-logo-card glass"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="logo-glow"></div>
            <img src={rsLogo} alt="Reach Skyline Logo" className="company-logo" />
            <h3>Reach Skyline</h3>
          </motion.div>

          <div className="tech-stack-grid">
            {experiences[activeTab].tech.map((tech, i) => (
              <motion.div 
                key={i}
                className="tech-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                whileHover={{ y: -5, color: tech.color }}
              >
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
