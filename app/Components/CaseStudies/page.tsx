import Image from 'next/image';
import arrow from '../../../public/arrow.svg';
import case1 from '../../../public/case1.png';
import case2 from '../../../public/case2.png';
import case3 from '../../../public/case3.png';
import Animation from '../Animations/Animations';
import styles from './CaseStudies.module.scss';

export default function CaseStudies() {
  return (
    <div className={styles.main} id="">
      <h1>Case studies</h1>
      <div className={styles.main_block}>
        <Animation
          delay={200}
          variant="slide-left"
          className={styles.main_block_image}
        >
          <Image src={case1} alt="case" />
        </Animation>
        <Animation
          delay={200}
          variant="slide-right"
          className={styles.main_block_content}
        >
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </Animation>
      </div>
      <div className={`${styles.main_block} ${styles.main_block_right}`}>
        <Animation
          delay={200}
          variant="slide-left"
          className={styles.main_block_content}
        >
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </Animation>
        <Animation
          delay={200}
          variant="slide-right"
          className={styles.main_block_image}
        >
          <Image src={case2} alt="case" />
        </Animation>
      </div>
      <div className={styles.main_block}>
        <Animation
          delay={200}
          variant="slide-left"
          className={styles.main_block_image}
        >
          <Image src={case3} alt="case" />
        </Animation>
        <Animation
          delay={200}
          variant="slide-right"
          className={styles.main_block_content}
        >
          <p>Web & Mobile Development</p>
          <h4>Data strategy for online banking</h4>
        </Animation>
      </div>
      <div className={styles.main_link}>
        <a>View more projects</a>
        <Image src={arrow} alt="arrow" />
      </div>
    </div>
  );
}
