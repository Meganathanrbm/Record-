import React, { useRef, useEffect } from "react";
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

const DashBoard = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const users = [1, 2, 3, 4, 6, 7];

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
                color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
                width: "max-content",
                fontSize: "larger",
                fontWeight: "700",
              }}
            >
              Department of Information Technology
            </h3>
            <p style={{ color: "rgba(154, 154, 154, 1)" }}>
              Your students are performing well, look at some of their awesome
              stats
            </p>
            <StatsCard
              icon={suiteCase}
              value={87}
              text={"Students Placed this year"}
              paraSize={"16px"}
            />
            <StatsCard
              icon={suiteCase}
              value={87}
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
              Most Active Students
            </h3>
            <section className="border rounded-4">
              {users.map((item, index) => {
                return <ActiveStudents key={index} index={index} item={item} />;
              })}
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
          }}
        >
          Most Acquired Skills
        </h3>
        <div
          className="border p-3 rounded-3 mb-3"
          style={{ maxHeight: "50vh", overflow: "auto" }}
        >
          {/*  */}
          {acquiredSkills.map((item, index) => (
            <AcquiredSkills key={index} item={item} />
          ))}
          {/*  */}
        </div>
        <StatsCard
          icon={timer}
          value={2452}
          iconWidth={"1.3vw"}
          fontSize={"x-large"}
          text={"Total monthly hours of Involvement"}
        />
        <div className="d-flex justify-content-between mb-3 gap-2 mt-3">
          <StatsCard
            icon={achivement}
            value={420}
            iconWidth={"1.3vw"}
            fontSize={"x-large"}
            text={"Skills being learnt actively"}
            cardWidth={"60%"}
            paraSize={"14px"}
          />
          <StatsCard
            icon={student}
            value={5345}
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

function AcquiredSkills({ item }) {
  return (
    <div>
      <p>{item.name}</p>
      <div className="d-flex align-items-baseline " style={{ gap: "0.2rem" }}>
        <div
          className="progress rounded-1"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        >
          <div className="progress-bar" style={{ width: item.progress }}></div>
        </div>
        <p>{item.progress}</p>
        <img src={tick} alt="" srcset="" style={{ height: "2vh" }} />
      </div>
    </div>
  );
}

export default DashBoard;
