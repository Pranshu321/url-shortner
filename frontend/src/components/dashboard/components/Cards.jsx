import React from "react";
import { MdOutlineContentCopy, MdDelete } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import AnalyticsModal from "./AnalyticsModal";
import { Link } from "react-router-dom";
import axios from "axios";

const Cards = ({ _id, shortUrl, domainName, isSecure, visitHistory: [] }) => {
  const path = "https://url-shortner-6gy3.onrender.com";

  const handleDelete = async () => {
    const res = await axios.post(
      "https://url-shortner-6gy3.onrender.com/url/delete",
      {
        id: shortUrl,
      }
    );

    if (res.status === 200) {
      toast.success("Deleted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else toast.error("Failed to delete");
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="card h-64 w-96 bg-[#858ef3] text-primary-content">
        <div className="card-body">
          <h2 className="card-title font-bold">{domainName}</h2>
          <a
            href={`${path}/${shortUrl}`}
            target="_blank"
            className="text-black text-xs font-semibold"
          >
            {shortUrl}
          </a>
          <div className="my-1 flex gap-x-4">
            <MdOutlineContentCopy
              className="cursor-pointer"
              color="green"
              size={20}
              onClick={() => {
                navigator.clipboard.writeText(`${path}/${shortUrl}`);
                toast.success("Copied to clipboard");
              }}
            />

            <MdDelete
              className="cursor-pointer hover:text-red-600 -mt-[2px] text-gray-700"
              size={24}
              onClick={handleDelete}
            />
          </div>
          <div
            className={`badge p-4 font-semibold mt-3 ${
              isSecure ? "badge-success" : "badge-error"
            } gap-2`}
          >
            {isSecure ? "Secure" : "Not Secure"}
          </div>
          <div className="card-actions justify-end">
            <Link to={`/analytics/${shortUrl}`}>
              <button className="btn">Analytics</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
