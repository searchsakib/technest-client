import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'bg-gray-800' : 'bg-white'}>
      <div className={isDarkMode ? 'bg-slate-400' : 'bg-blue-300'}>
        <NavBar toggleDarkMode={toggleDarkMode}></NavBar>
      </div>
      <Outlet></Outlet>
      <div className={isDarkMode ? 'bg-slate-400' : 'bg-blue-300'}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
