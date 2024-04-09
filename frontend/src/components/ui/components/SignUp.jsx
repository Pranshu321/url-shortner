import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../config";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const redirect = useNavigate();

  const EmailandPasswordUserCreation = () => {
    // thourhg firebase auth create a user with email and password

    if (!email || !password || !username) {
      return toast.error("Please fill all the fields");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: username,
        }).then(() => {
          toast.success("User created successfully");
          SendToBackend();
          setTimeout(() => {
            redirect("/dashboard");
          }, 1000);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    // if successfull redirect to dashboard
  };

  const SendToBackend = async () => {
    // send the data to the backend
    if (!email || !password || !username) {
      return toast.error("Please fill all the fields");
    }

    const res = await axios.post(
      "https://url-shortner-6gy3.onrender.com/auth/register",
      {
        username: username,
        email: email,
        password: password,
      }
    );

    console.log("tes", res.data);
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
              Sign Up
            </h1>
          </div>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
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
              type="text"
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
              className="grow"
            />
          </label>
        </div>
        <div className="text-white hover:underline my-2 flex gap-x-2">
          Already registered?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </div>
        <button
          onClick={EmailandPasswordUserCreation}
          className="w-1/5 mt-5 btn btn-primary"
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default SignUp;
