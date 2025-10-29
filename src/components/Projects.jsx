import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('architectural');

  const categories = [
    { id: 'architectural', name: 'Architectural & Structural Designing' },
    { id: 'completed', name: 'Completed Projects' },
    { id: 'ongoing', name: 'Ongoing Projects' },
  ];

  return (
    <section id="Project" className="projects-section">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">A Brief introduction to Our Projects</p>

        <div className="category-buttons">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="project-categories">
          {/* Architectural Category */}
          <div className={`project-category ${activeCategory === 'architectural' ? 'active' : ''}`} id="architectural">
            <h3 className="category-title"><i className="fas fa-drafting-compass"></i> Architectural & Structural Designing</h3>
            <div className="project-cards">
              {/* Card 1 */}
              <div className="project-card">
                <div className="project-img" style={{ backgroundImage: "url('./image/new-house-construction-building-site_293060-52.jpg')" }}></div>
                <div className="project-content">
                  <h4>1 Kanal House - DHA Phase 8, Lahore</h4>
                  <a href="#" className="project-link">View Details <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              {/* ... other architectural cards ... */}
            </div>
          </div>

          {/* Completed Category */}
          <div className={`project-category ${activeCategory === 'completed' ? 'active' : ''}`} id="completed">
            <h3 className="category-title"><i className="fas fa-building"></i> Completed Projects</h3>
            <div className="project-cards">
              {/* Card 1 */}
              <div className="project-card">
                <div className="project-img" style={{ backgroundImage: "url('./image/31864146-800x600.jpeg')" }}></div>
                <div className="project-content">
                  <h4>Grey Structure of 5 Marla House - DHA Phase 9, Lahore</h4>
                  <a href="#" className="project-link">View Details <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              {/* ... other completed cards ... */}
            </div>
          </div>

          {/* Ongoing Category */}
          <div className={`project-category ${activeCategory === 'ongoing' ? 'active' : ''}`} id="ongoing">
            <h3 className="category-title"><i className="fas fa-hard-hat"></i> Ongoing Projects</h3>
            <div className="project-cards">
              {/* Card 1 */}
              <div className="project-card">
                <div className="project-img" style={{ backgroundImage: "url('./image/Construction-Cost-For-5-Marla-Houses-In-Pakistan1-1.jpg')" }}></div>
                <div className="project-content">
                  <h4>Finishing Works of 5 Marla House - DHA Phase 9, Lahore</h4>
                  <a href="#" className="project-link">View Details <i className="fas fa-arrow-right"></i></a>
                </div>
              </div>
              {/* ... other ongoing cards ... */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;