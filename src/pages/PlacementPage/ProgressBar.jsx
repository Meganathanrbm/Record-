import React from "react";
import tick from "../../assets/svg/dashboard/tick.svg";

const ProgressBar = ({ item }) => {
  return (
    <>
      <p>{item.name}</p>
      <div className="d-flex  justify-center items-baseline">
        <div
          className="progress "
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        >
          <div className="progress-bar" style={{ width: item.progress }}></div>
        </div>
        <p>{item.value || item.progress}</p>
        <img src={tick} alt="tick" srcset="" style={{ height: "3vh" }} />
      </div>
    </>
  );
};

export default ProgressBar;
