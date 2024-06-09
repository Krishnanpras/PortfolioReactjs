import React from 'react'

function MainSection() {
  return (
    <div>
        <section className="main" id="main">
      <div className="content">
        <h2>Hello, I'm<br /><span>Krishnan</span></h2>
        <div className="animated-text">
          <h3>Frontend Developer</h3>
          <h3>Backend Developer</h3>
          <h3>FullStack Developer</h3>
        </div>
        <a href="#work" className="btn">See My Work</a>
      </div>
    </section>
    </div>
  )
}

export default MainSection