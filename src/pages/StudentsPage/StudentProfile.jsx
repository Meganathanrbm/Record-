import React from "react";
import timer from "../../assets/svg/students/timer.svg";
import batch from "../../assets/svg/students/batch.svg";
import focusSkills from "../../assets/svg/students/focusSkills.svg";
import tick from "../../assets/svg/dashboard/tick.svg";
import achivement from "../../assets/svg/students/achivement.svg";
import skillBatch from "../../assets/svg/students/skillBatch.svg";
import greenArrow from "../../assets/svg/students/greenArrow.svg";
import learningActivity from "../../assets/svg/students/learningActivity.svg";
import questionMark from "../../assets/svg/students/questionMark.svg";
import StatsCard from "../PlacementPage/StatsCard";

const StudentProfile = () => {
  const skills = [
    {
      name: "Product Management",
      endosement: 3,
    },
    {
      name: "Product Designing",
      endosement: 3,
    },
    {
      name: "UX Design",
      endosement: 0,
    },
    {
      name: "UI Designing",
      endosement: 3,
    },
    {
      name: "Website Development",
      endosement: 4,
    },
    {
      name: "Google Ads",
      endosement: 3,
    },
    {
      name: "Facebook Ads",
      endosement: 2,
    },
    {
      name: "Email Marketing",
      endosement: 1,
    },
    {
      name: "Growth Hacking",
      endosement: 3,
    },
    {
      name: "Social Media Management",
      endosement: 5,
    },
  ];
  return (
    <div className="d-flex justify-content-between">
      {/* left panel */}
      <section
        className="d-flex flex-column align-items-center border px-4 tw-py-4 rounded-4"
        style={{ width: "29%", minHeight: "100%" }}
      >
        {/* remaining time */}
        <p className="tw-w-full d-flex tw-font-semibold tw-text-[#6D6D6D] tw-justify-end tw-items-center  tw-text-[13px]">
          <img
            src={timer}
            className="tw-inline-flex tw-mr-1  tw-h-3 tw-w-3"
            alt="timer"
          />
          23 / <span className="tw-text-[11px]">60 hours</span>
        </p>
        {/* profile */}
        <div className="tw-w-full tw-border-b-2 pb-4 d-flex gap-4 tw-items-center ">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            srcSet=""
            className=" mt-2 tw-rounded-full tw-h-[50px] tw-w-[50px]"
          />
          <div className="d-flex  tw-flex-col">
            <h3 className="tw-text-2xl tw-leading-4 tw-mt-4 tw-font-semibold">
              Akshaykumar{" "}
              <span className="tw-text-xs tw-font-normal tw-text-[#878787]">
                (he/him)
              </span>
              <img
                className="tw-inline-flex tw-m-0 tw-h-4 tw-w-4"
                src={tick}
                alt="green-tick"
              />
            </h3>
            <p className=" tw-text-[#878787] tw-font-semibold text-lg">
              <img
                src={batch}
                className="tw-inline-flex tw-h-4 tw-w-4"
                alt="batch"
              />
              Level 1
            </p>
          </div>
        </div>
        {/* Focus skills */}
        <div className="tw-w-full  py-4 ">
          <h3 className="tw-text-xl  tw-font-semibold">Focus Skills</h3>
          <img
            src={focusSkills}
            className="tw-w-full tw-h-full"
            alt="focusskills "
          />
        </div>
        <div className="d-flex tw-w-full tw-border-b-2 tw-pb-4  tw-justify-between">
          <StatsCard
            text="Role Based Skills"
            value={22}
            iconWidth="25px"
            fontSize="25px"
            padding="tw-p-[12px]"
            icon={achivement}
            textStyle={"tw-text-sm tw-text-gray-500 tw-font-semibold"}
          />
          <StatsCard
            text="Interest Based Skills"
            value={5}
            padding="tw-p-[12px]"
            iconWidth="25px"
            fontSize="25px"
            icon={achivement}
            textStyle={"tw-text-sm tw-text-gray-500 tw-font-semibold"}
          />
        </div>
        {/* Learning Activities */}
        <div className="tw-w-full tw-py-4 ">
          <h3 className="tw-text-xl mb-1 tw-font-semibold">
            Learning Activities
          </h3>
          {/* MoM Performance */}
          <div className="tw-p-4 tw-border-2 tw-px-5 tw-rounded-lg">
            <p className="tw-text-base tw-font-semibold">MoM Performance</p>
            <p className="tw-text-3xl tw-mt-2 d-flex tw-items-center tw-gap-2 tw-text-[#4CC46F] tw-font-semibold">
              <img
                src={greenArrow}
                className="tw-inline-flex tw-w-6 tw-h-6"
                alt="green arrow"
              />
              23%
            </p>
          </div>
          <img
            src={learningActivity}
            alt="calender"
            className="tw-w-full mt-4 "
          />
        </div>
      </section>
      {/* right panel */}
      <section className="" style={{ width: "69%" }}>
        {/* About */}
        <h3 className="tw-font-semibold tw-text-2xl">About</h3>
        <div className="d-flex tw-justify-between">
          {/* paragrapth */}
          <p className="tw-text-justify tw-mt-1 tw-text-lg tw-w-[60%] tw-text-[#8F8F8F]">
            As a college student, I embrace the dual roles of scholar and
            seeker, delving into the depths of knowledge while exploring the
            wonders of the world. With an insatiable curiosity and a thirst for
            learning, I weave my academic pursuits with personal growth,
            striving to make each day a chapter in my ongoing adventure.
          </p>
          {/* contact */}
          <div className="tw-w-[38%] tw-h-32 tw-max-h-fit tw-p-4 tw-rounded-xl tw-border-2">
            <p className="tw-text-base tw-mb-2 tw-font-normal  tw-text-[#8F8F8F]">
              Contact -{" "}
              <span className="tw-text-black tw-text-base tw-font-semibold">
                +91 8072711138
              </span>
            </p>
            <p className="tw-text-base tw-mb-2 tw-font-normal  tw-text-[#8F8F8F]">
              Email -{" "}
              <span className="tw-text-black tw-text-base tw-font-semibold">
                {" "}
                akshay.profes@gmail.com
              </span>{" "}
              <img
                className="tw-inline-flex tw-m-0 tw-h-4 tw-w-4"
                src={tick}
                alt="green-tick"
              />
            </p>
            <p className="tw-text-base tw-mb-2 tw-font-normal  tw-text-[#8F8F8F]">
              Birthday -{" "}
              <span className="tw-text-black tw-text-base tw-font-semibold">
                31/05/2002
              </span>
              <img
                className="tw-inline-flex tw-m-0 tw-h-4 tw-w-4"
                src={tick}
                alt="green-tick"
              />
            </p>
          </div>
        </div>
        {/* Skills repository */}
        <h3 className="tw-font-semibold tw-mt-6 tw-text-2xl">
          Skills repository{" "}
        </h3>
        <div className="d-flex tw-justify-between tw-gap-4 tw-mt-3 tw-items-start">
          {/* Role based Skills */}
          <div className=" tw-w-full tw-rounded-xl tw-border-2 tw-p-3">
            <h4 className="tw-font-semibold  tw-mb-0 tw-text-xl">
              Role based Skills <img src={questionMark} alt="" />
            </h4>
            <p className="tw-text-[#8F8F8F] tw-text-base">
              Skills that you earn for your career.
            </p>
            <div className="d-flex tw-mt-3 tw-flex-wrap tw-gap-3">
              {skills.slice(0, 5).map((skill, i) => (
                <div className="d-flex tw-items-center tw-gap-2 tw-p-2 tw-border-2 tw-rounded-xl">
                  <img
                    src={skillBatch}
                    className="tw-h-6 tw-w-6"
                    alt="skill batch"
                  />
                  <div className="">
                    <p className="tw-font-semibold tw-text-sm">
                      {skill.name}{" "}
                      <img
                        className="tw-inline-flex tw-m-0 tw-h-4 tw-w-4"
                        src={tick}
                        alt="green-tick"
                      />
                    </p>
                    <p className="tw-text-xs tw-text-[#8F8F8F]">
                      {skill.endosement} Endorsment
                    </p>
                  </div>
                </div>
              ))}
              <p className="tw-text-[#2B66F6] tw-cursor-pointer">
                See all <span className="tw-font-bold tw-text-lg">></span>{" "}
              </p>
            </div>
          </div>
          {/* Interest based Skills */}
          <div className=" tw-w-full tw-rounded-xl tw-border-2 tw-p-3">
            <h4 className="tw-font-semibold  tw-mb-0 tw-text-xl">
              Interest based Skills
            </h4>
            <p className="tw-text-[#8F8F8F] tw-text-base">
              Skills that you earn for your will.
            </p>
            <div className="d-flex tw-mt-3 tw-items-center tw-flex-wrap tw-gap-3">
              {skills.slice(0, 4).map((skill, i) => (
                <div className="d-flex tw-items-center tw-gap-2 tw-p-2 tw-border-2 tw-rounded-xl">
                  <img
                    src={skillBatch}
                    className="tw-h-6 tw-w-6"
                    alt="skill batch"
                  />
                  <div className="">
                    <p className="tw-font-semibold tw-text-sm">
                      {skill.name}{" "}
                      <img
                        className="tw-inline-flex tw-m-0 tw-h-4 tw-w-4"
                        src={tick}
                        alt="green-tick"
                      />
                    </p>
                    <p className="tw-text-xs tw-text-[#8F8F8F]">
                      {skill.endosement} Endorsment
                    </p>
                  </div>
                </div>
              ))}
              {/* <p className="tw-text-[#2B66F6] tw-cursor-pointer">
                See all <span className="tw-font-bold tw-text-lg">></span>{" "}
              </p> */}
            </div>
          </div>
        </div>
        {/* Education */}
        <h3 className="tw-font-semibold tw-mt-6 tw-text-2xl">Education </h3>
      </section>
    </div>
  );
};

export default StudentProfile;
