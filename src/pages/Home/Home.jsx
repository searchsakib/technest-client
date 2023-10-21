import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import Contact from '../../components/Contact/Contact';
import Features from '../../components/Features/Features';

const Home = () => {
  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Banner></Banner>
      <div className="p-4 md:p-5 lg:p-0">
        <Brands></Brands>
      </div>
      <div className="p-4 md:p-5 lg:p-0">
        <Features></Features>
      </div>
      <div className="p-4 md:p-5 lg:p-0">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
