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
import Mission from './components/Mission';



function App() {
  return (
    <div>
      <Navbar />
      {/* 👇 Add padding-top to prevent overlap */}
      <main>
        <Hero />
        <About />
        <Mission />
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
