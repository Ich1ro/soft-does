import Image from 'next/image';
import styles from './About.module.scss';
import first from '../../../public/first-certified.svg'
import second from '../../../public/second-certified.svg'
import third from '../../../public/third-certified.svg'
import fourth from '../../../public/fourth-certified.svg'
import fifth from '../../../public/fifth-certified.svg'

export default function About() {
  return (
    <div className={styles.main} id="header">
      <div className={styles.main_content}>
        <div className={styles.main_content_top}>
          <div className={styles.main_content_top_left}>
            <h2>About us</h2>
            <p>
              Since 2008, Yalantis has been helping companies in the FinTech,
              healthcare, real estate, supply chain management, and other
              industries succeed with custom software solutions. Driven by our
              clients business-specific needs and time and budget constraints,
              our software development company builds and augments secure,
              stable, scalable, and highly functional digital products to
              deliver maximum value and ensure business sustainability.
            </p>
          </div>
          <div className={styles.main_content_top_right}>
            <div className={styles.main_content_top_right_info}>
              <h3>15+</h3>
              <p>
                years of experience in software engineering and IT consulting
              </p>
            </div>
            <div className={styles.main_content_top_right_info}>
              <h3>500+</h3>
              <p>software developers and other IT professionals on board</p>
            </div>
            <div className={styles.main_content_top_right_info}>
              <h3>35+</h3>
              <p>active clients building and augmenting software with us</p>
            </div>
          </div>
        </div>
        <div className={styles.main_content_awards}>
          <Image src={first} alt='sertificate' />
          <Image src={second} alt='sertificate' />
          <Image src={third} alt='sertificate' />
          <Image src={fourth} alt='sertificate' />
          <Image src={fifth} alt='sertificate' />
        </div>
      </div>
    </div>
  );
}
