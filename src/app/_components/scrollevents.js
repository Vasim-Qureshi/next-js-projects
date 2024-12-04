// components/ScrollComponent.js
import { useEffect, useState } from 'react';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Change background color when scroll position reaches 300px
      if (position >= 1300) {
        setBgColor('lightblue');
      } else {
        setBgColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, height: '200vh' }}>
      <h1>Scroll Position: {scrollPosition}</h1>
      <p>Scroll down to change the background color.</p>
    </div>
  );
};

export default ScrollComponent;