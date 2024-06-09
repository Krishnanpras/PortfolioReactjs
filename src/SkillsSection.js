import React from 'react';

function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="title reveal">
        <h2 className="section-title">My Skills</h2>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <h2 className="content-title">My Skills and Experiences</h2>
          <p style={{ textAlign: 'justify' }}>
          During my internship at Ellucian in Bangalore, I focused on integrating secure payment solutions into web apps. I worked on the "Cybersource Payment Gateway" project using HTML, CSS, JavaScript, React.js, and Node.js. This experience boosted my technical skills and passion for learning. My teamwork and communication skills were key in this project.</p>
          <a href="#" className="btn">See More</a>
        </div>
        <div className="column col-right reveal">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="line html"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>CSS</span>
              <span>85%</span>
            </div>
            <div className="line css"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>JavaScript</span>
              <span>80%</span>
            </div>
            <div className="line javascript"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Java</span>
              <span>80%</span>
            </div>
            <div className="line jquery"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>Node.js</span>
              <span>75%</span>
            </div>
            <div className="line php"></div>
          </div>
          <div className="bar">
            <div className="info">
              <span>React.js</span>
              <span>75%</span>
            </div>
            <div className="line php"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
