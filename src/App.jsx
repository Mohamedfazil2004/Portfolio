import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loader-wrapper"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: '#0a192f',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999
            }}
          >
            <motion.div
              style={{
                fontSize: 'clamp(1rem, 4vw, 2rem)',
                fontWeight: '600',
                color: '#64ffda',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
                initial="hidden"
                animate="visible"
              >
                {"Mohamed Fazil | Portfolio".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, display: 'none' },
                      visible: { opacity: 1, display: 'inline' }
                    }}
                    transition={{
                      duration: 0.05,
                      delay: 0.3 + index * 0.05
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                style={{
                  width: '3px',
                  height: '1.2em',
                  background: '#a855f7',
                  marginLeft: '2px'
                }}
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <div id="content">
              <Hero />
              <section id="about">
                <About />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </div>
            
            <motion.div
              className="scroll-progress"
              style={{
                scaleX,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #64ffda, #a855f7)',
                zIndex: 10001,
                transformOrigin: '0%'
              }}
            />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
