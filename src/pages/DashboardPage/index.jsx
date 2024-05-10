import React, { useRef, useEffect, useState } from "react";
import ChartComponent from "./chart";
import { activePlatforms, acquiredSkills } from "./dashboard.constant";

import suiteCase from "../../assets/svg/dashboard/suitecase.svg";
import timer from "../../assets/svg/dashboard/timer.svg";
import tick from "../../assets/svg/dashboard/tick.svg";
import achivement from "../../assets/svg/dashboard/achivement.svg";
import student from "../../assets/svg/dashboard/student.svg";
import StatsCard from "./statsCard";
import ActiveStudents from "./activeStudents";
import ActivePlatforms from "./activePlatforms";

import dashboardApi from "../../apis/dashboard.api";
const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    dashboardApi.getAdminDashboard({
      success: (res) => {
        
        setDashboardData(res.data.data);
        setSkills(res.data.data.mostAcquiredSkills);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }, []);
  
  return (
    <div className="d-flex gap-3">
      <section className="d-flex flex-column gap-2" style={{ flex: "2.5" }}>
        <section className="d-flex gap-5" style={{ minHeight: "50vh" }}>
          <div
            className="d-flex flex-column justify-content-around"
            style={{ flex: "1" }}
          >
            <h3
              style={{
                width: "max-content",
                fontWeight: "700",
              }}
              className="gradiant-color tw-text-xl"
            >
              {dashboardData ? dashboardData.InstitutionName : ""}
            </h3>
            <p style={{ color: "rgba(154, 154, 154, 1)" }}>
              Your students are performing well, look at some of their awesome
              stats
            </p>
            <StatsCard
              fontSize="34px"
              icon={suiteCase}
              value={dashboardData ? dashboardData.studentsPlacedThisYear : 0}
              text={"Students Placed this year"}
              paraSize={"16px"}
            />
            <StatsCard
              fontSize="34px"
              icon={suiteCase}
              value={dashboardData ? dashboardData.totalJobsPosted : 0}
              text={"Total Posted Jobs"}
              paraSize={"16px"}
            />
          </div>

          <div style={{ flex: "2.3" }}>
            <ChartComponent />
          </div>
        </section>

        <div className="d-flex justify-content-between mt-2">
          <div style={{ width: "55%" }}>
            <h3
              className="mb-4"
              style={{ fontSize: "1.2rem", fontWeight: "650" }}
            >
              {dashboardData.InstitutionName
                ? `Most Active Departments`
                : `Most Active Students`}
            </h3>
            <section className="border rounded-4">
              {dashboardData.InstitutionName
                ? dashboardData.mostActiveDepartments.map((item, index) => (
                    <ActiveStudents
                      key={index}
                      {...item}
                      icon={timer}
                      path="/students/department"
                    />
                  ))
                : dashboardData.map((item, index) => (
                    <ActiveStudents key={index} index={index} {...item} />
                  ))}
            </section>
          </div>
          <div style={{ width: "40%" }}>
            <h3
              className="mb-4"
              style={{ fontSize: "1.2rem", fontWeight: "650" }}
            >
              Most Active Platforms
            </h3>
            <section className="border rounded-4">
              {activePlatforms.map((item, index) => {
                return (
                  <ActivePlatforms
                    key={index}
                    image={item.image}
                    platform={item.name}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </section>

      {/* Right section */}
      <section style={{ flex: "1" }}>
        <h3
          style={{
            width: "max-content",
            fontSize: "larger",
            fontWeight: "650",
            marginBottom: "1rem",
          }}
        >
          Most Acquired Skills
        </h3>
        <div
          className="border p-3 rounded-3 mb-3"
          style={{ maxHeight: "50vh", overflow: "auto" }}
        >
          {/*  */}
          {dashboardData.mostAcquiredSkills &&
            Object.entries(dashboardData.mostAcquiredSkills).map(
              ([skillName, percentage], index) => (
                <AcquiredSkills
                  key={index}
                  skillName={skillName}
                  percentage={percentage}
                />
              )
            )}
          {/*  */}
        </div>
        <StatsCard
          icon={timer}
          value={
            dashboardData ? dashboardData.totalMontlyHoursOfInvolvement : 0
          }
          iconWidth={"1.3vw"}
          fontSize={"x-large"}
          text={"Total monthly hours of Involvement"}
        />
        <div className="d-flex justify-content-between mb-3 gap-2 mt-3">
          <StatsCard
            icon={achivement}
            value={dashboardData ? dashboardData.skillsBeingLearntActively : 0}
            iconWidth={"1.3vw"}
            fontSize={"x-large"}
            text={"Skills being learnt actively"}
            cardWidth={"60%"}
            paraSize={"14px"}
          />
          <StatsCard
            icon={student}
            value={dashboardData ? dashboardData.activeStudents : 0}
            iconWidth={"1.3vw"}
            fontSize={"x-large"}
            text={"Active Students"}
            cardWidth={"40%"}
            paraSize={"14px"}
          />
        </div>
      </section>
    </div>
  );
};

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

export default DashBoard;
