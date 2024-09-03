import React from 'react';
import styles from './styles.module.scss';

export default function ExpertTeam() {
  return (
    <div className={styles.main}>
      <h2>Expert team at your service</h2>
      <div className={styles.block}>
        <div className={styles.top}>
          <div className={styles.content_first}>
            <h5>500+</h5>
            <p>Total experts</p>
          </div>
          <div className={styles.content_second}>
            <h5>500+</h5>
            <p>Total experts</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.content_first}>
            <h5>500+</h5>
            <p>Total experts</p>
          </div>
          <div className={styles.content_second}>
            <h5>500+</h5>
            <p>Total experts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
