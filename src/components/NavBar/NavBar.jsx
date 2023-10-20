import { Link, NavLink } from 'react-router-dom';
import userPic from '/images/user.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (user) {
        setName(user.displayName);
        setPhoto(user.photoURL);
      }
    }, 1100);

    return () => clearTimeout(delay);
  }, [user]);

  const handleSignOut = () => {
    setName(null);
    setPhoto(null);

    logOut().then().catch();
  };

  const links = (
    <>
      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          Home
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/add-product"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          Add Product
        </NavLink>
      </li>

      <li className="md:pr-12 lg:pr-12 pb-4 md:pb-0 lg:pb-0">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          My Cart
        </NavLink>
      </li>

      <li className="pb-8 md:pb-0 lg:pb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-orange-600 underline font-bold'
              : ''
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row lg:flex-row  md:px-10 lg:px-10 xl:px-0 items-center justify-between max-w-[1320px] mx-auto">
      <div>
        <Link>
          <h2 className="font-bold bg-orange-500 text-2xl font-serif p-2 text-white rounded-xl">
            TechNest
          </h2>
        </Link>
      </div>
      <div className="text-center mt-9 md:mt-0 lg:mt-0 ">
        <ul className=" md:flex lg:flex text-lg">{links}</ul>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {photo ? <img src={photo} /> : <img src={userPic} />}
          </div>
        </label>
        {name && <p> {name} </p>}

        {user ? (
          <button onClick={handleSignOut} className="btn">
            Log Out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
