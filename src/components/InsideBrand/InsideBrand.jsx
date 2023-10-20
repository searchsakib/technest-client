import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import InsideBrandDetails from './InsideBrandDetails';

const InsideBrand = () => {
  const [insideBrand, setInsideBrand] = useState([]);

  const { brand_name } = useParams();

  const insideBrandFetched = useLoaderData();

  useEffect(() => {
    // console.log('insideBrandFetched: ', insideBrandFetched);
    const findBrand = insideBrandFetched?.find(
      (theBrand) => theBrand.brand_name === brand_name
    );
    // console.log('brand_name: ', brand_name);
    // console.log('findBrand: ', findBrand);
    setInsideBrand(findBrand);
  }, [brand_name, insideBrandFetched]);

  return (
    <div>
      {brand_name === 'intel' ? (
        <h2 className="text-5xl text-orange-500 text-center py-[200px]">
          Intel Products Coming Soon.......
        </h2>
      ) : (
        <InsideBrandDetails insideBrand={insideBrand}></InsideBrandDetails>
      )}
    </div>
  );
};

export default InsideBrand;
