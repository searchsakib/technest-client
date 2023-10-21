import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router';
import axios from 'axios';

const MyCart = () => {
  const loadedCart = useLoaderData();
  const [myCart, setMyCart] = useState(loadedCart);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://technest-server.vercel.app/cart'
        );
        setMyCart(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: 'Deleting for Sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://technest-server.vercel.app/cart/${_id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          const remainingCart = myCart.filter((cart) => cart._id !== _id);
          setMyCart(remainingCart);
          Swal.fire({
            title: 'Success!',
            text: 'Product Deleted',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0] py-16">
      {isLoading ? (
        <div className="flex items-center justify-center m-14 lg:m-[150px]">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-3xl font-extrabold  text-[#3B3B3B] text-center">
            My Cart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 px-5 md:px-5 lg:px-0 my-16 text-[#3B3B3B]">
            {myCart.map((cart) => (
              <div key={cart._id}>
                <div className="card bg-base-100 shadow-xl ">
                  <figure>
                    <img src={cart.image} alt="pics" />
                  </figure>
                  <div className="card-body text-center bg-gradient-to-r from-violet-200 to-blue-200">
                    <h2 className="card-title mx-auto font-bold capitalize">
                      <span className="font-normal">Name :</span> {cart.name}{' '}
                    </h2>
                    <h2 className="card-title mx-auto font-bold capitalize">
                      <span className="font-normal">Brand :</span> {cart.brand}{' '}
                    </h2>
                    <p className="m-2 text-xl capitalize font-medium">
                      <span className="font-normal">Type :</span> {cart.type}{' '}
                    </p>
                    <p className="font-semibold text-lg">
                      Price: {cart.price}${' '}
                    </p>
                    <div className="">
                      <div className="card-actions justify-center mt-2">
                        <button
                          onClick={() => handleDelete(cart._id)}
                          className="btn bg-orange-500 text-white hover:text-orange-500 hover:bg-orange-900 hover:border-2  text-xl px-10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M3.33333 17.7778C3.33333 19.0056 4.32776 20 5.55557 20H14.4445C15.6722 20 16.6667 19.0056 16.6667 17.7778V4.44446H3.33333V17.7778Z"
                              fill="white"
                            />
                            <path
                              d="M13.8889 1.11109L12.7778 0H7.22224L6.11109 1.11109H2.22224V3.33333H17.7778V1.11109H13.8889Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
