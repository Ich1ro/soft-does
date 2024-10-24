import { technologiesList } from '@/app/lib/data';
import styles from './styles.module.scss';
import Animation from '../Animations/Animations';

export default function ExperienceInIndustries() {
  return (
    <section className={styles.technologies_list}>
      <h1>We have experience in these industries</h1>
      <div className={styles.card_wrapper}>
        {technologiesList.map((item, index) => (
          <Animation variant="slide-top" key={index}>
            <article className={styles.card}>
              <div></div>
              <h3>{item}</h3>
              <p>
                “Yalantis has been a great fit for us because of their
                experience, responsiveness, value, and time to market. From the
                very start, they’ve been able to staff an effective development
                team in no time and perform as expected.”
              </p>
            </article>
          </Animation>
        ))}
      </div>
    </section>
  );
}
