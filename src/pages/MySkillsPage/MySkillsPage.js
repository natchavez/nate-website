import React from 'react';
import styles from './MySkillsPage.module.css';

const MySkillsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>Skills & Experience</p>
        <p className={styles.paragraphs}>
          I started coding on my first year in college. It is not easy at first,
          but eventually I got the hang of it. The first programming language I
          learned is Java, where I applied my problem solving skills, and
          algorithms to solve real world problem scenario. I also learned SQL on
          my stay in my college.
        </p>
        <p className={styles.paragraphs}>
          I have experience in using Python as well as we conducted studies
          related to Machine Learning, mostly on Natural Language Processing and
          Image processing. The thesis that we published includes these two
          fields of Machine Learning.
        </p>
        <p className={styles.paragraphs}>
          I am currently exploring website development using svelte, React.js,
          Next.js, Node.js, MongoDB, and CSS Frameworks like Bootstrap and
          Styled Components.
        </p>
      </div>
    </div>
  );
};

export default MySkillsPage;
