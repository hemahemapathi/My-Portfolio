import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaDownload, FaEye, FaChevronDown, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import './Certificate.css';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "HTML5",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/Cert1.avif",
      link: "https://www.guvi.in/share-certificate/743714g420F3c1K687",
    },
    {
      id: 2,
      title: "CSS3",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/Cert2.jpg",
      link: "https://www.guvi.in/share-certificate/A76s401440p3e7x32Z",
      
    },
    {
      id: 3,
      title: "Bootstrap",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/Cert3.jpg",
      link: "https://www.guvi.in/share-certificate/q7o03Aux4204h4E371",
     
    },
    {
      id: 4,
      title: "JavaScript",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/cert3.png",
      link: "https://www.guvi.in/share-certificate/Hd2S7lr303O4R7441m",
      
    },
    {
      id: 5,
      title: "React.js",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/cert5.jpeg",
      link: "https://www.guvi.in/share-certificate/1a3B7p04Z24DieT374",
    },
    {
      id: 6,
      title: "MySQL",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/Cert6.png",
      link: "https://www.guvi.in/share-certificate/ZPG443370u9716B24t",
    },
    {
      id: 7,
      title: "MongoDB",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/cert7.png",
      link: "https://www.guvi.in/share-certificate/44LK5iE402731u473n",
    },
    {
      id: 8,
      title: "Node.js",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/cert8.jpg",
      link: "https://www.guvi.in/share-certificate/b837f74041qP34H12v",
    },
    {
      id: 9,
      title: "Full Stack Development",
      issuer: "GUVI Geek Network Private Limited",
      date: "2024",
      image: "/assets/images/cert9.png",
      link: "https://www.guvi.in/share-certificate/7u903341S2J4p4Y75t",
    }
  ];

  const displayedCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section id="certificates" className="certificates-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="section-title">Certifications</h2>

          <motion.div 
            className="certificates-container"
            style={{
              overflowX: showAll ? 'auto' : 'hidden',
              display: 'flex',
              flexWrap: showAll ? 'nowrap' : 'wrap',
              gap: '20px',
              paddingBottom: showAll ? '20px' : '0',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}
          >
            <AnimatePresence>
              {displayedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className="certificate-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ y: -10 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  style={{
                    flex: showAll ? '0 0 300px' : '1 1 calc(25% - 20px)',
                    minWidth: showAll ? '300px' : 'auto'
                  }}
                >
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.title} />
                    <div className="certificate-overlay">
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cert-icon-link"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  <div className="certificate-info">
                    <h3>{cert.title}</h3>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {certificates.length > 4 && (
            <motion.div
              className="navigation-controls"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                gap: '20px', 
                marginTop: '20px' 
              }}
            >
              <motion.button
                className="nav-btn"
                onClick={() => setShowAll(!showAll)}
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  background: "#574f4f"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotate: showAll ? [0, 360] : [360, 0],
                  transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  background: "var(--nav-btn-color, #333)",
                  border: 'none',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease"
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  {showAll ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Certificates;