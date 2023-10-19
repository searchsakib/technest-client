import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
// import { useContext, useState } from 'react';
// import { AuthContext } from '../providers/AuthProvider';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import app from '../Firebase/firebase.config';
// import swal from 'sweetalert';

const Login = () => {
  // const { signIn } = useContext(AuthContext);
  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  // const location = useLocation();
  // const navigate = useNavigate();

  // const [logError, setLogError] = useState('');

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       swal({
  //         title: 'Login Successfull!',
  //         text: 'You Logged in Successfully.',
  //         timer: 1200,
  //         buttons: false,
  //       });
  //       navigate(location?.state ? location.state : '/');
  //     })
  //     .catch((err) => {
  //       console.log('error', err.message);
  //     });
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.currentTarget);
  //   const email = form.get('email');
  //   const password = form.get('password');

  //   setLogError('');

  //   signIn(email, password)
  //     .then((res) => {
  //       console.log(res.user);

  //       swal({
  //         title: 'Login Successfull!',
  //         text: 'You Logged in Successfully.',
  //         timer: 1200,
  //         buttons: false,
  //       });

  //       navigate(location?.state ? location.state : '/');
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLogError(err.message);
  //     });
  // };

  return (
    <div className="pt-[60px] pb-[76px] bg-gray-100 overflow-x-hidden">
      <div className="mx-auto w-5/12 min-w-fit ">
        <h2 className="text-3xl font-medium my-5 text-center">Login Here</h2>
        {/* {logError && (
          <div className="text-red-600 text-center text-xl max-w-[540px] mx-auto">
            <p> {logError} </p>
          </div>
        )} */}
        {/* onSubmit={handleLogin} */}
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-base">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-orange-500 text-white hover:text-orange-500 hover:bg-blue-50 hover:border-2 hover:border-orange-500">
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-center font-normal text-xl">Or</p>
          <p className="text-center font-normal text-xl">Login With</p>
          {/* onClick={handleGoogleSignIn} */}
          <div className=" rounded-full h-fit w-fit bg-white mx-auto my-6">
            <Link>
              <FcGoogle className="p-1" size={55}></FcGoogle>
            </Link>
          </div>
        </div>
        <p className="font-medium text-center text-2xl">
          Do not have an account{' '}
          <Link to="/register" className="font-semibold text-orange-500">
            Register
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default Login;
