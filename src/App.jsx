import React, { useState, useEffect } from 'react';

export default function App() {
  // Check user preference or local storage for dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true; // Defaults to dark mode
  });

  // Save theme preference whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const links = [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourusername" },
    { label: "Email Me", url: "mailto:paulakinyeju@gmail.com" },
    { label: "X (Twitter)", url: "https://x.com/yourusername" }
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
        color: darkMode ? '#f8fafc' : '#0f172a',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem',
        fontFamily: 'sans-serif'
      }}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          alignSelf: 'flex-end',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#334155' : '#e2e8f0',
          color: darkMode ? '#fff' : '#000',
          fontWeight: 'bold',
          marginBottom: '2rem',
          transition: 'transform 0.2s ease',
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Main Container with Entrance Animation */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          animation: 'fadeIn 0.8s ease-out'
        }}
      >
        {/* Profile Image */}
        <img
          src="https://github.com/justttife.png"
          alt="Paul Akinyeju"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
            boxShadow: darkMode ? '0 0 20px rgba(255,255,255,0.1)' : '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />

        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Paul Akinyeju
        </h1>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
          Developer & Tech Enthusiast
        </p>

        {/* Links List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
              style={{
                display: 'block',
                padding: '0.875rem 1.5rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                color: darkMode ? '#f8fafc' : '#0f172a',
                border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0',
                boxShadow: darkMode ? '0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.05)',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
