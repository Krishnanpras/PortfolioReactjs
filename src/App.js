import './App.css';
import Header from './Header';
import MainSection from './MainSection';
import About from './About';
import WorkSection from './WorkSection';
import SkillsSection from './SkillsSection';
import ServicesSection from './ServiceSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {

  useEffect(() => {
    // JavaScript for navigation bar effects on scroll
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle('sticky', window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // JavaScript for responsive navigation sidebar menu
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    const navigationItems = document.querySelectorAll(".navigation a");

    const toggleMenu = () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    };

    menuBtn.addEventListener("click", toggleMenu);
    navigationItems.forEach((navigationItem) => {
      navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
      });
    });

    // JavaScript for scroll to top button
    const scrollBtn = document.querySelector(".scrollToTop-btn");
    const scrollToTop = () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("active", window.scrollY > 500);
    });
    scrollBtn.addEventListener("click", scrollToTop);

    // JavaScript for reveal website elements on scroll
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);

    // ScrollReveal settings
    const sr = ScrollReveal({
      distance: '45px',
      duration: 2700,
      reset: true
    });

    sr.reveal('.img-card', { delay: 350, origin: 'left' });
    sr.reveal('.column.col-right', { delay: 350, origin: 'right' });
    sr.reveal('.section-title', { delay: 350, origin: 'right' });
    sr.reveal('.content', { delay: 350, origin: 'left' });

    // Clean up listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn.removeEventListener("click", toggleMenu);
      navigationItems.forEach((navigationItem) => {
        navigationItem.removeEventListener("click", () => {
          menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        });
      });
      scrollBtn.removeEventListener("click", scrollToTop);
      window.removeEventListener("scroll", reveal);
    };
  }, []); // Empty array as dependency to run effect only once
  return (
    <div className="App">
     <Header></Header>
     <MainSection></MainSection>
     <About></About>
     <WorkSection></WorkSection>
     <SkillsSection></SkillsSection>
     <ServicesSection></ServicesSection>
     <ContactSection></ContactSection>
     <Footer></Footer>
    </div>
  );
}

export default App;
