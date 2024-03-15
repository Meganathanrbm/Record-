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
      className="d-flex gap-3 border p-3"
      style={{ position: "relative" }}
      onClick={handleonClick}
    >
      <img
        src={tag}
        alt=""
        srcset=""
        style={{ position: "absolute", right: "0", top: "0" }}
      />
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""
        className="rounded-circle"
        style={{ width: "auto", height: "10vh" }}
      />
      <div>
        <h4>John Doe</h4>
        <p> 2018-2022</p>
      </div>
    </div>
  );
};

export default ActiveStudents;
