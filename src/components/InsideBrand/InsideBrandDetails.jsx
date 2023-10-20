import { useEffect, useState } from 'react';
import Cards from './Cards';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    <div className="max-w-[1320px] mx-auto ">
      <div className="w-full mx-auto">
        {theProduct.length > 0 && ( // start the Carousel when the products are available
          <Carousel
            autoPlay
            infiniteLoop
            swipeable
            showThumbs={false}
            interval={2000}
          >
            {theProduct.map((product) => (
              <div key={product._id} className="relative ">
                <img
                  className="h-[200px] md:h-[450px] lg:h-[550px]"
                  src={product.image}
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-20 md:h-40 lg:h-40 bg-black opacity-70 flex items-center justify-center">
                    <div className="text-orange-300 text-center">
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold capitalize pb-1 md:pb-2 lg:pb-3">
                        {product.name}
                      </h2>
                      <p className="text-base md:text-xl lg:text-2xl">
                        Buy Now for Only {product.price}$
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 px-5 md:px-5 lg:px-0 my-20">
        {theProduct.map((product) => (
          <Cards key={product._id} myProduct={product} />
        ))}
      </div>
    </div>
  );
};

export default InsideBrandDetails;
