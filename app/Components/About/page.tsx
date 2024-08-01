import Image from 'next/image';
import fifth from '../../../public/fifth-certified.svg';
import first from '../../../public/first-certified.svg';
import fourth from '../../../public/fourth-certified.svg';
import second from '../../../public/second-certified.svg';
import third from '../../../public/third-certified.svg';
import Animation from '../Animations/Animations';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.main} id="about">
      <div className={styles.main_content}>
        <div className={styles.main_content_top}>
          <div className={styles.main_content_top_left}>
            <Animation
              delay={200}
              variant="slide-left"
              className={styles.main_content_top_left_div}
            >
              <h2>About us</h2>
            </Animation>
            <Animation
              delay={300}
              variant="slide-left"
              className={styles.main_content_top_left_div}
            >
              <p>
                Since 2008, Yalantis has been helping companies in the FinTech,
                healthcare, real estate, supply chain management, and other
                industries succeed with custom software solutions. Driven by our
                clients business-specific needs and time and budget constraints,
                our software development company builds and augments secure,
                stable, scalable, and highly functional digital products to
                deliver maximum value and ensure business sustainability.
              </p>
            </Animation>
          </div>
          <div className={styles.main_content_top_right}>
            <Animation
              delay={300}
              variant="slide-right"
              className={styles.main_content_top_right_info}
            >
              <h3>15+</h3>
              <p>
                years of experience in software engineering and IT consulting
              </p>
            </Animation>
            <Animation
              delay={400}
              variant="slide-right"
              className={styles.main_content_top_right_info}
            >
              <h3>500+</h3>
              <p>software developers and other IT professionals on board</p>
            </Animation>
            <Animation
              delay={500}
              variant="slide-right"
              className={styles.main_content_top_right_info}
            >
              <h3>35+</h3>
              <p>active clients building and augmenting software with us</p>
            </Animation>
          </div>
        </div>
        <div className={styles.main_content_awards}>
          <Animation delay={200} variant="slide-bottom">
            <Image src={first} alt="sertificate" />
          </Animation>
          <Animation delay={300} variant="slide-bottom">
            <Image src={second} alt="sertificate" />
          </Animation>
          <Animation delay={400} variant="slide-bottom">
            <Image src={third} alt="sertificate" />
          </Animation>
          <Animation delay={500} variant="slide-bottom">
            <Image src={fourth} alt="sertificate" />
          </Animation>
          <Animation delay={600} variant="slide-bottom">
            <Image src={fifth} alt="sertificate" />
          </Animation>
        </div>
      </div>
    </div>
  );
}
