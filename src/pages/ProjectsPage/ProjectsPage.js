import React from 'react';
import styles from './ProjectsPage.module.css';
import natnat from '../../../src/assets/natnat.jpg';
import one from '../../../src/assets/one.jpg';
import two from '../../../src/assets/two.jpg';
import three from '../../../src/assets/three.jpg';
import four from '../../../src/assets/four.jpg';

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Projects</p>
        <p className={styles.secondary}>A hobby in disguise.</p>
      </div>

      <div className={styles['img-container']}>
        <img src={one} />
        <img src={two} />
      </div>

      <div className={styles['img-container']}>
        <img src={three} />
        <img src={four} />
      </div>
    </div>
  );
};

export default ProjectsPage;
