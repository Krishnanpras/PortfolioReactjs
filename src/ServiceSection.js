import React from 'react';

function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="title reveal">
        <h2 className="section-title">My Services</h2>
        <p>I offer comprehensive web development solutions tailored to meet your specific needs. With expertise in frontend and backend technologies, I specialize in creating responsive, dynamic, and user-friendly websites and web applications.</p>    </div>
      <div className="content">
        <div className="card reveal">
          <div className="service-icon">
            <i className="fas fa-palette"></i>
          </div>
          <div className="info">
            <h3>Front End</h3>
            <p  style={{textAlign:'justify'}}>My frontend development services include crafting engaging user interfaces using HTML, CSS, and JavaScript, along with frameworks like Angular and React for enhanced interactivity.</p>   </div>
        </div>
        <div className="card reveal">
          <div className="service-icon">
            <i className="fas fa-file-code"></i>
          </div>
          <div className="info">
            <h3>Back End</h3>
            <p style={{textAlign:'justify'}}>I excel in developing robust server-side logic and database management systems using Node.js, Express, and various database technologies.</p>
          </div>
        </div>
        {/* <div className="card reveal">
          <div className="service-icon">
            <i className="fas fa-object-group"></i>
          </div>
          <div className="info">
            <h3>Motion Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default ServicesSection;
