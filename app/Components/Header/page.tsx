import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.main} id="header">
      <h3 className={styles.main_header}>
        {/* <h3 className={styles.main_header_left}>{'>'}</h3>
        <h3 className={styles.main_header_center}>Soft Does</h3>
        <h3 className={styles.main_header_right}>{'<'}</h3> */}
        <p className={styles.main_header_left}>&gt;</p> SOFT DOES <p className={styles.main_header_right}>&lt;</p>
      </h3>
      <div className={styles.main_nav}>
        <a href="">Services</a>
        <a href="">Expertise</a>
        <a href="">Industies</a>
        <a href="">Success Stories</a>
        <a href="">Solution Hub</a>
        <a href="">Company</a>
        <a href="">Insights</a>
      </div>
      <div className={styles.main_button}>
        <button>Contact us</button>
      </div>
    </div>
  );
}
