import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Globe, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Layers className="text-cyan" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap"]
    },
    {
      title: "Tools",
      icon: <Terminal className="text-cyan" size={24} />,
      skills: ["Git", "GitHub", "Vercel / Netlify", "Chrome DevTools", "VS Code"]
    },
    {
      title: "Database",
      icon: <Database className="text-cyan" size={24} />,
      skills: ["MySQL (Basic)", "REST APIs"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="skills-container">
      <div className="section-title">
        <h2>Skills & Expertise</h2>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={idx} 
            className="skill-card glass"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              {group.icon}
              <h3>{group.title}</h3>
            </div>
            <ul className="skill-list">
              {group.skills.map((skill, i) => (
                <li key={i}>
                  <div className="bullet"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Skills;
