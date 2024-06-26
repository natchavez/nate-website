import React from 'react';
import MainNavBar from './MainNavBar';
import styles from './MainSection.module.css';
import Margin from '../Layout/Margin';
import PersonalImage from './PersonalImage';
const MainSection = () => {
  return (
    <section className={styles.header}>
      <MainNavBar />
      <Margin>
        <div className={styles['center-content']}>
          <h1 className={styles['prime']}>
            A Full Stack <br />
            Software Engineer.
          </h1>
          <p className={styles['sec']}>
            I focus on Java backend and React.js Frontend
          </p>
          <PersonalImage />
        </div>
      </Margin>
    </section>
  );
};

export default MainSection;
