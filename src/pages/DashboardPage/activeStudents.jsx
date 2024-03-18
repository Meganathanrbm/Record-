import React from "react";
import tag from "../../assets/svg/dashboard/tag.svg";
import { useNavigate } from "react-router";

const ActiveStudents = () => {
  const navigate = useNavigate();

  function handleonClick() {
    navigate("/profile");
  }

  return (
    <div
      className="d-flex gap-3 border-bottom p-3"
      style={{ position: "relative" }}
      onClick={handleonClick}
    >
      <img
        src={tag}
        alt=""
        srcset=""
        style={{ position: "absolute", right: "20px", top: "0" }}
      />
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
        className="rounded-circle"
        style={{ width: "auto", height: "10vh" }}
      />
      <div>
        <h4 style={{ fontSize: "18px", fontWeight: "500" }}>
          John Doe &#x0028; ID40328 &#x0029;
        </h4>
        <p
          style={{
            color: "rgba(154, 154, 154, 1)",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          2018-2022
        </p>
      </div>
    </div>
  );
};

export default ActiveStudents;
