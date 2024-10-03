import Image, { StaticImageData } from 'next/image';
import styles from './Releases.module.scss';
import arrowRight from '@/public/arror-right.svg';

interface IReleasesProps {
  images: StaticImageData[];
}

export function Releases({ images }: IReleasesProps) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>PRESS RELEASES</h1>
        <button className={styles.button}>
          <div className={styles.inside}>
            more <Image src={arrowRight} alt="Arrow right" />
          </div>
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.block_wrapper}>
          {images.map((item, index) => (
            <div key={index} className={styles.small_block}>
              <Image
                quality={100}
                src={item}
                alt="image"
                className={styles.image}
              />
              <div className={styles.block_content}>
                <h5>Simon Jones</h5>
                <p className={styles.subtitle}>CIO in Healthcare</p>
                <p className={styles.details}>
                  “Yalantis has been a great fit for us because of their
                  experience, responsiveness, value, and time to market. From
                  the very start, they’ve been able to staff an effective
                  development team in no time and perform as expected.”
                </p>
                <button className={styles.button}>
                  <div className={styles.inside}>Read more</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
