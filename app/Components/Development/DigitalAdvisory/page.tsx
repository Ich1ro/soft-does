import Image from 'next/image';
import fourth from '../../../../public/elements/fourth.svg';
import pin from '../../../../public/pins/pink-pin.svg';
import Animation from '../../Animations/Animations';
import styles from './DigitalAdvisory.module.scss';
import Link from 'next/link';

export default function DigitalAdvisory() {
  return (
    <div className={styles.main} id="">
      <div className={styles.main_left}>
        <Animation
          delay={200}
          variant="slide-right"
          className={styles.main_left_div}
        >
          <h2>IT consulting and digital advisory</h2>
        </Animation>
        <div className={styles.main_left_list}>
          <Animation
            delay={250}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Functionality augmentation
            </div>
          </Animation>
          <Animation
            delay={300}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Legacy modernization
            </div>
          </Animation>
          <Animation
            delay={350}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Minimization of security breaches
            </div>
          </Animation>
          <Animation
            delay={400}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Process optimization and automation
            </div>
          </Animation>
          <Animation
            delay={460}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Cost reduction of IT support and maintenance
            </div>
          </Animation>
        </div>
        <div className={styles.main_left_wrapper}>
          <Animation
            delay={550}
            variant="slide-right"
            // className={styles.main_left_list_wrapper}
          >
            <Link href="/technologies">
              <button className={styles.main_left_wrapper_button}>
                Read More
              </button>
            </Link>
          </Animation>
        </div>
      </div>
      <div className={styles.main_right}>
        <Animation
          delay={300}
          variant="slide-left"
          className={styles.main_right_wrapper}
        >
          <Image src={fourth} alt="element" />
        </Animation>
      </div>
    </div>
  );
}
