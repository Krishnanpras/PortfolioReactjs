import React from 'react'

function About() {
  return (
    <div>
        <section className="about" id="about">
      <div className="title reveal">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="content">
        <div className="column col-left reveal">
          <div className="img-card">
            <img src="images/myimage.jpg" alt="" id="imgg" />
          </div>
        </div>
        <div className="column col-right reveal">
          <h2 className="content-title">Hey There! I'm Krishnan P</h2>
          <p className="paragraph-text">
            A passionate computer science graduate from Rathinam College of Arts and Science with an 83% aggregate. I interned at Ellucian in Bangalore, working on the Cybersource project. I'm skilled in <span style={{ color: 'rgb(32,32,240)' }}>HTML, CSS, NodeJS, JavaScript, ReactJS, Java, and SQL</span> with a focus on frontend and backend development. I'm passionate about using technology to solve problems and improve lives. My goal is to continuously learn and contribute innovative solutions in software development. I'm dedicated, enthusiastic, and enjoy collaborating in team environments.
          </p>
          <h3>You can reach me at</h3>
          <label htmlFor="">Email : </label><a className="link" href="mailto:krishnanp132@gmail.com">krishnanp132@gmail.com</a>
          <br />
          <label htmlFor="">LinkedIn : </label><a className="link" href="https://www.linkedin.com/in/krishnanpp/">krishnanpp/</a>
          <br />
          <a href="#" className="btn">Download my Resume</a>
        </div>
      </div>
    </section>
  
    </div>
  )
}

export default About