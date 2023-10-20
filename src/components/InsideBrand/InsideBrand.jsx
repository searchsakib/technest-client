import { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
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
        <div className="flex items-center py-[92px]">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <p className="text-2xl font-semibold md:text-4xl text-orange-500">
                Intel Products are coming Soon....
              </p>
              <p className="mt-4 mb-8 text-orange-500 ">
                But dont worry, you can find plenty of other Branded Products on
                our homepage.
              </p>
              <Link
                to="/"
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 font-semibold rounded text-white bg-orange-500 hover:text-orange-500 hover:bg-white hover:outline"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <InsideBrandDetails insideBrand={insideBrand}></InsideBrandDetails>
      )}
    </div>
  );
};

export default InsideBrand;
