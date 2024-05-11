import React, { useEffect, useState } from "react";
import tick from "../../assets/svg/dashboard/tick.svg";
import timer from "../../assets/svg/students/timer.svg";
import { useRecoilState } from "recoil";
import achievement from "../../assets/svg/students/achivement.svg";
import ActiveStudents from "../DashboardPage/activeStudents";
import StatsCard from "../PlacementPage/StatsCard";
import studentApi from "../../apis/student.api";
import { useParams } from "react-router-dom";
import currentUserState from "../../store/staff.store";

const MostActiveDepartments = () => {
  const { departmentId } = useParams();
  const [departmentData, setDepartmentData] = useState({});
  const [acquiredSkills, setAcquiredSkills] = useState([]);
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);
  useEffect(() => {
    if(currentLoggedInUser.role==="Staff"){
      studentApi.getStaffDepartProfile({
        success: (res) => {
          const data = res.data.data;
          setDepartmentData(data);
          setAcquiredSkills(data.skillWithCount);
        },
        error: (err) => {
          console.error("Error fetching department data:", err);
        },
      });
  }else{
    studentApi.getDepartProfile({
      departmentId,
      success: (res) => {
        const data = res.data.data;
        setDepartmentData(data);
        setAcquiredSkills(data.skillWithCount);
      },
      error: (err) => {
        console.error("Error fetching department data:", err);
      },
    });
  } 
},[departmentId]);
  return (
    <>
      <div className="d-flex tw-justify-between">
        <h4 style={{ fontSize: "18px", fontWeight: "700" }}>
          {departmentData.departmentName || "Department Name"}
        </h4>
        <select
          className="tw-text-right tw-text-[#858585] tw-border-none tw-outline-none"
          name="sort"
          id="sort"
        >
          <option value="Date created" selected>
            Roll Number
          </option>
          <option value="Name">Name</option>
          <option value="Recently">Recently</option>
        </select>
      </div>

      <section className="d-flex gap-4">
        <div style={{ flex: "1" }}>
          <StatsSection departmentData={departmentData} />
        </div>
        {/*  */}
        <div className="border tw-rounded-xl" style={{ flex: "1" }}>
          {departmentData.studentDetails?.map((student) => (
            <ActiveStudents key={student.studentId} {...student} path={"/students/profile"} />
          ))}
        </div>
      </section>
    </>
  );
};

function StatsSection({ departmentData }) {
  return (
    <section
      className="d-flex flex-column border gap-3 tw-rounded-xl"
      style={{ padding: "1rem " }}
    >
      <div className="d-flex justify-content-between">
        <div style={{ flex: "1" }} className="p-2 mt-2 ">
          <h3
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
            className="gradiant-color tw-text-[40px] gradiant-color   tw-font-extrabold"
          >
            {departmentData.activeStudents || 0}
          </h3>
          <p className="tw-text-base tw-font-semibold  tw-capitalize">
            Active Students in Record{" "}
          </p>
        </div>
        <div style={{ flex: "1.5" }}>
          <StatsCard
            value={departmentData.totalMontlyHoursOfInvolvement || 0}
            text="Total monthly hours of Involvement"
            textStyle={"tw-text-base tw-font-semibold"}
            icon={timer}
          />
        </div>
      </div>
      <h5 className="tw-capitalize tw-text-lg tw-font-semibold">
        Most Acquired Skills
      </h5>
      <div className="d-flex gap-3">
        <div
          className="border p-3 rounded-3 mb-3"
          style={{ maxHeight: "50vh", overflow: "auto", flex: "1.3" }}
        >
          {departmentData.skillWithCount &&
            Object.entries(departmentData.skillWithCount).map(
              ([skillName, percentage], index) => (
                <AcquiredSkills
                  key={index}
                  skillName={skillName}
                  percentage={percentage}
                />
              )
            )}
        </div>
        <div style={{ flex: "1" }}>
          <StatsCard
            text="Total Interest Based Skills"
            value={departmentData.totalInterestBasedSkills || 0}
            icon={achievement}
            textStyle={"tw-text-base tw-text-gray-500 tw-font-semibold"}
          />
          <StatsCard
            text="Total Role Based Skills"
            value={departmentData.totalRoleBasedSkills || 0}
            icon={achievement}
            textStyle={"tw-text-base tw-text-gray-500 tw-font-semibold"}
          />
        </div>
      </div>
    </section>
  );
}

function AcquiredSkills({ skillName, percentage }) {
  return (
    <div>
      <p>{skillName}</p>
      <div className="d-flex align-items-baseline " style={{ gap: "0.2rem" }}>
        <div
          className="progress rounded-1"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        >
          <div
            className="progress-bar"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p>{percentage}%</p>
        <img src={tick} alt="Completed" style={{ height: "2vh" }} />
      </div>
    </div>
  );
}
export default MostActiveDepartments;
