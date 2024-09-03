import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import pin from '@/public/pins/lime.svg';

export default function ServicesCollab() {
  return (
    <div className={styles.main}>
      <h2>Our collaboration and engagement models</h2>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Time and materials Source</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Fixed price Source</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Managed team</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Managed product</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Time and materials Source</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.block}></div>
          <div className={styles.title}>Time and materials Source</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Architecture assessment
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Technical feasibility audit
            </div>
            <div className={styles.row}>
              <Image src={pin} alt="pin" />
              Development process audit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
