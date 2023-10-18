import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';
import Contact from '../../components/Contact/Contact';
import Features from '../../components/Features/Features';

const Home = () => {
  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Banner></Banner>
      <div>
        <Brands></Brands>
      </div>
      <div>
        <Features></Features>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
