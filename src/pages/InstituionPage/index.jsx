import React, { useState } from "react";
import styles from "./institution.module.css";
import AdminDepartments from "./Admin";

const Instituion = () => {
  const admin = false;
  const [active, setActive] = useState("institutionProfile");
  return (
    <div className="d-flex justify-content-between">
      <section
        className="d-flex flex-column align-items-center border p-2 rounded-4"
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
          style={{ fontWeight: "700", fontSize: "17px" }}
        >
          PSG College of Technology
        </h3>
        <div style={{ width: "-webkit-fill-available" }}>
          <ul
            className="mt-5 d-flex flex-column gap-3 align-items-center"
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
            >
              Institution Profile
            </li>
            {admin && (
              <li
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

      <section style={{ width: "70%" }}>
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
      <h5 style={{ fontSize: "18px", fontWeight: "700" }}>
        Institution Profile
      </h5>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label  tw-p-0 tw-m-0">
          Institution Name
        </label>
        <input type="text" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Institution Type
        </label>
        <input
          type="text"
          value="Autonomous college"
          style={{
            color: "#858585",
          }}
          className="form-control tw-font-semibold "
          id="inputPassword4"
        />
      </div>

      <div className="col-md-3">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Established Year
        </label>
        <input
          type="text"
          value="June"
          style={{
            color: "#858585",
          }}
          className="form-control tw-font-semibold"
          id="inputPassword4"
        />
      </div>
      <div className="col-md-3 d-flex align-items-end">
        <input
          type="text"
          value="1951"
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
          Mobile
        </label>
        <input
          type="phone"
          className="form-control tw-font-semibold"
          id="inputEmail4"
        />
      </div>
      <div className="col-md-6">
        <label for="inputPassword4" className="form-label  tw-p-0 tw-m-0">
          Institution Email
        </label>
        <input type="email" className="form-control " id="inputPassword4" />
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
