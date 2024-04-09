import React, { useEffect } from "react";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Modal from "./components/Modal";

const Dashboard = () => {
  const redirect = useNavigate();
  const IsUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
      } else {
        // User is signed out
        redirect("/");
        // ...
      }
    });
  };

  useEffect(() => {
    IsUserLoggedIn();
  }, [auth.currentUser]);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1 className="flex font-semibold text-white text-2xl">
          Yurl Dashboard
        </h1>
        <div className="flex gap-x-5 items-center">
          <span className="text-white font-semibold text-base">
            Hello, {auth?.currentUser?.displayName}
          </span>
          <div className="avatar">
            <div
              onClick={() => {
                auth.signOut();
              }}
              className="w-14 rounded-full"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
                width={30}
                className="rounded-full w-64"
              />
            </div>
          </div>
        </div>
      </div>
      {/* daisyUi modal */}
      <label htmlFor="linkmodal" className=" btn btn-primary ">
        Create Short URL
      </label>
      <Modal />
    </div>
  );
};

export default Dashboard;
