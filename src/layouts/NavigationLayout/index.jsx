import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.css";
import navigationConstants from "../../constants/navigation.constant";
import settings from "../../assets/svg/settings.svg";
import help from "../../assets/svg/help.svg";
import navbarLogo from "../../assets/svg/navbarLogo.svg";
import notificationImage from "../../assets/svg/notifications.svg";
import plusIcon from "../../assets/svg/plusIcon.svg";

const NavigationLayout = () => {
  const path = useLocation();
  return (
    <div className="d-flex min-vh-100">
      <nav

        className="d-flex flex-column justify-content-between align-items-baseline p-1 border-end"

        style={{
          background: "rgba(251, 251, 251, 1)",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          width: "20vw",
        }}
      >
        <section className="tw-px-6 tw-w-full">
          <ul
            className="d-flex flex-column gap-1"
            style={{ color: "rgba(143, 143, 143, 1)" }}
          >
            <img
              src={navbarLogo}
              alt="logo"
              className="mb-3 mt-4"
              width={135}
            />
            {navigationConstants.map((item, index) => (
              <li
                className={`d-flex fw-bold  p-2 gap-3 rounded ${
                  path.pathname === item.path ? styles.activeLink : ""
                }`}
                key={index}
              >
                <img
                  src={
                    path.pathname === item.path ? item.activeIcon : item.icon
                  }
                  alt={item.name}
                  style={{ width: "1vw" }}
                />
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="tw-px-6 tw-w-full">
          <ul className="d-flex flex-column gap-3 ">
            <li className="d-flex gap-3 fw-medium">
              <img src={help} alt="help" style={{ width: "1vw" }} />
              <a href="/register">Help</a>
            </li>
            <li className="d-flex gap-3 fw-medium">
              <img src={settings} alt="settings" style={{ width: "1vw" }} />
              <a href="/">Settings</a>
            </li>
            <div style={{ fontSize: "x-small" }}>
              <p>Privacy Policy | Terms</p>
              <p>@ 2023 Record Innovation and Enterprises Pvt. Ltd.</p>
            </div>
          </ul>
        </section>
      </nav>
      <div className=" w-100 p-4">
        <TopNavbar />
        <Outlet />
      </div>
    </div>
  );
};

function TopNavbar() {
  const notification = false;
  const dropdown = [{ name: "Create Job Post" }];

  return (
    <section className="d-flex justify-content-between align-items-center w-100 mb-4">
      <div className="input-group mb-3 w-25">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center gap-4">
        <div className="dropdown">
          <button
            className="btn d-flex justify-content-center align-items-center "
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              backgroundColor: "rgba(235, 124, 73, 1)rgba(240, 79, 82, 1)",
              color: "white",
            }}
          >
            <i className="bi bi-plus"></i>
          </button>
          <ul className="dropdown-menu ">
            {dropdown.map((item, index) => (
              <li key={index}>
                <a className="dropdown-item" href="#">
                  <img
                    src={plusIcon}
                    alt=""
                    style={{ width: "1vw", marginRight: "0.5vw" }}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown">
          <i
            className="bi bi-bell-fill "
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></i>
          <ul
            className="dropdown-menu "
            style={{
              minHeight: "50vh",
              minWidth: "15vw",
            }}
          >
            <div className="p-2">
              <h6>Notifications</h6>
            </div>
            {notification ? (
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center p-2">
                <img src={notificationImage} alt="" />
                <p className="text-center">
                  Oh! There is no notifications at the moment.
                </p>
              </div>
            )}
          </ul>
        </div>
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt=""
          className="rounded-circle"
        />
      </div>
    </section>
  );
}

export default NavigationLayout;
