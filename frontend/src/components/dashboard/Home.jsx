import React, { useEffect, useState } from "react";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Modal from "./components/Modal";
import logo from "../../assets/logo.png";
import axios from "axios";
import Cards from "./components/Cards";

const Dashboard = () => {
  const redirect = useNavigate();
  const [uid, setUid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [urls, setUrls] = useState([]); // [ {shortUrl: "http://localhost:5000/short/abc", longUrl: "http://www.google.com"}
  const IsUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUid(user?.uid);
        // ...
      } else {
        // User is signed out
        redirect("/");
        // ...
      }
    });
  };

  const GetUrlData = async () => {
    // get url data
    setLoading(true);
    const res = await axios.post("http://localhost:5000/url/geturls", {
      user: uid,
    });
    console.log(res.data);
    setUrls(res.data);
    setLoading(false);
  };

  useEffect(() => {
    IsUserLoggedIn();
    GetUrlData();
  }, [auth.currentUser]);

  return (
    <div className="p-5">
      <div className="mb-5 flex justify-between">
        <div className="flex gap-x-2 items-center">
          <img src={logo} alt="logo" width={30} height={30} className="" />
          <h1 className="flex font-semibold text-white text-2xl">
            Yurl Dashboard
          </h1>
        </div>
        <div className="flex gap-x-5 items-center">
          <span className="text-white font-semibold text-base">
            Hello, {auth?.currentUser?.displayName}
          </span>
          <div className="avatar">
            <div
              onClick={() => {
                auth.signOut();
              }}
              className="w-14 rounded-full cursor-pointer"
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

      <div className="my-10 flex flex-wrap gap-4">
        {urls?.map((url) => (
          <Cards
            key={url._id}
            _id={url._id}
            shortUrl={url.shortId}
            domainName={url.domainName}
            isSecure={url.isSecure}
            visitHistory={url.visitHistory}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
