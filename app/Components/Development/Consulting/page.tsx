import Image from 'next/image';
import second from '../../../../public/elements/second.svg';
import pin from '../../../../public/pins/green-pin.svg';
import Animation from '../../Animations/Animations';
import styles from './Consulting.module.scss';
import Link from 'next/link';

export default function Consulting() {
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
              Architecture assessment
            </div>
          </Animation>
          <Animation
            delay={300}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
          </Animation>
          <Animation
            delay={350}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </Animation>
          <Animation
            delay={400}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Solution design
            </div>
          </Animation>
          <Animation
            delay={450}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Proof of concept development
            </div>
          </Animation>
          <Animation
            delay={500}
            variant="slide-right"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Development strategy
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
          <Image src={second} alt="element" />
        </Animation>
      </div>
    </div>
  );
}
