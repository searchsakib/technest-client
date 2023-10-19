import { useEffect, useState } from 'react';
import Cards from './Cards';

const InsideBrandDetails = ({ insideBrand }) => {
  const { brand_image, brand_name } = insideBrand || {};

  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    fetch('https://technest-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
        {myProducts?.map((myProduct, idx) => (
          <Cards key={idx} myProduct={myProduct}></Cards>
        ))}
      </div>

      {/* <div className="text-center">My products length {myProducts.length} </div>
      <div className="mx-auto w-[150px]">
        <img src={brand_image} alt="" />
      </div>
      <h2 className="text-3xl text-orange-500 text-center pb-20">
        {' '}
        {brand_name}{' '}
      </h2> */}
    </div>
  );
};

export default InsideBrandDetails;
