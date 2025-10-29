import React from 'react';

const Message = () => {
  return (
    <div className="message-container" id="MD's Message">
      <div className="gradient-bg">
        <div className="content-wrapper">
          <h1 className="title">MD's Message</h1>
          <div className="divider"></div>
          <div className="content">
            <p>"I am delighted to address you as the CEO of Altin Oran.</p>
            <p>
              It is an honor to lead this esteemed organization, which has earned
              a reputation for excellence and innovation in the construction
              industry. On behalf of our entire team, I extend my heartfelt
              gratitude for choosing Altin Oran as your partner in bringing your
              dreams to life.
            </p>
            <p>
              We understand that each project represents a significant milestone
              for you. Whether it's your dream home, a commercial venture, or an
              industrial facility, we recognize the importance of these
              endeavors. Our mission is not just to build structures but to
              create spaces that inspire, uplift, and endure.
            </p>
            <p>
              We are excited about the opportunity to work with you and look
              forward to building a brighter future together."
            </p>
          </div>
          <div className="signature">
            <p>Managing Director</p>
            <p>Altin Oran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;