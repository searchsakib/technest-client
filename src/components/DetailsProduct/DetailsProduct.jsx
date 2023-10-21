import Swal from 'sweetalert2';
import axios from 'axios';

import { useLoaderData } from 'react-router';
const DetailsProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, description, rating, image } =
    product || {};
  const newCart = {
    name,
    brand,
    type,
    price,
    description,
    rating,
    image,
  };

  const handleAddToCart = async () => {
    const res = await axios.post(
      'https://technest-server.vercel.app/cart',
      newCart,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Product Added to Cart',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="max-w-[1320px] mx-auto mt-[104px] mb-[104px] px-3">
      <div className="card bg-base-100 shadow-xl max-w-[635px] text-[#3B3B3B] mx-auto">
        <figure>
          <img src={image} alt="pics" />
        </figure>
        <div className="card-body text-center bg-gradient-to-r from-indigo-200 to-blue-200">
          <h2 className="card-title mx-auto font-bold text-2xl capitalize">
            <span className="font-normal">
              {' '}
              <span className="text-orange-500 underline">Name: </span>{' '}
            </span>{' '}
            {name}{' '}
          </h2>
          <h2 className="card-title mx-auto font-bold text-xl capitalize pt-4">
            <span className="font-normal">
              {' '}
              <span className="text-orange-500 underline">Price: </span>{' '}
            </span>{' '}
            {price}${' '}
          </h2>
          <p className="font-normal text-xl py-4 leading-8">
            {' '}
            <span className="text-orange-500 underline">
              Description:{' '}
            </span>{' '}
            {description}
          </p>

          <div className="flex items-center justify-center gap-10">
            <div className="card-actions justify-center mt-2">
              <button
                onClick={handleAddToCart}
                className="btn bg-orange-500 text-white hover:text-orange-500 hover:bg-blue-50 hover:border-2 hover:border-orange-500"
              >
                Add to Cart {price}$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
