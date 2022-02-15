import React from 'react';
import styles from './MainNavBar.module.css';
import logo from '../../../src/assets/logo.png';
import ButtonBW from '../Contact/ButtonBW';
const MainNavBar = () => {
  return (
    <nav>
      <a href=''>
        <img src={logo} />
      </a>
      <div className={styles['nav-links']}>
        {/* <ul>
          <li>
            <ButtonBW />
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default MainNavBar;
