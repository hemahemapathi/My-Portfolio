import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDribbble, FaCodepen } from 'react-icons/fa';
import './Footer.css';
import { ThemeContext } from '../../context/ThemeContext'; // Assuming you have a ThemeContext

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useContext(ThemeContext); // Get current theme from context
  
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/hemahemapathi",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/hemapathi-b-17b505257/",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:hemahemapathi2001@gmail.com",
      label: "Email"
    },
    {
      icon: <FaDribbble />,
      url: "#",
      label: "Dribbble"
    },
    {
      icon: <FaCodepen />,
      url: "#",
      label: "CodePen"
    }
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        duration: 0.9,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 12
      }
    }
  };

  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 60,
        delay: 0.2
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <motion.footer 
      className={`footer ${theme}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={containerVariants}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <motion.div 
              className="footer-logo"
              variants={logoVariants}
            >
              <h3>Hemapathi</h3>
              <p>Full Stack Developer</p>
            </motion.div>
          </Col>
          
          <Col md={4}>
            <motion.div 
              className="social-icons-container"
              variants={containerVariants}
            >
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    custom={index}
                    variants={socialIconVariants}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, 10, -10, 0],
                      boxShadow: theme === 'dark' 
                        ? '0 8px 20px rgba(129, 161, 255, 0.3)' 
                        : '0 8px 20px rgba(79, 70, 229, 0.3)',
                      transition: { duration: 0.4 }
                    }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>
          
          <Col md={4}>
            <motion.div 
              className="footer-contact"
              variants={itemVariants}
            >
              <p>Let's connect</p>
              <a href="mailto:hemahemapathi2001@gmail.com">hemahemapathi2001@gmail.com</a>
            </motion.div>
          </Col>
        </Row>
        
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p>© {currentYear} Hemapathi. All rights reserved.</p>
          <div className="footer-nav">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.a 
                key={index}
                href={`#${item.toLowerCase()}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3 + (index * 0.1) } 
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
};

export default Footer;
