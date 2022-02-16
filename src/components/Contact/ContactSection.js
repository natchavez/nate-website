import React from 'react';
import Margin from '../Layout/Margin';
import styles from './ContactSection.module.css';
import ButtonBW from './ButtonBW';
const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Interested? Contact me</p>
        <p className={styles.secondary}>
          I am always open to opportunities that helps me grow.
        </p>
        <div className={styles['button-margins']}>
          <ButtonBW title={`Let's talk!`} />
        </div>
      </div>
      <hr className={styles.ruling} />
    </div>
  );
};

export default ContactSection;
