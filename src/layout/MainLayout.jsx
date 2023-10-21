import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    // data-theme="dark"
    <div>
      <div className="bg-blue-100">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="bg-blue-100">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
