import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useScroll, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <FaGithub style={{ color: 'currentColor' }} />,
      url: "https://github.com/hemahemapathi"
    },
    {
      icon: <FaLinkedin style={{ color: '#0077B5' }} />,
      url: "https://www.linkedin.com/in/hemapathi-b-17b505257/"
    },
    {
      icon: <FaEnvelope style={{ color: '#EA4335' }} />,
      url: "mailto:hemahemapathi2001@gmail.com"
    }  
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4}></Col>
          
          <Col md={4}>
            <div className="footer-links">
              <motion.div 
                className="social-icons"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </motion.div>
            </div>
          </Col>
        </Row>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p><b>©  {currentYear} Hemapathi. All rights reserved.</b></p>
          <div className="footer-nav">
            <b><a href="#home">Home</a></b>
            <b><a href="#about">About</a></b>
            <b><a href="#projects">Projects</a></b>
            <b><a href="#contact">Contact</a></b>
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;