'use client'
import React from 'react';
import styles from './styles.module.scss';

export default function MainExpertise() {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main} id="">
      <div className={styles.main_content}>
        <h1>Expertise and competencies</h1>
        <p>
          We transform market insights into globally beloved apps that power
          your business
        </p>
        <button onClick={scrollToContacts}>Contact Us</button>
      </div>
    </div>
  );
}
