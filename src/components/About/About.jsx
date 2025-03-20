import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCertificate, FaUserTie } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

const About = () => {
  const timeline = [
    {
      id: 1,
      icon: <FaGraduationCap />,
      date: "2019 - 2023",
      title: "Bachelor's in Computer Science",
      location: "Kathir College of Engineering, Anna University",
      description: "CGPA: 8/10"
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      date: "2024",
      title: "Full Stack Development Course",
      location: "GUVI Geek Network Private Limited",
      description: "Built 5 end-to-end web applications using MERN stack"
    },
    {
      id: 3,
      icon: <FaCertificate />,
      date: "2024",
      title: "Web Development Certification",
      location: "GUVI Geek Network Private Limited",
      description: "Completed intensive MERN stack training"
    }
  ];

  return (
    <section id="about" className="about-section" style={{ paddingTop: '80px' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">
            Professional Identity
          </h2>
          
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <motion.div 
                className="about-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h3 className="gradient-text">Aspiring Full Stack Developer</h3>
                <p className="mb-3">
                  I excel in building scalable MERN stack applications with a strong focus on user-centric design and efficient problem-solving. My adaptability, attention to detail, and passion for learning set me apart in delivering innovative and impactful solutions.
                </p>
                <div className="stats-container">
                  {[
                    { value: "8", label: "Projects" },
                    { value: "10+", label: "Technologies" },
                    { value: "9+", label: "Certifications" }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="stat-item"
                      style={{ "--item-index": index }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h4>{stat.value}</h4>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
            
            <Col lg={6} md={6}>
              <div className="timeline">
                {timeline.map((item) => (
                  <motion.div
                    key={item.id}
                    className="timeline-item"
                    style={{ "--item-index": item.id - 1 }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.id * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="timeline-icon">
                      {item.icon}
                    </div>
                    <div className="timeline-content">
                      <span className="date">{item.date}</span>
                      <h5>{item.title}</h5>
                      <p className="location">{item.location}</p>
                      <p className="description">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
