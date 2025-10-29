import React from 'react';

const Services = () => {
  return (
    <section className="services-preview" id="services-2">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        We offer a comprehensive range of construction services tailored to
        meet your specific needs and requirements.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div
            className="service-img"
            style={{ backgroundImage: "url('./image/new-house-construction-building-site_293060-52.jpg')" }}
          ></div>
          <div className="service-content">
            <h3 className="service-title">Residential Construction</h3>
            <p className="service-desc">
              Build your dream home with our expert residential construction
              services. We handle everything from design to final touches.
            </p>
            <a href="#" className="learn-more">
              Learn More <span className="learn-more-icon">→</span>
            </a>
          </div>
        </div>
        {/* ... other service cards ... */}
        <div className="service-card">
          <div
            className="service-img"
            style={{ backgroundImage: "url('./image/Whats-the-Difference-Between-Remodeling-and-Renovating.jpg')" }}
          ></div>
          <div className="service-content">
            <h3 className="service-title">Renovation & Remodeling</h3>
            <p className="service-desc">
              Transform your existing space with our renovation services. We
              bring new life to outdated structures.
            </p>
            <a href="#" className="learn-more">
              Learn More <span className="learn-more-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;