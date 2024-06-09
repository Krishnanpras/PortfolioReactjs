import React from 'react';

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="title reveal">
        <h2 className="section-title">Contact Me</h2>
      </div>
      <div className="content">
        <div className="row">
          <div className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <h3>Address</h3>
              <span>12/170 Udumalpet, Coimbatore Tamilnadu</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info">
              <h3>Phone</h3>
              <span>+91 8220816711</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
              <h3>Email Address</h3>
              <span>krishnanp@email.com</span>
            </div>
          </div>
         
        </div>
        <div className="row">
          <div className="contact-form reveal">
            <h3>Send Message</h3>
            <div className="input-box">
              <input type="text" name="" value="" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="text" name="" value="" placeholder="Email" />
            </div>
            <div className="input-box">
              <textarea name="name" rows="8" cols="80" placeholder="Message"></textarea>
            </div>
            <div className="input-box">
              <input type="submit" className="send-btn" name="" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
