import Image from 'next/image';
import styles from './TeamAugmentation.module.scss';
import pin from '../../../../public/pins/blue-pin.svg';
import third from '../../../../public/elements/third.svg';

export default function TeamAugmentation() {
  return (
    <div className={styles.main} id="header">
      <div className={styles.main_left}>
        <h2>Development team augmentation</h2>
        <div className={styles.main_left_list}>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Off-site and on-site team staffing and ramp-up
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Extensive talent base
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Talent nurturing and retention policy
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Management of distributed teams
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Performance management
          </div>
        </div>
        <div className={styles.main_left_wrapper}>
          <button className={styles.main_left_wrapper_button}>Read More</button>
        </div>
      </div>
      <div className={styles.main_right}>
        <Image src={third} alt="element" />
      </div>
    </div>
  );
}
