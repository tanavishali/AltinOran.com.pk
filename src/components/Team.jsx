import React, { useRef } from 'react';

const Team = () => {
  const scrollContainerRef = useRef(null);

  const scrollTeam = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="our-team" id="our-team">
      <h2>Our Team</h2>
      <p>
        Meet the talented professionals who make Altin Oran a leader in the
        construction industry. Our diverse team combines expertise, creativity,
        and dedication to deliver exceptional results.
      </p>

      <div className="team-cards-container">
        <div className="team-cards" id="teamCards" ref={scrollContainerRef}>
          <div className="team-card">
            <div className="team-card-image">
              <img src="./client img/logo.png" alt="Team Member" />
            </div>
            <div className="team-card-content">
              <h3>Mudassar Sultan Hashmi</h3>
              <div className="position">B. Sc. Civil Engineering </div>
              <div className="position">Managing Director</div>
              <p>
                An experienced civil engineer and Managing Director, leading
                projects with expertise and innovation.
              </p>
            </div>
          </div>
          {/* ... other team cards ... */}
          <div className="team-card">
            <div className="team-card-image">
              <img src="./client img/logo.png" alt="Team Member" />
            </div>
            <div className="team-card-content">
              <h3>Muhammad Tahir</h3>
              <div className="position">PhD Structural Engineering</div>
              <div className="position">Senior Structure Designer</div>
              <p>
                An expert structural designer ensuring safe and efficient
                engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-controls">
        <button className="scroll-btn" onClick={() => scrollTeam('left')}>←</button>
        <button className="scroll-btn" onClick={() => scrollTeam('right')}>→</button>
      </div>
    </section>
  );
};

export default Team;