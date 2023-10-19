const Cards = ({ myProduct }) => {
  const { name } = myProduct || {};

  return (
    <div className="py-8">
      <h3 className="bg-green-200 p-20"> {name} </h3>
    </div>
  );
};

export default Cards;
