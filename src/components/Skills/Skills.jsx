import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiMysql, SiJsonwebtokens } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      id: 1,
      name: 'React.js',
      icon: <FaReact />,
      color: '#61DAFB'
    },
    {
      id: 2,
      name: 'Node.js',
      icon: <FaNodeJs />,
      color: '#339933'
    },
    {
      id: 3,
      name: 'MongoDB',
      icon: <SiMongodb />,
      color: '#47A248'
    },
    {
      id: 4,
      name: 'Express.js',
      icon: <SiExpress />,
      color: '#000000'
    },
    {
      id: 5,
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: '#F7DF1E'
    },
    {
      id: 6,
      name: 'HTML5',
      icon: <FaHtml5 />,
      color: '#E34F26'
    },
    {
      id: 7,
      name: 'CSS3',
      icon: <FaCss3 />,
      color: '#1572B6'
    },
    {
      id: 8,
      name: 'Git',
      icon: <FaGitAlt />,
      color: '#F05032'
    },
    {
      id: 9,
      name: 'Bootstrap',
      icon: <FaBootstrap />,
      color: '#7952B3'
    },
    {
      id: 10,
      name: 'MySQL',
      icon: <SiMysql />,
      color: '#4479A1'
    },
    {
      id: 11,
      name: 'JWT',
      icon: <SiJsonwebtokens />,
      color: '#000000'
    },
    {
      id: 12,
      name: 'GitHub',
      icon: <FaGithub />,
      color: '#181717'
    }
  ];

  return (
    <section id="skills" className="skills-section" style={{ paddingTop: '80px' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <Row>
            {skills.map((skill) => (
              <Col key={skill.id} xs={6} sm={4} md={3} lg={2}>
                <motion.div
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3>{skill.name}</h3>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;