import { useEffect, useState } from 'react';
import BrandCard from '../BrandCard/BrandCard';

const Brands = () => {
  const [myBrands, setMyBrands] = useState([]);
  useEffect(() => {
    fetch('/brands.json')
      .then((res) => res.json())
      .then((data) => setMyBrands(data));
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto rounded-2xl bg-orange-100 mt-[100px] mb-[100px] py-[70px] px-7 md:px-16 lg:px-20">
      <div className="max-w-3xl mx-auto text-center pb-10">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Renowned Brands</h2>
        <p className="mt-4 text-lg text-gray-700">
          We sell top-tier products from industry giants, redefining innovation
          and reliability for our customers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
        {myBrands?.map((myBrand, idx) => (
          <BrandCard key={idx} myBrand={myBrand}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
