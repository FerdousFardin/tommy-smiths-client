import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
export const Login = () => {
  const [error, setError] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInWithProvider, signInUser } = useContext(AuthContext);
  const handleLogin = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then((res) => {
        // console.log(res.user);
        setError("");
        navigate(from, { replace: true });
      })
      .catch((er) => {
        setError(er.code);
        console.error(er);
      });
  };
  const googleSignin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithProvider(googleProvider)
      .then(() => {
        setError("");
        navigate(from, { replace: true });
      })
      .catch((er) => {
        setError(er.code);
        console.error(er);
      });
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16  px-4">
      <Helmet>
        <title>Login - Tommy Smiths Photography</title>
        <meta name="Login" content="Login Page" />
      </Helmet>
      <div className="flex flex-col items-center justify-center">
        <span
          to="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-teal-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 md:text-2xl lg:text-3xl text-xl font-thin tracking-wide text-gray-100 uppercase">
            <span className="text-pink-accent-100">Tommy </span> Smith
          </span>
        </span>

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabindex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Dont have account?{" "}
            <Link
              to={"/register"}
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Sign up here
            </Link>
          </p>
          <button
            onClick={googleSignin}
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p className="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
                aria-labelledby="email"
                type="email"
                name="email"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              {errors.email && (
                <p className="text-red-500 py-2">*{errors.email.message}</p>
              )}
            </div>
            <div className="mt-6  w-full">
              <label
                for="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password should be at-least 6 characters.",
                    },
                  })}
                  id="pass"
                  type="password"
                  name="password"
                  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />

                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                    alt="viewport"
                  />
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 py-2">*{errors.password.message}</p>
              )}
              {error && <p className="text-red-500 py-2">*{error}</p>}
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
