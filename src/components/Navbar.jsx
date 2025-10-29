import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Style Objects ---
  
  // Base style for the navbar
  const navbarBaseStyle = {
    position: 'fixed',
    width: '100%',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    transition: 'all 0.3s ease',
  };

  // Style to apply when scrolled
  const navbarScrolledStyle = {
    padding: '12px 40px',
  };

  // Combine base and scrolled styles
  const navbarStyle = isScrolled
    ? { ...navbarBaseStyle, ...navbarScrolledStyle }
    : navbarBaseStyle;

  const logoStyle = {
    fontWeight: 700,
    fontSize: '24px',
    color: '#0099ff',
    display: 'flex',
    alignItems: 'center',
  };

  const logoSpanStyle = {
    color: '#333',
  };

  const logoIconStyle = {
    marginRight: '10px',
    fontSize: '28px',
  };

  const navLinksStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0, // Reset margin
    padding: 0, // Reset padding
  };

  const navLinkItemStyle = {
    marginLeft: '30px',
  };

  const navLinkAnchorStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 500,
    transition: 'color 0.3s ease',
  };

  const contactBtnStyle = {
    backgroundColor: '#0099ff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 600,
    transition: 'background-color 0.3s ease',
  };

  // NOTE: The .menu-toggle and responsive styles for .nav-links
  // are NOT included because they rely on media queries, which are
  // impossible with inline styles.

  // --- JSX ---

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>
        <span style={logoIconStyle}>⚒️</span>
        ALTIN<span>ORAN</span>
      </div>
      <ul style={navLinksStyle}>
        <li style={navLinkItemStyle}><a href="#" style={navLinkAnchorStyle}>Home</a></li>
        <li style={navLinkItemStyle}><a href="#About" style={navLinkAnchorStyle}>About</a></li>
        <li style={navLinkItemStyle}><a href="#MD's Message" style={navLinkAnchorStyle}>MD's Message</a></li>
        <li style={navLinkItemStyle}><a href="serviecs.html" style={navLinkAnchorStyle}>Services</a></li>
        <li style={navLinkItemStyle}><a href="#our-team" style={navLinkAnchorStyle}>Our Team</a></li>
        <li style={navLinkItemStyle}><a href="#Project" style={navLinkAnchorStyle}>Projects</a></li>
        <li style={navLinkItemStyle}><a href="#Contact" style={{...navLinkAnchorStyle, ...contactBtnStyle}}>Contact Us</a></li>
      </ul>
      {/* This menu toggle is for demonstration, but the logic to show/hide 
        the mobile menu is removed as it's not possible inline.
      */}
      <div style={{ display: 'none', fontSize: '24px', cursor: 'pointer' }}>☰</div>
    </nav>
  );
};

export default Navbar;