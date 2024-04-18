import React, { useState } from "react";
import styles from "./institution.module.css";
import AdminDepartments from "./Admin";
import penEditIcon from "../../assets/svg/editPenIcon.svg";

const Instituion = () => {
  const admin = false;
  const [active, setActive] = useState("institutionProfile");
  return (
    <div className="d-flex justify-content-between">
      <section
        className="d-flex flex-column align-items-center border p-4 rounded-4"
        style={{ width: "25%", minHeight: "80vh" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(243, 243, 243, 1)",
            borderRadius: "50%",
            padding: "1.5rem",
            width: "9vw",
          }}
        >
          <img
            src="/colleageLogo.png"
            alt=""
            srcSet=""
            className=" mt-2"
            style={{ width: "4vw" }}
          />
        </div>
        <h3
          className="mt-2 mb-2"
          style={{ fontWeight: "700", fontSize: "19px" }}
        >
          PSG College of Technology
        </h3>
        <div style={{ width: "-webkit-fill-available" }}>
          <ul
            className="mt-4 d-flex tw-pl-5 flex-column gap-3 align-items-start"
            style={{ fontSize: "17px", fontWeight: "700" }}
          >
            <li
              onClick={() => setActive("institutionProfile")}
              style={{
                color:
                  active === "institutionProfile"
                    ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                    : "rgba(143, 143, 143, 1)",
              }}
              className="tw-cursor-pointer"
            >
              Institution Profile
            </li>
            {!admin && (
              <li
                className="tw-cursor-pointer"
                onClick={() => setActive("departments")}
                style={{
                  color:
                    active === "departments"
                      ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                      : "rgba(143, 143, 143, 1)",
                }}
              >
                Departments
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="tw-pr-5" style={{ width: "70%" }}>
        {active === "institutionProfile" ? (
          <FormComponent />
        ) : (
          <AdminDepartments />
        )}
      </section>
    </div>
  );
};

function FormComponent() {
  return (
    <form className={`row g-3 ${styles.fromWrapper}`}>
      <h5 style={{ fontSize: "19px", fontWeight: "700" }}>
        Institution Profile
      </h5>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label  tw-p-0 tw-m-0">
          Institution Name
        </label>

        <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
          <input type="text" className="form-control" id="inputEmail4" />
          <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
            <img
              src={penEditIcon}
              alt=""
              className=" tw-h-[15px] tw-w-[15px]"
            />
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Institution Type
        </label>
        <select
          name="Industry"
          id="Industry"
          className="tw-bg-[#F3F3F3] tw-border tw-mt-2 tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-full tw-pr-3 tw-font-semibold"
        >
          <option className="" selected>
            Select
          </option>
          <option value="  State Government University">
            State Government University
          </option>
          <option value="Deemed/Private University">
            Deemed/Private University
          </option>
          <option value="Central Government University">
            Central Government University
          </option>
          <option value="Institutes of National Importance">
            Institutes of National Importance
          </option>
          <option value="Autonomous Engineering college">
            Autonomous Engineering college
          </option>
        </select>
      </div>

      <div className="col-md-3">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Established Year
        </label>
        <select
          name="Industry"
          id="Industry"
          className="tw-bg-[#F3F3F3] tw-font-semibold tw-border tw-mt-2 tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-full tw-pr-3 "
        >
          <option className="" selected>
            Month
          </option>
          <option value="  jan">jan</option>
          <option value="feb">feb</option>
          <option value="mar">mar</option>
          <option value="apr">apr</option>
          <option value="may">may</option>
        </select>
      </div>
      <div className="col-md-3 d-flex align-items-end">
        <input
          type="number"
          placeholder="Year"
          value="Year"
          style={{
            color: "#858585",
          }}
          className="form-control tw-font-semibold"
          id="inputPassword4"
        />
      </div>

      <div className="col-md-6">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Institution Address
        </label>
        <input
          type="text"
          className="form-control tw-font-semibold"
          id="inputPassword4"
        />
      </div>

      <div className="col-md-6">
        <label for="inputEmail4" className="form-label  tw-p-0 tw-m-0">
          Contact
        </label>
        <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
          <input type="text" className="form-control" id="inputEmail4" />
          <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
            <img
              src={penEditIcon}
              alt=""
              className=" tw-h-[15px] tw-w-[15px]"
            />
          </button>
        </div>
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Institution Email
        </label>
        <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
          <input type="text" className="form-control" id="inputEmail4" />
          <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
            <img
              src={penEditIcon}
              alt=""
              className=" tw-h-[15px] tw-w-[15px]"
            />
          </button>
        </div>
      </div>

      <div className="col-12">
        <label
          for="exampleFormControlTextarea1"
          class="form-label tw-p-0 tw-m-0"
        >
          About the Institution
        </label>
        <textarea
          class="form-control tw-m-0 tw-p-0 "
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="">
        <button
          type="button"
          className="col btn tw-float-right tw-px-6 "
          style={{
            color: "white",
            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
            border: "none",
            padding: "revert-layer",
            maxWidth: "200px",
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Instituion;
