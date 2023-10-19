import { useEffect, useState } from 'react';
import Cards from './Cards';

const InsideBrandDetails = ({ insideBrand }) => {
  const { brand_name } = insideBrand || {};

  const [myProducts, setMyProducts] = useState([]);
  const [theProduct, setTheProduct] = useState([]);

  useEffect(() => {
    fetch('https://technest-server.vercel.app/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data); // Check if data is fetched correctly
        setMyProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error)); // Check for any errors during the fetch
  }, []);

  useEffect(() => {
    if (myProducts && myProducts.length > 0) {
      const findProduct = myProducts.filter(
        (prod) => prod.brand === brand_name
      );
      console.log('Filtered products:', findProduct); // Check the filtered products
      setTheProduct(findProduct);
    }
  }, [myProducts, brand_name]);

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
        {theProduct.map((product) => (
          <Cards key={product._id} myProduct={product} />
        ))}
      </div>
    </div>
  );
};

export default InsideBrandDetails;
