import React, { createContext, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ThemeContext.css';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
      const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');


      useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        if (isDark) {


          document.body.style.backgroundColor = '#2d2d3a';
          document.body.style.color = '#e6e6f0';
          document.documentElement.style.setProperty('--icon-color', '#a6a6cc');
          document.documentElement.style.setProperty('--text-primary', '#e6e6f0');
          document.documentElement.style.setProperty('--text-secondary', '#b8b8d9');
          document.documentElement.style.setProperty('--background-secondary', '#0c0c0c');
          document.documentElement.style.setProperty('--accent-color', '#8b8ba7');
        } else {


          document.body.style.backgroundColor = '#f5f5f7';
          document.body.style.color = '#2d2d3a';
          document.documentElement.style.setProperty('--icon-color', '#6b6b87');
          document.documentElement.style.setProperty('--text-primary', '#2d2d3a');
          document.documentElement.style.setProperty('--text-secondary', '#4a4a61');
          document.documentElement.style.setProperty('--background-secondary', '#e8e8ec');
          document.documentElement.style.setProperty('--accent-color', '#7a7a94');
        }
      }, [isDark]);

      return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
          {children}
        </ThemeContext.Provider>
      );
}