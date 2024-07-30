import Image from 'next/image';
import styles from './Software.module.scss';
import pin from '../../../../public/pins/purple-pin.svg';
import first from '../../../../public/elements/first.svg';

export default function Software() {
  return (
    <div className={styles.main} id="header">
      <div className={styles.main_left}>
        <h2>Custom software development</h2>
        <div className={styles.main_left_list}>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Solutions tailored to specific business needs
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Domain experience
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Technical excellence
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Process visibility
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Constraint management framework
          </div>
          <div className={styles.main_left_list_item}>
            <Image src={pin} alt="pin" />
            Compliance with non-functional requirements
          </div>
        </div>
        <div className={styles.main_left_wrapper}>
          <button className={styles.main_left_wrapper_button}>Read More</button>
        </div>
      </div>
      <div className={styles.main_right}><Image src={first} alt='donut' /></div>
    </div>
  );
}
