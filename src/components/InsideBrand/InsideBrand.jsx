import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import InsideBrandDetails from './InsideBrandDetails';

const InsideBrand = () => {
  const [insideBrand, setInsideBrand] = useState([]);

  const { id } = useParams();

  const insideBrandFetched = useLoaderData();

  useEffect(() => {
    const findBrand = insideBrandFetched?.find((theBrand) => theBrand.id == id);
    setInsideBrand(findBrand);
  }, [id, insideBrandFetched]);

  return (
    <div>
      <InsideBrandDetails insideBrand={insideBrand}></InsideBrandDetails>
    </div>
  );
};

export default InsideBrand;
