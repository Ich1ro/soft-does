import Image from 'next/image';
import styles from './Main.module.scss';
import Spline from '@splinetool/react-spline/next';
import { useEffect, useRef } from 'react';

export default function Main() {
  return (
    <div className={styles.main} id="header">
      <Spline
        scene="https://prod.spline.design/LDRcjRsDe2GYbfYq/scene.splinecode"
        className={styles.main_image}
      />
      <div className={styles.main_content}>
        <h1>Innovacion amigable en software</h1>
        <p>
          We transform market insights into globally beloved apps that power
          your business
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
}
