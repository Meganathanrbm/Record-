import React from "react";
import tag from "../../assets/svg/dashboard/tag.svg";
import { useNavigate } from "react-router";

const ActiveStudents = ({ fullName, departmentName, desc2, icon, image, path,
  activeStudentsCount,learningHoursSum

   }) => {
  const navigate = useNavigate();

  function handleonClick() {
    navigate(path);
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
        style={{ position: "absolute", right: "20px", top: "0" }}
      />

      <img
        src={image}
        alt=""
        className="rounded-circle"
        style={{ width: "auto", height: "60px" }}
      />

      <div>
        {fullName}
        {icon ? (
          <div>
          <h4
          className="tw-cursor-pointer tw-mb-1"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          {departmentName}
           
        </h4>
          <p
            style={{
              color: "rgba(154, 154, 154, 1)",
              fontSize: "17px",
              fontWeight: "500",
            }}
            className="tw-inline-flex"
          >
           
            {`${activeStudentsCount} Active Students |`}
            <img className="tw-mx-2" src={icon} alt="" />
            {`${learningHoursSum} Total monthly hours of Involvement`}
          </p>
          </div>
        ) : (
          <p
            style={{
              color: "rgba(154, 154, 154, 1)",
              fontSize: "17px",
              fontWeight: "500",
            }}
          >
            {departmentName}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActiveStudents;
