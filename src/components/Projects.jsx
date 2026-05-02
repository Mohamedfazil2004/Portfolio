import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1 from "../assets/project_01.png";
import project2 from "../assets/project_02.png";
import erpProject from "../assets/erp_project.png";

const Projects = () => {
  const projects = [
    {
      title: "CRM Web Application",
      description: "A comprehensive Customer Relationship Management platform built with React.js. Features include user authentication, customer tracking, and interactive dashboards.",
      tech: ["React.js", "Context API", "CSS3", "REST API"],
      github: "https://github.com/Mohamedfazil2004",
      image: project1,
    },
    {
      title: "College Landing Pages",
      description: "Modern, responsive landing pages for educational institutions. Optimized for performance and user conversion with clean typography and intuitive navigation.",
      tech: ["HTML5", "CSS3", "JavaScript", "AOS Library"],
      github: "https://github.com/Mohamedfazil2004",
      image: project2,

    },
    {
      title: "ERP Management System",
      description: "A responsive web-based ERP system designed to manage internal workflows, data tracking, and operational processes. Built with a focus on clean UI, usability, and efficient data handling.",
      tech: ["React.js", "JavaScript", "CSS", "MySQL"],
      github: "https://github.com/Mohamedfazil2004",
      image: erpProject,
    }
  ];

  return (
    <div className="projects-container">
      <div className="section-title">
        <h2>Some Things I've Built</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-featured"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="project-content">
              <p className="project-overline text-cyan">Featured Project</p>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-description glass">
                <p>{project.description}</p>
              </div>
              <ul className="project-tech-list">
                {project.tech.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer"><FaGithub size={22} /></a>
                <a href="#"><ExternalLink size={22} /></a>
              </div>
            </div>
            <div className="project-image">
              <a href={project.github} target="_blank" rel="noreferrer">
                <div className="img-overlay"></div>
                <img src={project.image} alt={project.title} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Projects;
