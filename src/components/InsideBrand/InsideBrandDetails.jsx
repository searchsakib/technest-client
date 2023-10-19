import { useEffect, useState } from 'react';

const InsideBrandDetails = ({ insideBrand }) => {
  const { brand_image, brand_name } = insideBrand || {};

  const [myProduct, setMyProduct] = useState([]);
  useEffect(() => {
    fetch('https://technest-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="text-center">My products length {myProduct.length} </div>
      <div className="mx-auto w-[150px]">
        <img src={brand_image} alt="" />
      </div>
      <h2 className="text-3xl text-orange-500 text-center pb-20">
        {' '}
        {brand_name}{' '}
      </h2>
    </div>
  );
};

export default InsideBrandDetails;