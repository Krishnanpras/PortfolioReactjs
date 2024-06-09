import React from 'react'

function Header() {
  return (
    <div>
        <div className="scrollToTop-btn">
      <i className="fas fa-angle-up"></i>
    </div>
<header>
      <a href="#" className="brand">Portfolio</a>
      <div className="menu-btn"></div>
      <div className="navigation">
        <a href="#main">Home</a>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
    </div>
  )
}

export default Header