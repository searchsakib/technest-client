import { useLoaderData } from 'react-router';

const MyCart = () => {
  const loadedCart = useLoaderData();

  return (
    <div>
      <h2>This is My Cart {loadedCart.length} </h2>
    </div>
  );
};

export default MyCart;
