import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="pt-12 pb-12">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
