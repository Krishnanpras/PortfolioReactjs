import React, { useEffect, useState } from 'react';

function Script() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setShowScrollButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleItemClick = () => {
      setIsMenuActive(false);
    };

    const navigationItems = document.querySelectorAll('.navigation a');
    navigationItems.forEach(item => {
      item.addEventListener('click', handleItemClick);
    });

    return () => {
      navigationItems.forEach(item => {
        item.removeEventListener('click', handleItemClick);
      });
    };
  }, []);

  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 50;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealElements);

    return () => {
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  return (
    <div>
      <header className={isSticky ? 'sticky' : ''}>
        {/* Your header content */}
      </header>

      {/* Your sidebar menu content */}

      {showScrollButton && (
        <div className="scrollToTop-btn" onClick={scrollToTop}>
          <i className="fas fa-angle-up"></i>
        </div>
      )}

      {/* Your other content */}
    </div>
  );
}

export default Script;
