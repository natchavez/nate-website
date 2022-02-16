import React from 'react';
import styles from './AboutPage.module.css';
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Who am I?</p>
        <p className={styles.paragraphs}>
          I am a Computer Science student located in the Philippines. I have a
          serious passion when it comes to programming, developing, and learning
          new things.
        </p>
        <p className={styles.paragraphs}>
          A problem solver, team-player, leader, and gives attention to every
          detail. I am fond of anime, Japanese language and computer games. I
          have a supportive parents, three lovely sisters, and a beautiful
          girlfriend who is always by my side.
        </p>
        <p className={styles.paragraphs}>
          Interested in becoming a full-stack web developer, and incorporating
          Machine Learning as well.
        </p>
        <p className={styles.paragraphs}>Let's have fun coding.</p>
        <a
          className={styles.linked}
          href='https://www.linkedin.com/in/nathaniel-chavez-349351152/'
          className={styles.resume}
        >
          My resume
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
