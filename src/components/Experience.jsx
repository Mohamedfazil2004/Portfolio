import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      ]
    }
  ];

  return (
    <div className="experience-container">
      <div className="section-title">
        <h2>Where I've Worked</h2>
      </div>

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
                initial={{ opacity: 0, x: 20 }}
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

    </div>
  );
};

export default Experience;
