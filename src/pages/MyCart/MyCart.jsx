import { useLoaderData } from 'react-router';
import CartCard from './CartCard';

const MyCart = () => {
  const loadedCart = useLoaderData();

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 px-5 md:px-5 lg:px-0 my-20">
        {loadedCart.map((cart) => (
          <CartCard key={cart._id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default MyCart;
