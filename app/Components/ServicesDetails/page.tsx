import React from 'react';
import styles from './styles.module.scss';
import service1 from '@/public/services/service1.png';
import service2 from '@/public/services/service2.png';
import service3 from '@/public/services/service3.png';
import service4 from '@/public/services/service4.png';
import Image from 'next/image';

export default function ServicesDetails() {
  return (
    <div className={styles.main}>
      <div className={styles.details_wrapper}>
        <div className={styles.details_first}>
          <div className={styles.left}>
            <h2>Team augmentation</h2>
            <p>
              We provide experts or teams tailored to your project, ensuring
              skill and compatibility with your goals and culture. They will
              collaborate closely, infusing fresh energy and ideas.
            </p>
            <button className={styles.button}>
              <div className={styles.inside}>Read more</div>
            </button>
          </div>

          <div className={styles.right}>
            <Image
              src={service1}
              alt="service"
              className={styles.service_image}
            />
          </div>
        </div>
        <div className={styles.details_second}>
          <div className={styles.left}>
            <h2>Team augmentation</h2>
            <p>
              We provide experts or teams tailored to your project, ensuring
              skill and compatibility with your goals and culture. They will
              collaborate closely, infusing fresh energy and ideas.
            </p>
            <button className={styles.button}>
              <div className={styles.inside}>Read more</div>
            </button>
          </div>
          <div className={styles.right}>
            <Image
              src={service2}
              alt="service"
              className={styles.service_image}
            />
          </div>
        </div>
      </div>
      <div className={styles.details_wrapper}>
        <div className={styles.details_third}>
          <div className={styles.left}>
            <h2>Team augmentation</h2>
            <p>
              We provide experts or teams tailored to your project, ensuring
              skill and compatibility with your goals and culture. They will
              collaborate closely, infusing fresh energy and ideas.
            </p>
            <button className={styles.button}>
              <div className={styles.inside}>Read more</div>
            </button>
          </div>
          <div className={styles.right}>
            <Image
              src={service3}
              alt="service"
              className={styles.service_image}
            />
          </div>
        </div>
        <div className={styles.details_fourth}>
          <div className={styles.left}>
            <h2>Team augmentation</h2>
            <p>
              We provide experts or teams tailored to your project, ensuring
              skill and compatibility with your goals and culture. They will
              collaborate closely, infusing fresh energy and ideas.
            </p>
            <button className={styles.button}>
              <div className={styles.inside}>Read more</div>
            </button>
          </div>
          <div className={styles.right}>
            <Image
              src={service4}
              alt="service"
              className={styles.service_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
