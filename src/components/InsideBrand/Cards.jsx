const Cards = ({ myProduct }) => {
  const { name, brand, type, price, description, rating, image } =
    myProduct || {};

  return (
    <div className="py-8">
      <div className="bg-green-200 p-4">
        <img
          src={image}
          alt={name}
          className="w-40 h-40 object-cover mx-auto"
        />
        <h3 className="text-xl font-semibold text-center mt-4">{name}</h3>
        <p className="text-center text-gray-600 capitalize">Brand: {brand}</p>
        <p className="text-center text-gray-600">Type: {type}</p>
        <p className="text-center text-gray-600">Price: {price}</p>
        <p className="text-center text-gray-600">Description: {description}</p>
        <p className="text-center text-gray-600">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Cards;
