import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Technology() {
  return (
    <div className={styles.main}>
      <h1>Technology and business insights</h1>
      <div className={styles.content}>
        <div className={styles.big_block}>
          <Image src="" alt="image" className={styles.image}></Image>
          <div className={styles.block_content}>
            <h5>Simon Jones</h5>
            <p className={styles.subtitle}>CIO in Healthcare</p>
            <p className={styles.details}>
              “Yalantis has been a great fit for us because of their experience,
              responsiveness, value, and time to market. From the very start,
              they’ve been able to staff an effective development team in no
              time and perform as expected.”
            </p>
            <button className={styles.button}>
              <div className={styles.inside}>Read more</div>
            </button>
          </div>
        </div>
        <div className={styles.block_wrapper}>
          <div className={styles.small_block}>
            <Image src="" alt="image" className={styles.image}></Image>
            <div className={styles.block_content}>
              <h5>Simon Jones</h5>
              <p className={styles.subtitle}>CIO in Healthcare</p>
              <p className={styles.details}>
                “Yalantis has been a great fit for us because of their
                experience, responsiveness, value, and time to market. From the
                very start, they’ve been able to staff an effective development
                team in no time and perform as expected.”
              </p>
              <button className={styles.button}>
                <div className={styles.inside}>Read more</div>
              </button>
            </div>
          </div>
          <div className={styles.small_block}>
            <Image src="" alt="image" className={styles.image}></Image>
            <div className={styles.block_content}>
              <h5>Simon Jones</h5>
              <p className={styles.subtitle}>CIO in Healthcare</p>
              <p className={styles.details}>
                “Yalantis has been a great fit for us because of their
                experience, responsiveness, value, and time to market. From the
                very start, they’ve been able to staff an effective development
                team in no time and perform as expected.”
              </p>
              <button className={styles.button}>
                <div className={styles.inside}>Read more</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
