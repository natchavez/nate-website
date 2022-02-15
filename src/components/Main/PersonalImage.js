import React from 'react';
import natnat from '../../../src/assets/natnat.jpg';
import styles from './PersonalImage.module.css';
const PersonalImage = () => {
  return <img src={natnat} alt='nate' className={styles.rounded} />;
};

export default PersonalImage;
