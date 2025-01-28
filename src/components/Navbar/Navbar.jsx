import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { BiHomeAlt2, BiUserCircle } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';
import { RiContactsLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState('');
  const fullText = 'HP......';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText('');
        setIndex(0);
      }, 2000);
    }
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 50);
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const navItems = [
    { href: '#home', icon: <BiHomeAlt2 className="nav-icon pulse" />, name: 'Home' },
    { href: '#about', icon: <BiUserCircle className="nav-icon bounce" />, name: 'About' },
    { href: '#skills', icon: <GiSkills className="nav-icon spin" />, name: 'Skills' },
    { href: '#projects', icon: <AiOutlineFundProjectionScreen className="nav-icon float" />, name: 'Projects' },
    { href: '#certificates', icon: <TbCertificate className="nav-icon shake" />, name: 'Certificates' },
    { href: '#contact', icon: <RiContactsLine className="nav-icon swing" />, name: 'Contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    const offset = href === '#about' ? 0 : 40;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''} ${visible ? 'navbar-visible' : 'navbar-hidden'} ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <div className="container">
        <div className="navbar-brand typing-logo fw-bold">
          <span className={`typing-text ${isDark ? 'text-light' : 'text-dark'}`}>{text}</span>
          <span className="cursor">|</span>
        </div>
        
        <button 
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mx-3">
                <a 
                  href={item.href}
                  className={`nav-link fw-bold ${isDark ? 'text-light' : 'text-dark'}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.icon}
                  <span className="nav-link-text">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="theme-toggle-container">
          <button 
            className="btn theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? 
              <BsSunFill className="theme-icon rotate" color="#FFD700" /> : 
              <BsMoonFill className="theme-icon rotate" color="#080707" />
            }
          </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
