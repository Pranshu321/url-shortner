import React from "react";

const AnalyticsModal = ({ _id }) => {
  return (
    <div>
      <input type="checkbox" id={_id} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
        </div>
        <label className="modal-backdrop" htmlFor={_id}>
          Close
        </label>
      </div>
    </div>
  );
};

export default AnalyticsModal;
