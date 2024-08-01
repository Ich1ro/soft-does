'use client';
import { useState } from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main} id="header">
      <h3 className={styles.main_header}>
        {/* <h3 className={styles.main_header_left}>{'>'}</h3>
        <h3 className={styles.main_header_center}>Soft Does</h3>
        <h3 className={styles.main_header_right}>{'<'}</h3> */}
        SOFT DOES
      </h3>
      <div
        className={`${styles.main_nav} ${
          isMenuOpen ? styles.main_nav_open : ''
        }`}
      >
        <a href="#services">Services</a>
        <a href="#partners">Expertise</a>
        <a href="#insights">Industies</a>
        <a href="#videos">Success Stories</a>
        <a href="#insights">Solution Hub</a>
        <a href="#about">Company</a>
        <a href="#insights">Insights</a>
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_button}>
        <button onClick={scrollToContacts}>Contact us</button>
      </div>
      <div className={styles.main_burger} onClick={toggleMenu}>
        <div
          className={`${styles.main_burger_line} ${
            isMenuOpen ? styles.main_burger_line_open : ''
          }`}
        ></div>
        <div
          className={`${styles.main_burger_line} ${
            isMenuOpen ? styles.main_burger_line_open : ''
          }`}
        ></div>
        <div
          className={`${styles.main_burger_line} ${
            isMenuOpen ? styles.main_burger_line_open : ''
          }`}
        ></div>
      </div>
    </div>
  );
}
