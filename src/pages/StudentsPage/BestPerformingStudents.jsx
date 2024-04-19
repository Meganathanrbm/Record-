import React from "react";
import ActiveStudents from "../DashboardPage/activeStudents";
import timer from "../../assets/svg/students/timer.svg";

const students = [
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    name: "Akshay Kumar (18DI02)",
    desc: "Department of Information Technology | 2018-2021",
    image: "https://www.w3schools.com/howto/img_avatar.png",
  },
];

const department = [
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
  {
    name: "Department of Computer Engineering",
    desc: "127 Active Students |",
    desc2: " 338 Total monthly hours of Involvement",
  },
];
const BestPerformingStudents = () => {
  return (
    <div className="d-flex tw-justify-between gap-4 tw-mt-4">
      {/* Best Performing Students */}
      <div className="tw-flex-1">
        <h4 style={{ fontSize: "19px", fontWeight: "700" }}>
          Best Performing Students
        </h4>
        <div
          className="border tw-mt-4 tw-rounded-xl tw-max-h-[400px] tw-overflow-hidden tw-overflow-y-scroll"
          style={{ flex: "1" }}
        >
          {students.map((item, index) => {
            return (
              <ActiveStudents
                key={index}
                {...item}
                path={"/students/profile"}
              />
            );
          })}
        </div>
      </div>
      {/* Most Active Departments */}
      <div className="tw-flex-1">
        <h4 style={{ fontSize: "19px", fontWeight: "700" }}>
          Most Active Departments
        </h4>
        <div
          className="border tw-mt-4 tw-rounded-xl tw-max-h-[400px] tw-overflow-hidden tw-overflow-y-scroll"
          style={{ flex: "1" }}
        >
          {department.map((item, index) => {
            return (
              <ActiveStudents
                key={index}
                {...item}
                icon={timer}
                path={"/students/department"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestPerformingStudents;
