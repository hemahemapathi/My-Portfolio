import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import { FaEye } from 'react-icons/fa6';

const Hero = () => {
  const el = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Full Stack Developer',
        'MERN Stack Developer',
        'Junior Web Developer',
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeClick = () => {
    window.open('/assets/Resume.pdf', '_blank');
  };

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
              className="hero-content"
            >
              <h1>Hi, I'm <span className="highlight">Hemapathi</span></h1>
              <h2>
                <span ref={el}></span>
              </h2>
             <p>Full-stack web engineer specializing in scalable, dynamic solutions.</p>
              
              <div className="hero-buttons d-flex justify-content-center justify-content-lg-start">
                <div className="resume-container">
                  <motion.button
                    className="primary-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleResumeClick}
                  >
                    <FaEye className="me-2" />
                    View Resume
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </Col>
          <Col lg={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="hero-image d-flex justify-content-center"
            >
              <img 
                src="/assets/images/image 8.png" 
                alt="Profile" 
                className="profile-img"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;