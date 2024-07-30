import Image from 'next/image';
import styles from './DigitalAdvisory.module.scss';
import pin from '../../../../public/pins/pink-pin.svg';
import fourth from '../../../../public/elements/fourth.svg'

export default function DigitalAdvisory() {
  return (
    <div className={styles.main} id="header">
      <div className={styles.main_left}>
        <h2>IT consulting and digital advisory</h2>
        <div className={styles.main_left_list}>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Functionality augmentation
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Legacy modernization
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Minimization of security breaches
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Process optimization and automation
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Cost reduction of IT support and maintenance
          </div>
        </div>
        <div className={styles.main_left_wrapper}>
          <button className={styles.main_left_wrapper_button}>Read More</button>
        </div>
      </div>
      <div className={styles.main_right}>
        <Image src={fourth} alt='element' />
      </div>
    </div>
  );
}
