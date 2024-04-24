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
import instituteSvg from "../../assets/svg/students/instituteImg.svg";
import psgLogo from "../../assets/svg/students/paglogo.svg";
import kumaraguruLogo from "../../assets/svg/students/kumaragurulogo.svg";
import emptyLogo from "../../assets/svg/students/emptyLogo.svg";
import googleLogo from "../../assets/svg/students/googleSvg.svg";
import udemyLogo from "../../assets/svg/students/udemySvg.svg";
import openbtn from "../../assets/svg/students/openbtn.svg";
import linkedin from "../../assets/svg/socialMedia/linkedin.svg";
import instagram from "../../assets/svg/socialMedia/instagram.svg";
import x from "../../assets/svg/socialMedia/x.svg";
import StatsCard from "../PlacementPage/StatsCard";
import Card from "./Card";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

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

  const education = [
    {
      title: "PSG College of Technology ",
      tick: tick,
      logo: psgLogo,
      desc: "BE in Mechanical Engineering, Automotive Design",
      year: "Mar 2018 - Apr 2021",
      about:
        "Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of",
    },
    {
      title: "Kumaraguru College of Technology",
      tick: tick,
      logo: kumaraguruLogo,
      desc: "Diploma in Automobile Engineering",
      year: "May 2015 - Feb 2018",
      about:
        "Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of",
    },
  ];
  const otherActivity = [
    {
      title: "Placement Representative of the Department ",
      logo: psgLogo,
      desc: "At PSG Polytechnic College | Academic",
      year: "Jan 2022 - Apr 2022",
      about:
        "Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of",
    },
    {
      title: "PC Assembly for a Trust",
      logo: emptyLogo,
      desc: "At Rotary Club | Volunteer",
      year: "Mar 2022",
      about:
        "Activities and Roles: Volunteer of NSS Camp & Player in Volley Ball Team of College.",
    },
  ];
  const workExperiance = [
    {
      title: "Technical Research Intern ",
      tick: tick,
      logo: instituteSvg,
      desc: "National Institute of Technology  |  Trichy, Tamil Nadu, India  |  On-site",
      year: "Apr 2023 - Oct 2023  |  6 mos",
      tag: [
        "AutoCAD",
        "Vehicle Dynamics",
        "Fluid dynamics",
        "Mechanical Design",
      ],
      tagColor: "primary",
      about:
        "I’ve learned so much about organisational process and business operations, where I could able to focus on feasibility testing and got a chance to collaborate with tech team...",
    },
    {
      title: "Content Writing Intern",

      logo: emptyLogo,
      desc: "ABC Private Limited  |  Coimbatore, Tamil Nadu, India  |  Remote",
      year: "Aug 2022 - Jan 2023  |  6 mos",
      tag: [
        "Copywriting",
        "Content Marketing",
        "Fluid dynamics",
        "Email Marketing",
      ],

      about:
        "I get an hands on experience in the overview of digital marketing and content writing and I worked on various copywriting of the client’s website and social media cont...",
    },
  ];
  const projects = [
    {
      title: "LendQ - Lending & Borrowing Platform UX Case Study",
      logo: emptyLogo,
      desc: "At Freelancing | Individual Project",
      year: "Jan 2022 - Apr 2022",
      tag: ["UX Design", "UI Design", "Market Research"],
      btn: "View Project",
      btnLogo: openbtn,

      about:
        "Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of Activities and Roles: I’ve been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of",
    },
    {
      title: "Media Production Company Website Development",
      logo: emptyLogo,
      desc: "At Seven Dots Media Company | Collaborative Project",
      year: "Mar 2021 - May 2021",
      tag: ["UX Design", "Wordpress", "Website Development"],
      btn: "View Project",
      btnLogo: openbtn,
      tagColor: "primary",
    },
  ];
  const licenses = [
    {
      title: "Foundation of Project Management",
      logo: googleLogo,
      desc: "Google Digital Garage | Online",
      year: "Issued Apr 2022",
      tag: ["Project Lifecycle", "Agile Methodology", "Scrum", "Jira"],
      btn: "Credentials",
      btnLogo: openbtn,
    },
    {
      title: "Facebook Ads & Facebook Marketing Crash Course",
      logo: udemyLogo,
      desc: "Udemy | Online",
      year: "Issued Feb 2022",
      tag: ["Campaign Designing", "Ad Strategy", "Meta Ad"],
      btn: "Credentials",
      btnLogo: openbtn,
    },
  ];
  return (
    <div className="d-flex justify-content-between">
      {/* left panel */}
      <section
        className="d-flex flex-column align-items-center tw-h-fit border px-3 tw-py-4 rounded-4"
        style={{ width: "28%", minHeight: "100%" }}
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
        <div className="tw-w-full tw-border-b-2 pb-4 d-flex gap-2 tw-justify-between tw-items-center ">
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
      <section className="" style={{ width: "70%" }}>
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
        {education.map((item, i) => (
          <Card
            key={i}
            logo={item.logo}
            title={item.title}
            tick={item.tick}
            desc={item.desc}
            year={item.year}
            about={item.about}
          />
        ))}

        {/* Work Experience */}
        <h3 className="tw-font-semibold tw-mt-6 tw-text-2xl">
          Work Experience{" "}
        </h3>
        {workExperiance.map((item, i) => (
          <Card
            key={i}
            logo={item.logo}
            tag={item.tag}
            tagColor={item.tagColor}
            title={item.title}
            tick={item.tick}
            desc={item.desc}
            year={item.year}
            about={item.about}
          />
        ))}

        {/* Licenses & Certifications */}
        <h3 className="tw-font-semibold tw-mt-6 tw-text-2xl">
          Licenses & Certifications{" "}
        </h3>
        {licenses.map((item, i) => (
          <Card
            key={i}
            logo={item.logo}
            tag={item.tag}
            btn={item.btn}
            tagColor={item.tagColor}
            title={item.title}
            desc={item.desc}
            year={item.year}
            btnLogo={item.btnLogo}
          />
        ))}
        <button className="tw-text-[#8F8F8F] tw-text-right tw-mt-2  tw-float-right tw-cursor-pointer tw-text-lg">
          Show all 3 Licenses & Certifications{" "}
          <MdOutlineKeyboardArrowRight className="tw-inline-flex tw-h-6 tw-w-auto" />
        </button>
        {/* Projects */}
        <h3 className="tw-font-semibold tw-mt-10 tw-text-2xl">Projects </h3>
        {projects.map((item, i) => (
          <Card
            key={i}
            logo={item.logo}
            about={item.about}
            tag={item.tag}
            btn={item.btn}
            tagColor={item.tagColor}
            title={item.title}
            desc={item.desc}
            year={item.year}
            btnLogo={item.btnLogo}
          />
        ))}
        <button className="tw-text-[#8F8F8F] tw-text-right tw-mt-2  tw-float-right tw-cursor-pointer tw-text-lg">
          Show all 3 Projects
          <MdOutlineKeyboardArrowRight className="tw-inline-flex tw-h-6 tw-w-auto" />
        </button>
        {/* Other Activities */}
        <h3 className="tw-font-semibold tw-mt-10 tw-text-2xl">
          Other Activities{" "}
        </h3>
        <div className="">
          {otherActivity.map((item, i) => (
            <Card
              key={i}
              logo={item.logo}
              about={item.about}
              tag={item.tag}
              btn={item.btn}
              tagColor={item.tagColor}
              title={item.title}
              desc={item.desc}
              year={item.year}
              btnLogo={item.btnLogo}
            />
          ))}
        </div>
        <button className="tw-text-[#8F8F8F]  tw-mt-4  tw-cursor-pointer tw-text-xl">
          Social Media Links
          <a href="#">
            <img
              className="tw-inline-flex  tw-mx-1 tw-h-6 tw-ml-2 tw-w-6"
              src={linkedin}
              alt="linked in"
            />
          </a>
          <a href="#">
            <img
              className="tw-inline-flex tw-mx-1 tw-h-6 tw-w-6"
              src={instagram}
              alt="instagram"
            />
          </a>
          <a href="#">
            <img
              className="tw-inline-flex tw-mx-1 tw-h-6 tw-w-6"
              src={x}
              alt="x"
            />
          </a>
        </button>
      </section>
    </div>
  );
};

export default StudentProfile;
