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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Light / Dark Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          marginBottom: '2rem',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#1e293b' : '#e2e8f0',
          color: darkMode ? '#ffffff' : '#000000',
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Main Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            border: '3px solid white',
            boxShadow: darkMode ? '0 0 20px rgba(255,255,255,0.15)' : '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />

        {/* Header / Bio */}
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Paul Akinyeju
        </h1>
        <p style={{ opacity: 0.8, marginBottom: '2rem' }}>
          Developer & Tech Enthusiast
        </p>

        {/* Links List Wrapper */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
              style={{
                display: 'block',
                width: '100%',
                boxSizing: 'border-box',
                padding: '0.875rem 1.5rem',
                borderRadius: '0.5rem',
                textAlign: 'center',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backgroundColor: darkMode ? '#1e293b' : '#ffffff',
                color: darkMode ? '#f8fafc' : '#0f172a',
                border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
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
