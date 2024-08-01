'use client';
import styles from './Main.module.scss';
// import Spline from '@splinetool/react-spline/next';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  loading: () => <p></p>,
});

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loading = (spline: any) => {
    if (spline) {
      if (loaderRef.current) {
        setTimeout(() => {
          loaderRef?.current?.classList.add(styles.wrapper_fadeOut);
        }, 3000);
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 3000);
      }
    }
    console.log(spline);
  };

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.main} id="">
      <div className={styles.wrapper} ref={loaderRef}>
        <div className={styles.wrapper_loader}></div>
      </div>
      <Spline
        scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode"
        onLoad={loading}
        className={styles.main_image}
      />
      <div className={styles.main_content}>
        <h1>Innovacion amigable en software</h1>
        <p>
          We transform market insights into globally beloved apps that power
          your business
        </p>
        <button onClick={scrollToContacts}>Contact Us</button>
      </div>
    </div>
  );
}
