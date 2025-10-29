import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Message from './components/Message';
import EnvironmentalPolicy from './components/EnvironmentalPolicy';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Base styles for the body
const appStyle = {
  overflowX: 'hidden',
  backgroundColor: '#f5f5f5',
  color: '#333',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
};

function App() {
  return (
    <div style={appStyle}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreValues />
        <Message />
        <EnvironmentalPolicy />
        <Services />
        <Team />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;