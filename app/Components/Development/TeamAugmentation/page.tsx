import Image from 'next/image';
import third from '../../../../public/elements/third.svg';
import pin from '../../../../public/pins/blue-pin.svg';
import Animation from '../../Animations/Animations';
import styles from './TeamAugmentation.module.scss';

export default function TeamAugmentation() {
  return (
    <div className={styles.main} id="">
      <div className={styles.main_left}>
        <Animation
          delay={200}
          variant="slide-left"
          className={styles.main_left_div}
        >
          <h2>Development team augmentation</h2>
        </Animation>
        <div className={styles.main_left_list}>
          <Animation
            delay={250}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Off-site and on-site team staffing and ramp-up
            </div>
          </Animation>
          <Animation
            delay={300}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Extensive talent base
            </div>
          </Animation>
          <Animation
            delay={350}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Talent nurturing and retention policy
            </div>
          </Animation>
          <Animation
            delay={400}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Management of distributed teams
            </div>
          </Animation>
          <Animation
            delay={450}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Performance management
            </div>
          </Animation>
        </div>
        <div className={styles.main_left_wrapper}>
          <Animation
            delay={550}
            variant="slide-left"
            // className={styles.main_left_list_wrapper}
          >
            <button className={styles.main_left_wrapper_button}>
              Read More
            </button>
          </Animation>
        </div>
      </div>
      <div className={styles.main_right}>
        <Animation
          delay={300}
          variant="slide-right"
          className={styles.main_right_wrapper}
        >
          <Image src={third} alt="element" />
        </Animation>
      </div>
    </div>
  );
}
