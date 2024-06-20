// components/SideMenu.js
import { useState } from 'react';
import styles from './SideMenu.module.css';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className={styles.hamburger}>
        ☰
      </button>
      <div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
        <button onClick={toggleMenu} className={styles.closeBtn}>
          &times;
        </button>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;