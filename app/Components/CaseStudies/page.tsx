import Image from 'next/image';
import styles from './CaseStudies.module.scss';
import case1 from '../../../public/case1.png';
import case2 from '../../../public/case2.png';
import case3 from '../../../public/case3.png';

export default function CaseStudies() {
  return (
    <div className={styles.main} id="header">
      <h1>Case studies</h1>
      <div className={styles.main_block}>
        <Image src={case1} alt="case" />
        <div className={styles.main_block_content}>
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </div>
      </div>
      <div className={`${styles.main_block} ${styles.main_block_right}`}>
        <div className={styles.main_block_content}>
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </div>
        <Image src={case2} alt="case" />
      </div>
      <div className={styles.main_block}>
        <Image src={case3} alt="case" />
        <div className={styles.main_block_content}>
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </div>
      </div>
      <div className={styles.main_link}>
        <p>View more projects</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}
