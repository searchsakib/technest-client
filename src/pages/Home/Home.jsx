import Banner from '../../components/Banner/Banner';
import Brands from '../../components/Brands/Brands';

const Home = () => {
  return (
    <div className="pb-[100px] overflow-x-hidden">
      <Banner></Banner>
      <div>
        <Brands></Brands>
      </div>
      {/* <div>
        <Review></Review>
      </div> */}
      {/* <div>
        <Faqs></Faqs>
      </div> */}
    </div>
  );
};

export default Home;
