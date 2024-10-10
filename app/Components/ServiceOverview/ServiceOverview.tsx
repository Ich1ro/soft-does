import styles from './ServiceOverview.module.scss';
import Image from 'next/image';
import technologiesBanner1 from '@/public/banners/technologies-banner1.png';
import technologiesBanner2 from '@/public/banners/technologies-banner2.png';
import Animation from '../Animations/Animations';

export function ServiceOverview() {
  return (
    <section className={styles.service_overview}>
      <Animation variant="slide-left">
        <article className={styles.service_card}>
          <div>
            <h2>IT consulting and digital advisory</h2>
            <p>
              “Yalantis has been a great fit for us because of their experience,
              responsiveness, value, and time to market. From the very start,
              they’ve been able to staff an effective development team in no
              time and perform as expected.”
            </p>
          </div>
          <Image src={technologiesBanner1} quality={100} alt="Banner Image" />
        </article>
      </Animation>
      <Animation variant="slide-right">
        <article className={styles.service_card}>
          <Image src={technologiesBanner2} quality={100} alt="Banner Image" />
          <div className={styles.card_two}>
            <h2>IT consulting and digital advisory</h2>
            <p>
              “Yalantis has been a great fit for us because of their experience,
              responsiveness, value, and time to market. From the very start,
              they’ve been able to staff an effective development team in no
              time and perform as expected.”
            </p>
          </div>
        </article>
      </Animation>
    </section>
  );
}
