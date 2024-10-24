import React from 'react';
import styles from './styles.module.scss';
import Animation from '../Animations/Animations';
import { ProcessCardGroup } from './ProcessCardGroup/page';

export default function ProcessContent() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.processSection}>
        <Animation>
          <h1 className={styles.processSection__header}>
            THE SOFT DOES
            <br />
            END-TO-END PROCESS STEPS
          </h1>
        </Animation>
        <div className={styles.processSection__content}>
          <ProcessCardGroup position="left" />
          <ProcessCardGroup />
        </div>
      </section>
    </div>
  );
}
