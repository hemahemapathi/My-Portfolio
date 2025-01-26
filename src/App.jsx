import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



// Components
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Hero from '../src/components/Hero/Hero.jsx';
import About from '../src/components/About/About.jsx';
import Skills from '../src/components/Skills/Skills.jsx';
import Projects from '../src/components/Projects/Projects.jsx';
import Certificates from '../src/components/Certificates/Certificate.jsx';
import Contact from '../src/components/Contact/Contact.jsx';
import Footer from '../src/components/Footer/Footer.jsx';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
