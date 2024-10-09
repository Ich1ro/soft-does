'use client';

import React from 'react';
import styles from './MainInsights.module.scss';

export function MainInsights() {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.main} id="">
      <main className={styles.main_content}>
        <h1>soft does insights</h1>
        <p>
          We transform market insights into globally beloved apps that power
          your business
        </p>
        <button onClick={scrollToContacts}>Contact Us</button>
      </main>
    </section>
  );
}
