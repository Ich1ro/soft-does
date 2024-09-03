'use client';
import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image'
import image from '@/public/services/service_main.png'

export default function MainServices() {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main} id="">
      <div className={styles.main_content}>
        <h1>soft does services</h1>
        <p>
          We transform market insights into globally beloved apps that power
          your business
        </p>
        <button onClick={scrollToContacts}>Contact Us</button>
      </div>
      {/* <Image src={image} alt='main' className={styles.image} /> */}
    </div>
  );
}
