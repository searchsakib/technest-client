import bannerPic from '/images/banner.jpg';

const Banner = () => {
  return (
    <div className="bg-black text-orange-500 max-w-[1320px] mx-auto rounded-2xl">
      <div className="container flex flex-col justify-center p-6 mx-auto lg:p-24 lg:flex-row lg:justify-between ">
        <div className="flex flex-col justify-center p-6 items-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left text-center">
          <h1 className="lg:text-6xl font-bold text-4xl px-10 lg:px-0 lg:leading-tight">
            Empowering Your Digital Lifestyle
          </h1>

          <p className="mt-6 mb-6 px-5 md:px-0 lg:px-0 text-base lg:text-lg">
            Your Trusted Destination for the Latest{' '}
            <br className="hidden md:inline lg:hidden" />
            Electronic Items from Every Renowned Brand
          </p>
        </div>
        <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={bannerPic}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
