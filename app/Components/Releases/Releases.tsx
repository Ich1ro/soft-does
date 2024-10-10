import Image, { StaticImageData } from 'next/image';
import styles from './Releases.module.scss';
import arrowRight from '@/public/arror-right.svg';
import Animation from '../Animations/Animations';
import { ReleaseButton } from '../ui/buttons/ReleaseButton';
import { HeaderReleaseButton } from '../ui/buttons/HeaderReleaseButton';

interface IReleasesProps {
  images: StaticImageData[];
}

export function Releases({ images }: IReleasesProps) {
  return (
    <section className={styles.main}>
      <Animation variant="slide-top">
        <header className={styles.header}>
          <h1>PRESS RELEASES</h1>
          <button type="button" className={styles.header_button}>
            <HeaderReleaseButton />
            <p>
              more <Image src={arrowRight} alt="Arrow right" />
            </p>
          </button>
        </header>
      </Animation>
      <main className={styles.content}>
        <div className={styles.block_wrapper}>
          {images.map((item, index) => {
            const variant = index % 2 === 0 ? 'slide-left' : 'slide-right';

            const alignmentClass =
              index % 2 === 0 ? styles.left_align : styles.right_align;

            return (
              <Animation variant={variant} key={index}>
                <article className={`${styles.small_block} ${alignmentClass}`}>
                  <Image
                    quality={100}
                    src={item}
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
                      experience, responsiveness, value, and time to market.
                      From the very start, they’ve been able to staff an
                      effective development team in no time and perform as
                      expected.”
                    </p>
                    <button type="button" className={styles.button}>
                      <ReleaseButton />
                      <p>Read more</p>
                    </button>
                  </div>
                </article>
              </Animation>
            );
          })}
        </div>
      </main>
    </section>
  );
}
