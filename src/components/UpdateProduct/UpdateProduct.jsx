import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, description, rating, image } =
    product || {};

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    // const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const updatedProduct = {
      name,
      brand,
      type,
      price,
      // description,
      rating,
      image,
    };
    console.log(updatedProduct);

    // send data

    const res = await axios.put(
      `https://technest-server.vercel.app/products/${_id}`,
      updatedProduct,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res.data);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        title: 'Success!',
        text: 'Product Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
    }
  };

  return (
    <div className="bg-[#F4F3F0] py-16 px-8">
      <h2 className="text-3xl font-extrabold mb-12 text-[#3B3B3B] text-center">
        Update Product : <span className="font-semibold"> {name} </span>
      </h2>
      <div>
        <div className="mx-auto max-w-xl">
          <form onSubmit={handleUpdateProduct} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8">
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  defaultValue={name}
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example8"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Brand Name
                </label>
                <input
                  defaultValue={brand}
                  type="text"
                  className="bloc p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Brand Name"
                  name="brand"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Type
                </label>
                <input
                  defaultValue={type}
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Type"
                  name="type"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-6 lg:col-span-6">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  defaultValue={price}
                  type="number"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Price"
                  name="price"
                  required
                />
              </div>

              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <input
                  defaultValue={rating}
                  type="number"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Rating"
                  name="rating"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <label
                  htmlFor="example7"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  defaultValue={image}
                  type="text"
                  className="block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
                  placeholder="Image URL"
                  name="image"
                />
              </div>
              <div className="col-span-1 md:col-span-12 lg:col-span-12">
                <input
                  type="submit"
                  className="btn btn-block hover:bg-orange-100 hover:outline hover:text-black bg-[#3B3B3B] text-white"
                  value="Submit"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
