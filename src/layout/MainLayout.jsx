import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    // data-theme="dark"
    <div>
      <div className="bg-blue-300">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="bg-blue-300">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
