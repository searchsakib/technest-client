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
    <div className="max-w-[1320px] mx-auto mt-[104px]">
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 mt-20 px-6 md:px-10 lg:px-10 xl:px-0">
        <div className="relative -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-[#0B0B0B80] opacity-60 h-[70px] md:h-[100px] lg:h-[130px]"></div>

          <div
            className="absolute lg:bottom-8 lg:left-9 md:bottom-4 md:left-7 
        bottom-1 left-3 right-0 flex items-center justify-start h-16"
          >
            <button
              onClick={handleAddToCart}
              className=" text-white text-xs md:text-lg lg:text-lg lg:px-[26px] lg:py-4 md:px-[20px] md:py-3 px-3 py-2 rounded shadow-md w-fit bg-orange-500 hover:text-orange-500 hover:bg-white hover:outline hover:outline-3 hover:outline-orange-500"
            >
              Add to Cart {price}$
            </button>
          </div>
        </div>
        <div className="mb-28">
          <h5 className="mb-2 block text-[40px] text-[#0B0B0B] pt-14 pb-4 font-bold leading-snug tracking-normal antialiased capitalize">
            {name}
          </h5>
          <p className="block text-base font-normal leading-[30px] antialiased text-[#0B0B0BB2]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
