import styles from './Technology.module.scss';
import Image from 'next/image';
import vrImage from '@/public/techonology/vr-image.png';
import headphones from '@/public/techonology/headphones.png';
import hand from '@/public/techonology/hand-image.png';
import Animation from '../Animations/Animations';
import { ReleaseButton } from '../ui/buttons/ReleaseButton';

interface ITechnologyProps {
  header?: string;
}

export default function Technology({ header = '' }: ITechnologyProps) {
  return (
    <section className={styles.main}>
      <Animation variant="slide-top">
        <h1>{header}</h1>
      </Animation>
      <main className={styles.content}>
        <article className={styles.big_block}>
          <Image
            quality={100}
            src={hand}
            alt="image"
            className={styles.image}
          ></Image>
          <div className={styles.block_content}>
            <div>
              <h5>Simon Jones</h5>
              <p className={styles.subtitle}>CIO in Healthcare</p>
            </div>
            <p className={styles.details}>
              “Yalantis has been a great fit for us because of their experience,
              responsiveness, value, and time to market. From the very start,
              they’ve been able to staff an effective development team in no
              time and perform as expected.”
            </p>
            <button type="button" className={styles.button}>
              <ReleaseButton />
              <p>Read more</p>
            </button>
          </div>
        </article>
        <section className={styles.block_wrapper}>
          <article className={styles.small_block}>
            <Image
              quality={100}
              src={vrImage}
              alt="image"
              className={styles.image}
            />
            <div className={styles.block_content}>
              <div>
                <h5>Simon Jones</h5>
                <p className={styles.subtitle}>CIO in Healthcare</p>
              </div>
              <p className={styles.details}>
                “Yalantis has been a great fit for us because of their
                experience, responsiveness, value, and time to market. From the
                very start, they’ve been able to staff an effective development
                team in no time and perform as expected.”
              </p>
              <button type="button" className={styles.button}>
                <ReleaseButton />
                <p>Read more</p>
              </button>
            </div>
          </article>
          <article className={styles.small_block}>
            <Image
              quality={100}
              src={headphones}
              alt="image"
              className={styles.image}
            ></Image>
            <div className={styles.block_content}>
              <div>
                <h5>Simon Jones</h5>
                <p className={styles.subtitle}>CIO in Healthcare</p>
              </div>
              <p className={styles.details}>
                “Yalantis has been a great fit for us because of their
                experience, responsiveness, value, and time to market. From the
                very start, they’ve been able to staff an effective development
                team in no time and perform as expected.”
              </p>
              <button type="button" className={styles.button}>
                <ReleaseButton />
                <p>Read more</p>
              </button>
            </div>
          </article>
        </section>
      </main>
    </section>
  );
}
