const Features = () => {
  return (
    <div className="border-2 border-black text-black max-w-[1320px] mx-auto  py-2 mb-[100px] bg-slate-100">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            All the features you want
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Experience the ultimate convenience and versatility with our
            renowned brand devices and electronics.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium">
                Diverse Brands, Unmatched Excellence
              </dt>
              <dd className="mt-2 text-gray-700">
                Immerse yourself with our selection of devices from esteemed
                brands. From the sophistication of Apple's iPhones to the
                innovation of Samsung's Galaxy series.
              </dd>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium">
                Unmatched Quality and Reliability
              </dt>
              <dd className="mt-2 text-gray-700">
                At TechNest, we pride ourselves on offering only the highest
                quality products from renowned brands in the industry with
                unparalleled performance and reliability.
              </dd>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium">
                Power and Performance in Your Hands
              </dt>
              <dd className="mt-2 text-gray-700">
                Elevate your productivity and unleash your creativity with our
                high-performance laptops designed for the modern world.
              </dd>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              className="flex-shrink-0 w-6 h-6 text-violet-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <div className="ml-3">
              <dt className="text-lg font-medium">
                Unleashing Potential with Intel Chips
              </dt>
              <dd className="mt-2 text-gray-700">
                Experience unrivaled performance and speed with Intel chips,
                renowned for their cutting-edge technology and reliability.
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Features;
