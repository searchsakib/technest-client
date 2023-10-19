import { Link } from 'react-router-dom';

const BrandCard = ({ myBrand }) => {
  const { id, brand_image, brand_name } = myBrand || {};
  return (
    <div>
      <Link to={`/inside-brand/${id}`}>
        <div className="bg-white rounded-2xl">
          <div className="max-w-[150px] mx-auto">
            <img src={brand_image} alt="Shoes" className="rounded-xl" />
          </div>
          <h2 className="text-center text-xl pb-5"> {brand_name} </h2>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
