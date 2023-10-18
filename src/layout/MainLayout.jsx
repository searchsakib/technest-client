import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const MainLayout = () => {
  return (
    <div>
      <div className="pt-12 pb-12">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      {/* <div className="pt-14 pb-14 bg-blue-800">
        <Footer></Footer>
      </div> */}
    </div>
  );
};

export default MainLayout;
