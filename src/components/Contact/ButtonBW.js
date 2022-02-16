import React from 'react';
import styles from './ButtonBW.module.css';
const ButtonBW = (props) => {
  return (
    <a href='' className={styles.button}>
      {props.title}
    </a>
  );
};

export default ButtonBW;
