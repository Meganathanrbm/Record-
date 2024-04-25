import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcome from "../../assets/svg/registerPage/welcome.svg";
import logo2 from "../../assets/svg/registerPage/schoolLogo.svg";
import logo from "../../assets/svg/registerPage/logo.svg";
import InputComponent from "./input";
import ForgotPassword from "./forgotPassword";

const Signup = () => {
  const [forgetPassword, setForgetPassword] = useState(false);

  return (
    <div
      className="container-fluid min-vh-100 d-flex text-light "
      style={{ padding: "0" }}
    >
      <div className="container-fluid  w-100  min-vh-100  "></div>
      <div
        className="container-fluid  min-vh-100 "
        style={{
          background:
            "linear-gradient(45deg, rgba(235, 124, 73, 1), rgba(240, 79, 82, 1))",
        }}
      ></div>

      {forgetPassword ? (
        <ForgotPassword setForgetPassword={setForgetPassword} />
      ) : (
        <div
          className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded min-vh-80 border `}
          style={{
            width: "max-content",
            boxShadow:
              " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <div className="container bg-primary w-50 d-flex flex-column justify-content-start align-items-start  p-5 gap-4 rounded">
            <img src={logo} alt="" />
            <div>
              <h1 style={{ fontWeight: "700", fontSize: "31px" }}>
                Welcome Back
              </h1>
              <p style={{ fontWeight: "400", fontSize: "13px" }}>
                Sign in and see your students performance.
              </p>
            </div>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center mb-2">
              <img
                src={welcome}
                alt="logo"
                className=" mb-5"
                style={{ width: "25wv", height: "30vh" }}
              />
            </section>
          </div>

          <div
            className="conatiner  d-flex flex-column justify-content-center align-items-center gap-3 text-black"
            style={{ width: "40vw" }}
          >
            <section className="d-flex flex-column justify-content-center align-items-center">
              <img
                src={logo2}
                alt="logo"
                style={{ width: "85px", height: "85px" }}
              />
              <h1
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  marginTop: "1rem",
                }}
              >
                Sigin In
              </h1>
              <p style={{ fontSize: "12px", color: "rgba(97, 97, 97, 1)" }}>
                Lets’ know your student’s performance.
              </p>
            </section>

            <section
              className="d-flex flex-column justify-content-center align-items-stretch "
              style={{ width: "23vw" }}
            >
              <div className="mb-3">
                <InputComponent />
              </div>
              <div className="mb-3">
                <InputComponent icon={true} />
              </div>
              <button
                type="button"
                className="btn"
                style={{
                  backgroundColor: "rgba(43, 102, 246, 1)",
                  color: "white",
                }}
              >
                Sign In
              </button>
            </section>

            <div
              className="d-flex justify-content-between gap-5 "
              style={{ width: "60%" }}
            >
              <div
                className="form-check"
                style={{ fontSize: "10px", fontWeight: "400" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Keep me signed in
                </label>
              </div>
              <label
                className="form-check-label"
                htmlFor="flexCheckChecked"
                onClick={(e) => setForgetPassword(true)}
                style={{
                  fontSize: "10px",
                  fontWeight: "400",
                  cursor: "pointer",
                }}
              >
                Forgot Password ?
              </label>
            </div>

            <h6 style={{ fontSize: "11px", fontWeight: "500" }}>
              Don’t have an account? Contact Administrator
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
