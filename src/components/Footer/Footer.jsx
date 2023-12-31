import { Link, NavLink } from 'react-router-dom';
import logo from '/images/logo.svg';

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
              ? 'text-black outline font-semibold p-2'
              : 'text-black font-semibold'
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
              ? 'text-black outline font-semibold p-2'
              : 'text-black font-semibold'
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <footer className="flex flex-col md:px-10 lg:px-10 xl:px-0 items-center justify-between  max-w-[1320px] mx-auto  pt-14 pb-14">
      <div>
        <Link>
          <div className="flex items-center justify-center">
            <div className="w-12">
              <img src={logo} alt="" />{' '}
            </div>
            <div className="font-bold bg-indigo-600 text-xl font-serif p-2 text-white rounded-sm">
              TechNest
            </div>
          </div>
        </Link>
      </div>
      <div className="text-center mt-8 mb-8 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div>
        <p>
          <small className="text-black">© TechNest 2023</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
