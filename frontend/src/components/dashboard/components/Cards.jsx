import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast, Toaster } from "react-hot-toast";
import AnalyticsModal from "./AnalyticsModal";
import { Link } from "react-router-dom";

const Cards = ({ _id, shortUrl, domainName, isSecure, visitHistory: [] }) => {
  const path = "http://localhost:5000";
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
          <div className="my-1">
            <MdOutlineContentCopy
              className="cursor-pointer"
              color="green"
              size={20}
              onClick={() => {
                navigator.clipboard.writeText(`${path}/${shortUrl}`);
                toast.success("Copied to clipboard");
              }}
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
