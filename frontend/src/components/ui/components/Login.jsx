import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../../config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = useNavigate();

  const LoginWithEmailandPassword = () => {
    // thourhg firebase auth create a user with email and password

    if (!email || !password) {
      return toast.error("Please fill all the fields");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("User logged in successfully");
        setTimeout(() => {
          redirect("/dashboard");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    // if successfull redirect to dashboard
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <header className="p-4 w-full">
        <div className="flex gap-x-3 items-center w-full">
          <h2 className="text-3xl pl-5 font-sans font-semibold">
            YuRL Shortner
          </h2>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center h-[90vh]">
        <div className="flex flex-col justify-center gap-4 w-1/3">
          <div>
            <h1 className="text-center font-semibold text-white text-2xl">
              Login
            </h1>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="grow"
            />
          </label>
        </div>
        <div className="text-white hover:underline flex gap-x-2 my-2">
          Not registered?{" "}
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </div>
        <button
          onClick={LoginWithEmailandPassword}
          className="w-1/5 mt-5 btn btn-primary"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
