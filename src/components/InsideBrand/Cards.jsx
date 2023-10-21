import { Link } from 'react-router-dom';

const Cards = ({ myProduct }) => {
  const { _id, name, brand, type, price, description, rating, image } =
    myProduct || {};

  return (
    <div className="card bg-base-100 shadow-xl text-[#3B3B3B]">
      <figure>
        <img src={image} alt="pics" />
      </figure>
      <div className="card-body text-center bg-gradient-to-r from-sky-200 to-purple-200">
        <h2 className="card-title mx-auto font-bold capitalize">
          <span className="font-normal">Name:</span> {name}{' '}
        </h2>
        <h2 className="card-title mx-auto font-bold capitalize">
          <span className="font-normal">Brand:</span> {brand}{' '}
        </h2>
        <p className="m-2 text-xl capitalize font-medium">
          <span className="font-normal">Type:</span> {type}{' '}
        </p>
        <p className="font-semibold text-lg">Price: {price}$ </p>
        {/* {rating} */}
        <div className="font-semibold text-lg">
          <span className="mr-2">Rating:</span>
          <div className="rating rating-sm">
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="card-actions justify-center mt-2">
            <Link to={`/details-product/${_id}`}>
              <button className="btn bg-orange-500 text-white hover:text-orange-500 hover:bg-blue-50 hover:border-2 hover:border-orange-500">
                Details
              </button>
            </Link>
          </div>
          <div className="card-actions justify-center mt-2">
            <Link to={`/update-product/${_id}`}>
              <button className="btn bg-orange-500 text-white hover:text-orange-500 hover:bg-blue-50 hover:border-2 hover:border-orange-500">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
