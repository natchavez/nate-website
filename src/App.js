import MainPage from './pages/MainPage/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// importing pages for information section
import AboutPage from './pages/AboutPage/AboutPage';
import IntroductionPage from './pages/IntroductionPage/IntroductionPage';
import MySkillsPage from './pages/MySkillsPage/MySkillsPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
function App() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
