import React from 'react';
import styles from './IntroductionPage.module.css';
const IntroductionPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>
          Hi.
          <br /> I'm Nate, <br /> I code.
        </p>
      </div>
    </div>
  );
};

export default IntroductionPage;
