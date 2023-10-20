import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white outline font-bold p-2'
              : 'text-orange-50'
          }
        >
          Home
        </NavLink>
      </li>

      <li className="pb-2 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-white outline p-2 font-bold'
              : 'text-orange-50'
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <footer className="flex flex-col md:px-10 lg:px-10 xl:px-0 items-center justify-between  max-w-[1320px] mx-auto  pt-14 pb-14 bg-orange-500 rounded-t-2xl md:rounded-2xl lg:rounded-2xl">
      <div>
        <Link>
          <h2 className="font-bold text-orange-500 bg-white text-2xl font-serif p-2 rounded-xl">
            TechNest
          </h2>
        </Link>
      </div>
      <div className="text-center mt-8 mb-8 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div>
        <p>
          <small className="text-blue-50">© TechNest 2023</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
