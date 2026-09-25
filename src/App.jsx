import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true;
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Customize your links, URLs, and icons here
  const links = [
    { label: 'GitHub', url: 'https://github.com/justttife', icon: '💻' },
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { label: 'Email Me', url: 'mailto:example@gmail.com', icon: '✉️' },
    { label: 'X (Twitter)', url: 'https://x.com', icon: '🐦' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#0b1120' : '#f1f5f9',
        color: darkMode ? '#f8fafc' : '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1rem 2rem 1rem',
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      {/* Top-Right Floating Theme Toggle */}
      <button
        onClick={toggleTheme}
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          border: darkMode ? '1px solid #334155' : '1px solid #cbd5e1',
          cursor: 'pointer',
          backgroundColor: darkMode ? '#1e293b' : '#ffffff',
          color: darkMode ? '#ffffff' : '#0f172a',
          fontWeight: '600',
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Glassmorphism Profile Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2.5rem 2rem',
          borderRadius: '1.25rem',
          boxSizing: 'border-box',
          backgroundColor: darkMode ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: darkMode
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)'
            : '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
          animation: 'fadeIn 0.8s ease-out'
        }}
      >
        {/* Profile Image */}
        <img
          src="https://github.com/justttife.png"
          alt="Paul Akinyeju"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1.25rem',
            border: darkMode ? '3px solid #38bdf8' : '3px solid #0284c7',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
          }}
        />

        {/* Bio Details */}
        <h1 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.35rem', letterSpacing: '-0.025em' }}>
          Paul Akinyeju
        </h1>
        <p style={{ opacity: 0.8, fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.4' }}>
          Software Developer & Tech Enthusiast
        </p>

        {/* Links List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.625rem',
                width: '100%',
                boxSizing: 'border-box',
                padding: '0.875rem 1.25rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '0.95rem',
                textDecoration: 'none',
                backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                color: darkMode ? '#f8fafc' : '#0f172a',
                border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
              }}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
