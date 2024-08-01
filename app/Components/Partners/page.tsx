import Image from 'next/image';
import auchan from '../../../public/auchan.svg';
import bcc from '../../../public/bcc.svg';
import halykbank from '../../../public/halykBanc.svg';
import icu from '../../../public/icu.svg';
import raif from '../../../public/raiffeisen.svg';
import Animation from '../Animations/Animations';
import styles from './Partners.module.scss';

export default function Partners() {
  return (
    <div className={styles.main} id="partners">
      <Animation delay={200} variant="slide-bottom">
        <Image src={halykbank} alt="halykbank"></Image>
      </Animation>
      <Animation delay={300} variant="slide-bottom">
        <Image src={icu} alt="icu"></Image>
      </Animation>
      <Animation delay={400} variant="slide-bottom">
        <Image src={raif} alt="raif"></Image>
      </Animation>
      <Animation delay={500} variant="slide-bottom">
        <Image src={auchan} alt="auchan"></Image>
      </Animation>
      <Animation delay={600} variant="slide-bottom">
        <Image src={bcc} alt="bcc"></Image>
      </Animation>
    </div>
  );
}
