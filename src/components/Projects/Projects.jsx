import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Project Management Taool",
      description: "Developed a React.js-based interface for agile task management and workflow visualization, incorporating reusable UI components.",
      image: "/assets/images/project1.avif",
      category: ["frontend","fullstack"],
      technologies: ["HTML5","CSS3","React.js","Axios","JavaScript","Bootstrap","Formik","React-Router-Dom"],
      github: "https://github.com/hemahemapathi/Project-Management-Tool-Frontend",
      live: "https://dancing-cat-055cf3.netlify.app/"
    },
    {
      id: 2,
      title: "Project Management Tool",
      description: "Implemented a Node.js API with MongoDB for data modeling and Express.js for handling real-time project and team collaboration.",
      image: "/assets/images/Project2.avif",
      category: ["fullstack","backend"],
      technologies: ["Node.js", "MongoDB", "Express","dotenv","bcrypt","Cors","jsonwebtokens","mongoose"],
      github: "https://github.com/hemahemapathi/Project-Management-Tool-backend",
      live: "https://project-management-tool-backend-3f4s.onrender.com/"
    },
    {
      id: 3,
      title: "Assigning Mentor and Students with Database",
      description: " Created a React.js dashboard for dynamic mentor-student allocation for scalablity",
      image: "/assets/images/project4.jpg",
      category: "frontend",
      technologies: ["React.js","Axios","Javascript","HTML5","CSS#","Bootstrap","Formik","React-Router-Dom"],
      github: "https://github.com/hemahemapathi/Assigning-Mentor-and-Students-with-Database-Frontend",
      live: "https://fancy-gnome-772420.netlify.app/"
    },
    {
      id: 4,
      title: "Assigning Mentor and Students with Database",
      description: " Built a RESTful Node.js service integrating MongoDB for schema relationships.",
      image: "/assets/images/project3.avif",
      category: "backend",
      technologies: ["Node.js", "MongoDB", "Express","JWT","dotenv","bcrypt","Cors","Nodeman","mongoose"],
      github: "https://github.com/hemahemapathi/Assigning-Mentor-and-Students-with-Database-Backend",
      live: "https://assigning-mentor-and-students-with-y002.onrender.com/"
    },
        {
      id: 5,
      title: "GenZ-Learning-Platform ",
      description: "Architected an intuitive React.js interface for virtual learning environments, featuring course navigation and media-rich content delivery.",
      image: "/assets/images/project5.jpg",
      category: "frontend",
      technologies: ["HTML5","CSS3","React.js","Axios","JavaScript","Bootstrap","Formik","React-Router-Dom","Redux"],
      github: "https://github.com/hemahemapathi/GenZ-Learning-Platform",
      live: "https://papaya-donut-c6c5af.netlify.app/"
    },
   {
      id: 6,
      title: "Grocery Shop",
      description: "A modern and responsive Grocery Shopping App built with React.js, providing users with a seamless online grocery shopping experience",
      image: "/assets/images/projectaaaa.jpg",
      category: ["frontend","fullstack"],
      technologies: ["HTML5","CSS3","React.js","Axios","JavaScript","Bootstrap","Formik","React-Router-Dom","Redux"],
      github: "https://github.com/hemahemapathi/Grocery-Shop-Frontend",
      live: "https://sweet-druid-eeb0a0.netlify.app/"
    },
   {
      id: 7,
      title: "Grocery Shop",
      description: "A Node.js/Express.js backend for a Grocery Shopping App, handling user authentication, product management, order processing, and payments with a MongoDB database.",
      image: "/assets/images/projectaaa.jpg",
      category: ["backend","fullstack"],
      technologies: ["Node.js", "MongoDB", "Express","JWT","dotenv","bcrypt","Cors","Nodeman","mongoose"],
      github: "https://github.com/hemahemapathi/Grocery-Shop-Backend",
      live: "https://grocery-shop-backend-ihni.onrender.com/"
    },
   {
      id: 8,
      title: "Health Management System",
      description: "A responsive and user-friendly Health Management System (HMS) built with React.js to streamline patient appointments, medical records, and doctor consultations.",
      image: "/assets/images/projectc.jpg",
      category: ["frontend","fullstack"],
      technologies: ["HTML5","CSS3","React.js","Axios","JavaScript","Bootstrap","Formik","React-Router-Dom","Redux"],
      github: "https://github.com/hemahemapathi/Health-Management-Frontend",
      live: "https://stately-entremet-25d902.netlify.app/"
    },
   {
      id: 9,
      title: "Health Management System",
      description: "A Node.js/Express.js backend for a Health Management System (HMS) that handles patient records, doctor appointments, authentication, and admin management with MongoDB as the database.",
      image: "/assets/images/projectdd.avif",
      category: ["backend","fullstack"],
      technologies: ["Node.js", "MongoDB", "Express","JWT","dotenv","bcrypt","Cors","Nodeman","mongoose"],
      github: "https://github.com/hemahemapathi/Health-Management-Backend",
      live: "https://health-management-backend.onrender.com/"
    },
   {
      id: 10,
      title: "Hotel Booking",
      description: "A modern and user-friendly hotel booking web application built using React.js. This frontend allows users to browse hotels, view details, and make reservations seamlessly.",
      image: "/assets/images/projectF.jpg",
      category: ["frontend","fullstack"],
      technologies: ["HTML5","CSS3","React.js","Axios","JavaScript","Bootstrap","Formik","React-Router-Dom","Redux"],
      github: "https://github.com/hemahemapathi/Hotel-Booking-Frontend",
      live: "https://heroic-sprite-0a3ff5.netlify.app/"
    },
      {
      id: 11,
      title: "Hotel Booking",
      description: "A Node.js/Express backend for a hotel booking app, handling authentication, reservations, and hotel management with a MongoDB database",
      image: "/assets/images/projectE.avif",
      category: ["backend","fullstack"],
      technologies: ["Node.js", "MongoDB", "Express","JWT","dotenv","bcrypt","Cors","Nodeman","mongoose"],
      github: "https://github.com/hemahemapathi/Hotel-Booking-Backend",
      live: "https://hotel-booking-backend-tk64.onrender.com/"
    },
    {
      id: 12,
      title: "Node.js API Task",
      description: "Crafted a file management backend leveraging Node.js core modules, enabling efficient directory navigation and CRUD file operations.",
      image: "/assets/images/project10.png",
      category: ["miniproject","backend"],
      technologies: ["Express.js","nodemon","nodejs","mongoose","dotenv","cors","multer"],
      github: "https://github.com/hemahemapathi/-Hall-Booking-API-Task",
      live: "https://hall-booking-api-task-1sds.onrender.com/"
    },
    {
      id: 13,
      title: "Add to Cart Using Redux",
      description: "Developed a state-driven cart solution utilizing Redux, emphasizing real-time updates and efficient data persistence strategies for seamless user experiences.",
      image: "/assets/images/project6.jpg",
      category: ["miniproject", "frontend"],
      technologies: ["HTML5","CSS3","React.js","Axios","Bootstrap","Formik","DOM","React-Router-Dom","Redux"],
      github: "https://github.com/hemahemapathi/React-Redux",
      live: "https://dancing-longma-543d0a.netlify.app/"
    },
    {
      id: 14,
      title: "Currency Converter",
      description: "Implemented an exchange rate utility using JavaScript Promises, providing accurate real-time currency conversion powered by third-party APIs.",
      image: "/assets/images/project7.jpg",
      category: ["miniproject", "frontend"],
      technologies: ["React.js","Javascript","HTML5","CSS3", "Bootstrap","Formik","React-Router-Dom","Redux","Axios"],
      github: "https://github.com/hemahemapathi/Promise-Task-3",
      live: "https://coruscating-donut-567393.netlify.app/"
    },
    {
      id: 15,
      title: "Random Image Generator",
      description: "Created an interactive UI with HTML, CSS, and JavaScript, dynamically retrieving media content via API endpoints for engaging user experiences.",
      image: "/assets/images/project8.jpg",
      category: ["miniproject","frontend"],
      technologies: ["React","Javascript","HTML5","CSS3", "Bootstrap","Formik","React-Router-Dom","Redux","Axios"],
      github: "https://github.com/hemahemapathi/Promise-Task1",
      live: "https://gregarious-crisp-bc1217.netlify.app/"
    },
    {
      id: 16,
      title: "Password Reset",
      description: "Developed a secure authentication system featuring encrypted password reset workflows using Node.js and token-based verification",
      image: "/assets/images/Project9.jpg",
      category: ["backend"],
      technologies: ["brcypt","cors","dotenv","express","crypto.js","mongoose","nodemon"],
      github: "https://github.com/hemahemapathi/Password-Reset-BACKEND",
      live: "https://password-reset-backend-lo48.onrender.com/"
    }
   
  ];
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'miniproject', name: 'Mini Project' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(filter);
        }
        return project.category === filter;
      });

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="projects-section">
      <Container className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title mb-5">Practical Applications</h2>

          <div className="filter-buttons mb-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => {
                  setFilter(category.id);
                  setShowAll(false);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          <Row className="g-4">
            <AnimatePresence>
              {displayedProjects.map((project, index) => (
                <Col key={project.id} lg={3} md={4} sm={6}>
                  <motion.div
                    className="project-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                      <div className="project-overlay">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                    <div className="project-info">
                      <h3 className="h5">{project.title}</h3>
                      <p className="small">{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag small">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>

          {filteredProjects.length > 4 && (
            <motion.div
              className="view-all-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className="view-all-btn"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? 'Show Less' : 'View All Projects'}
                <FaChevronDown
                  className={`chevron-icon ${showAll ? 'rotate' : ''}`}
                />
              </button>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;