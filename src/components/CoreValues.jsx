import React from 'react';

const CoreValues = () => {

  // --- Style Objects ---

  const sectionStyle = {
    background: 'linear-gradient(to bottom, #00BFFF, #4169E1)',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    maxWidth: '100%',
    margin: '0 auto',
  };

  const h2Style = {
    fontSize: '28px',
    marginBottom: '30px',
    position: 'relative',
    // The ::after pseudo-element is IMPOSSIBLE to do with inline styles.
    // It has been removed.
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const itemStyle = {
    flex: '1 1 250px',
    margin: '15px',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    // The :hover effect (translateY and background-color change)
    // is IMPOSSIBLE to do with inline styles. It has been removed.
  };

  const itemH3Style = {
    fontSize: '20px',
    marginBottom: '12px',
    margin: 0, // Reset
  };

  const itemPStyle = {
    fontSize: '15px',
    lineHeight: 1.7,
    margin: 0, // Reset
  };

  const footerStyle = {
    marginTop: '40px',
    fontStyle: 'italic',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  // --- JSX ---

  return (
    <section style={sectionStyle} id="core-values">
      <h2 style={h2Style}>Our Core Values</h2>
      
      <div style={containerStyle}>
        <div style={itemStyle}>
          <h3 style={itemH3Style}>Excellence</h3>
          <p style={itemPStyle}>We strive for excellence in every aspect of our work...</p>
        </div>
        
        <div style={itemStyle}>
          <h3 style={itemH3Style}>Integrity</h3>
          <p style={itemPStyle}>Honesty, transparency, and ethical conduct form...</p>
        </div>
        
        <div style={itemStyle}>
          <h3 style={itemH3Style}>Innovation</h3>
          <p style={itemPStyle}>We embrace innovation and creative solutions...</p>
        </div>

        <div style={itemStyle}>
          <h3 style={itemH3Style}>Sustainability</h3>
          <p style={itemPStyle}>We are dedicated to environmentally responsible practices...</p>
        </div>
        
        <div style={itemStyle}>
          <h3 style={itemH3Style}>Collaboration</h3>
          <p style={itemPStyle}>We believe in the power of teamwork...</p>
        </div>
        
        <div style={itemStyle}>
          <h3 style={itemH3Style}>Client Focus</h3>
          <p style={itemPStyle}>Our clients' vision and satisfaction are our priority...</p>
        </div>
      </div>
      
      <div style={footerStyle}>
        <p>These values guide our decisions and actions every day...</p>
      </div>
    </section>
  );
};

export default CoreValues;