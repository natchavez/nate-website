import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './InfoSection.module.css';
import SideNavBar from './SideNavBar';
import IntroductionPage from '../../pages/IntroductionPage/IntroductionPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import MySkillsPage from '../../pages/MySkillsPage/MySkillsPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';

const InfoSection = () => {
  // const [selectedPage, setSelectedPage] = useState('');
  const pageSelectHandler = (pageName) => {
    console.log(pageName);
  };
  return (
    <section className={styles.container}>
      <Router>
        <SideNavBar />
        <div className={styles.information}>
          <Routes>
            <Route exact path='/' element={<IntroductionPage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/my-skills' element={<MySkillsPage />} />
            <Route exact path='/projects' element={<ProjectsPage />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
};

export default InfoSection;
