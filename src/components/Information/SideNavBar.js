import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import styles from './SideNavBar.module.css';

// PAGENAMES is created to render unique keys for each page
// keys for rendering page using InfoSection.
const PAGENAMES = [
  { id: '001', pageName: 'About' },
  { id: '002', pageName: 'My Skills' },
  { id: '003', pageName: 'Projects' },
];
const SideNavBar = () => {
  return (
    <div>
      <div className={styles.centered}>
        <div className={styles.content}>
          <ul>
            <Link to='/about'>
              <li className={styles.border}>About</li>
            </Link>
            <Link to='/my-skills'>
              <li>My Skills</li>
            </Link>
            <Link to='/projects'>
              <li className={styles.border}>Projects</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
