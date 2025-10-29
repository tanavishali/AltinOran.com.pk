import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('Send Message');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('Message Sent!');
      e.target.reset();
      setTimeout(() => {
        setFormStatus('Send Message');
      }, 2000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          Ready to start your project? Have questions about our services? Our
          team is ready to hear from you and provide the solutions you need.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-form-container">
          <div className="form-header">
            <h3>Send Us a Message</h3>
          </div>
          <form id="contactForm" onSubmit={handleSubmit}>
            {/* ... form groups ... */}
            <div className="form-group">
               <input type="text" className="form-control" id="name" placeholder=" " required />
               <label htmlFor="name" className="form-label">Full Name</label>
            </div>
            {/* ... other form groups for email, phone, service, message ... */}
             <div className="form-group">
               <textarea className="form-control" id="message" rows="4" placeholder=" " required></textarea>
               <label htmlFor="message" className="form-label">Your Message</label>
             </div>
            <button type="submit" className="submit-btn" disabled={formStatus !== 'Send Message'}>
              {formStatus}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h3 className="form-header">Contact Information</h3>
          {/* ... info items for location, call, email, hours ... */}
          <div className="info-item">
            <i>{/* SVG icon */}</i>
            <div className="info-content">
              <h4>Email Us</h4>
              <p>
                <span className="copyable">Email: rizwan.arshad@altinoran.com.pk</span>
              </p>
            </div>
          </div>
          {/* ... social links ... */}
        </div>
      </div>
    </section>
  );
};

export default Contact;