import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import vrImage from '@/public/techonology/vr-image.png';
import headphones from '@/public/techonology/headphones.png';
import hand from '@/public/techonology/hand-image.png';

interface ITechnologyProps {
  header?: string;
}

export default function Technology({ header = '' }: ITechnologyProps) {
  return (
    <div className={styles.main}>
      <h1>{header}</h1>
      <div className={styles.content}>
        <div className={styles.big_block}>
          <Image
            quality={100}
            src={hand}
            alt="image"
            className={styles.image}
          ></Image>
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
            <Image
              quality={100}
              src={vrImage}
              alt="image"
              className={styles.image}
            />
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
            <Image
              quality={100}
              src={headphones}
              alt="image"
              className={styles.image}
            ></Image>
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
