import Image from 'next/image';
import first from '../../../../public/elements/first.svg';
import pin from '../../../../public/pins/purple-pin.svg';
import Animation from '../../Animations/Animations';
import styles from './Software.module.scss';

export default function Software() {
  return (
    <div className={styles.main} id="services">
      <div className={styles.main_left}>
        <Animation
          delay={200}
          variant="slide-left"
          className={styles.main_left_div}
        >
          <h2>Custom software development</h2>
        </Animation>
        <div className={styles.main_left_list}>
          <Animation
            delay={250}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Solutions tailored to specific business needs
            </div>
          </Animation>
          <Animation
            delay={300}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Domain experience
            </div>
          </Animation>
          <Animation
            delay={350}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Technical excellence
            </div>
          </Animation>
          <Animation
            delay={400}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Process visibility
            </div>
          </Animation>
          <Animation
            delay={450}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Constraint management framework
            </div>
          </Animation>
          <Animation
            delay={500}
            variant="slide-left"
            className={styles.main_left_list_wrapper}
          >
            <div className={styles.main_left_list_wrapper_item}>
              <Image src={pin} alt="pin" />
              Compliance with non-functional requirements
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
          <Image src={first} alt="donut" />
        </Animation>
      </div>
    </div>
  );
}
