import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || true;
  });

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const emailAddress = 'boluwatifeakinyeju@gmail.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: 'GitHub',
      url: 'https://github.com/justttife',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/justttife',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: copied ? 'Copied to Clipboard!' : 'Email Me',
      onClick: handleEmailClick,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    },
    {
      label: 'X (Twitter)',
      url: 'https://x.com/justttife',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: darkMode ? '#0b1120' : '#f1f5f9',
        backgroundImage: darkMode
          ? 'radial-gradient(at 50% 0%, rgba(56, 189, 248, 0.15) 0px, transparent 50%)'
          : 'radial-gradient(at 50% 0%, rgba(2, 132, 199, 0.1) 0px, transparent 50%)',
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
      {/* Top-Right Theme Toggle */}
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
          alt="Akinyeju Paul"
          className="profile-avatar"
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1.25rem',
            border: darkMode ? '3px solid #38bdf8' : '3px solid #0284c7',
            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
            cursor: 'pointer'
          }}
        />

        {/* Bio Details */}
        <h1 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>
          Akinyeju Paul
        </h1>
        <p style={{ opacity: 0.8, fontSize: '0.925rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '360px' }}>
          Full-Stack Developer leveraging modern web technologies to conceptualize, architect, and deploy high-availability digital solutions. Driven by algorithmic efficiency, clean abstractions, and seamless user experiences.
        </p>

        {/* Links List */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {links.map((link, index) => {
            const commonProps = {
              key: index,
              className: 'animated-link',
              style: {
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
                cursor: 'pointer',
                backgroundColor: darkMode ? '#0f172a' : '#ffffff',
                color: darkMode ? '#f8fafc' : '#0f172a',
                border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
              }
            };

            if (link.onClick) {
              return (
                <button key={index} onClick={link.onClick} {...commonProps}>
                  <span style={{ display: 'inline-flex', alignItems: 'center' }}>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              );
            }

            return (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" {...commonProps}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Footer Credit */}
      <p style={{ opacity: 0.5, fontSize: '0.8rem', marginTop: '2rem' }}>
        © {new Date().getFullYear()} Akinyeju Paul
      </p>
    </div>
  );
}
