const InsideBrandDetails = ({ insideBrand }) => {
  const { id, brand_image, brand_name } = insideBrand || {};

  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="mx-auto w-[150px]">
        <img src={brand_image} alt="" />
      </div>
      <h2 className="text-3xl text-orange-500 text-center pb-20">
        {' '}
        {brand_name}{' '}
      </h2>
    </div>
  );
};

export default InsideBrandDetails;
