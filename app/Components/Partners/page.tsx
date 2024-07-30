import Image from "next/image";
import styles from "./Partners.module.scss";
import halykbank from '../../../public/halykBanc.svg'
import icu from '../../../public/icu.svg'
import raif from '../../../public/raiffeisen.svg'
import auchan from '../../../public/auchan.svg'
import bcc from '../../../public/bcc.svg'

export default function Partners() {
  return (
    <div className={styles.main} id='header'>
      <Image src={halykbank} alt='halykbank'></Image>
      <Image src={icu} alt='icu'></Image>
      <Image src={raif} alt='raif'></Image>
      <Image src={auchan} alt='auchan'></Image>
      <Image src={bcc} alt='bcc'></Image>
    </div>
  );
}
