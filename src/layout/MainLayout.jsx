import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <div className="border-b-2 border-black">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="border-t-2 border-black">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
