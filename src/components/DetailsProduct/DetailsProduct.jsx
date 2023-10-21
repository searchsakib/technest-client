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
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 mt-6 px-6 md:px-10 lg:px-10 xl:px-0 mb-20">
        <div className="relative -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            className="w-full"
            src={image}
            alt="img-blur-shadow"
            layout="fill"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-violet-700 to-rose-700 opacity-90 h-[70px] md:h-[140px] lg:h-[230px] hidden md:block"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-violet-700 to-rose-700 opacity-90 h-[70px] md:hidden lg:hidden"></div>

          <div
            className="absolute lg:bottom-8 lg:left-0 md:bottom-4 md:left-0 
          bottom-1 left-3 right-0 flex items-center justify-start h-16 "
          >
            <button
              onClick={handleAddToCart}
              className=" text-blue-800 text-xs md:hidden lg:hidden px-3 py-2 rounded shadow-md w-fit bg-white font-medium hover:bg-orange-800 hover:text-white"
            >
              Add to Cart {price}$
            </button>

            <div className="p-10 mb-32 hidden md:block">
              <div className="flex justify-between items-center">
                <h5 className="mb-2 block text-3xl text-white pt-9 pb-2 font-bold leading-snug tracking-normal antialiased capitalize">
                  {name}
                </h5>
                <button
                  onClick={handleAddToCart}
                  className=" text-blue-800 font-semibold text-xs md:text-lg lg:text-lg lg:px-[26px] lg:py-4 md:px-[20px] md:py-3 px-3 py-2 rounded shadow-md w-fit bg-white hover:bg-orange-800 hover:text-white"
                >
                  Add to Cart {price}$
                </button>
              </div>
              <p className="block text-[10px]  lg:text-base font-medium leading-none lg:leading-[30px] antialiased text-white">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden lg:hidden">
          <h5 className="block text-[25px] text-[#0B0B0B] pt-8 pb-1 font-bold leading-snug tracking-normal antialiased capitalize">
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
