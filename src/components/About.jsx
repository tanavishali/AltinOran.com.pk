import React from 'react';

const About = () => {
  return (
    <div className="container" id="About">
      <section className="hero2">
        <div className="hero-content2">
          <h1>ALTIN ORAN Construction</h1>
          <p>
            Our team of skilled professionals—including architects, engineers,
            and craftsmen—collaborates to bring visionary concepts to life with
            precision and expertise. <br />
            We are officially registered with the Pakistan Engineering Council
            (PEC) and Securities & Exchange Commission of Pakistan (SECP),
            ensuring the highest standards in all our projects.
          </p>
        </div>
        <div className="hero-video">
          <video controls poster="/api/placeholder/600/400" loop muted autoPlay>
            <source src="about-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="company-info">
        <div className="info-card">
          <h3>Experience</h3>
          <p>
            25+ Years of Industry Leadership, Completing Over 500 Successful
            Projects Nationwide
          </p>
        </div>
        <div className="info-card">
          <h3>Expertise</h3>
          <p>
            Comprehensive Construction Services Including Residential,
            Commercial, and Industrial Projects
          </p>
        </div>
        <div className="info-card">
          <h3>Innovation</h3>
          <p>
            Cutting-Edge Technologies and Sustainable Building Practices at the
            Forefront of Construction
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional construction solutions that exceed client
            expectations, emphasizing quality, safety, and innovation. We are
            committed to transforming landscapes and improving communities
            through sustainable and precise engineering.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the leading construction company in Pakistan, recognized for
            unparalleled craftsmanship, technological innovation, and a
            relentless commitment to client satisfaction. We aim to shape the
            future of urban and rural infrastructure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;