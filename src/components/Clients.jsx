import React from 'react';

const Clients = () => {
  return (
    <section className="clients-section">
      <h2 className="section-title">Our Trusted Clients</h2>
      <div className="client-logo-container">
        <div className="client-logo-track">
          {/* Logos */}
          <div className="client-logo-item">
            <img src="./client img/CCL-logo.png" alt="CCL" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image (2).png" alt="Client 2" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image (1).png" alt="Client 3" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image.png" alt="Client 4" />
          </div>
          {/* Duplicate logos for seamless scroll */}
          <div className="client-logo-item">
            <img src="./client img/CCL-logo.png" alt="CCL" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image (2).png" alt="Client 2" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image (1).png" alt="Client 3" />
          </div>
          <div className="client-logo-item">
            <img src="./client img/processed-image.png" alt="Client 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;