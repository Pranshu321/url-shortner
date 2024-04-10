import axios from "axios";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { auth } from "../../../config";

const Modal = () => {
  const [url, setUrl] = React.useState("");

  const SendData = async () => {
    // send the data to the backend
    if (!url) {
      return toast.error("Please provide a url");
    }

    if (!auth?.currentUser?.uid) {
      return toast.error("Please login to create a link");
    }

    // check if url is valid or not
    const regex =
      /^(http|https):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\:[0-9]{1,5})?(\/.*)?$/;
    if (!regex.test(url)) {
      toast.error("Please provide a valid URL");
      return;
    }

    const res = await axios.post("https://url-shortner-6gy3.onrender.com/url", {
      url: url,
      user: auth?.currentUser?.uid,
    });
    if (res.status !== 200) toast.error("Please provide a valid URL");
    toast.success("Link created successfully");
    if (res.status === 200) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }
    toast.error("Failed to create link");
    // clear the input field
    setUrl("");
  };

  return (
    <div>
      <input type="checkbox" id="linkmodal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Let's Create a link</h3>
          <p className="py-4 text-xs">
            here, provide your url to be shorten up
          </p>
          <div className="flex flex-col gap-y-5">
            <input
              type="text"
              placeholder="Type here"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              className="input input-bordered w-full max-w-xs"
            />

            <button onClick={SendData} className="btn btn-primary w-1/3">
              Create Short URL
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="linkmodal">
          Close
        </label>
      </div>
    </div>
  );
};

export default Modal;
