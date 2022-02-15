import React from 'react';

import styles from './Margin.module.css';

const Margin = (props) => {
  return <div className={styles.layout}>{props.children}</div>;
};

export default Margin;
