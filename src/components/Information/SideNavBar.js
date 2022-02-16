import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import styles from './SideNavBar.module.css';

const SideNavBar = () => {
  return (
    <div>
      <div className={styles.centered}>
        <div className={styles.content}>
          <ul>
            <Link to='/about' className={styles['link-style']}>
              <li className={styles.border}>About</li>
            </Link>
            <Link to='/my-skills' className={styles['link-style']}>
              <li>My Skills</li>
            </Link>
            <Link to='/projects' className={styles['link-style']}>
              <li className={styles.border}>Projects</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
