import { Link } from 'react-router-dom';

const BrandCard = ({ myBrand }) => {
  const { brand_image, brand_name } = myBrand || {};

  return (
    <div>
      <Link to={`/inside-brand/${brand_name}`}>
        <div className="bg-white rounded-lg">
          <div className="max-w-[150px] mx-auto">
            <img src={brand_image} alt="Shoes" className="rounded-xl" />
          </div>
          <h2 className="text-center text-xl pb-5 capitalize">
            {' '}
            {brand_name}{' '}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
