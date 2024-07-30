import Image from 'next/image';
import styles from './Consulting.module.scss';
import pin from '../../../../public/pins/green-pin.svg';
import second from '../../../../public/elements/second.svg';

export default function Consulting() {
  return (
    <div className={styles.main} id="header">
      <div className={styles.main_left}>
        <h2>IT consulting and digital advisory</h2>
        <div className={styles.main_left_list}>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Architecture assessment
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Technical feasibility audit
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Development process audit
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Solution design
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Proof of concept development
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Development strategy
          </div>
        </div>
        <div className={styles.main_left_wrapper}>
          <button className={styles.main_left_wrapper_button}>Read More</button>
        </div>
      </div>
      <div className={styles.main_right}>
        <Image src={second} alt="element" />
      </div>
    </div>
  );
}
