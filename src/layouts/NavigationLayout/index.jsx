import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import styles from "./index.module.css";
import navigationConstants from "../../constants/navigation.constant";
import settings from "../../assets/svg/settings.svg";
import help from "../../assets/svg/help.svg";
import navbarLogo from "../../assets/svg/navbarLogo.svg";
import notificationImage from "../../assets/svg/notifications.svg";
import notificationIcon from "../../assets/svg/notificationIcon.svg";
import plusIcon from "../../assets/svg/plusIcon.svg";
import feedIcon from "../../assets/svg/feedBtn.svg";
import mySettings from "../../assets/svg/settings/mySettings.svg";
import myNotifications from "../../assets/svg/settings/myNotification.svg";
import integrations from "../../assets/svg/settings/integrations.svg";
import logout from "../../assets/svg/settings/logout.svg";

const settingsPanelTitle = [
  {
    title: "My Settings",
    status: true,
    icon: mySettings,
  },
  {
    title: "My Notifications",
    status: false,
    icon: myNotifications,
  },
  {
    title: "Integrations",
    status: false,
    icon: integrations,
  },
  {
    title: "Logout",
    status: false,
    icon: logout,
  },
];

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
            <button
              data-bs-toggle="modal"
              type="button"
              class="btn btn-primary"
              data-bs-target="#settings"
              className="d-flex gap-3 tw-items-center fw-medium"
            >
              <img src={settings} alt="settings" style={{ width: "1vw" }} />
              <span>Settings</span>
            </button>
            {/* Modal */}

            <div style={{ fontSize: "x-small" }}>
              <p>Privacy Policy | Terms</p>
              <p>@ 2023 Record Innovation and Enterprises Pvt. Ltd.</p>
            </div>
          </ul>
        </section>
      </nav>
      {/* Settings Modal */}
      <div
        className="modal fade modal-xl"
        id="settings"
        tabindex="-1"
        aria-labelledby="settings"
        aria-hidden="true"
      >
        <div className="modal-dialog tw-h-full modal-dialog-centered ">
          <div
            className="modal-content tw-rounded-xl tw-overflow-hidden tw-bg-white"
            style={{
              width: "100%",
              height: "85%",
              borderRadius: "15px",
              padding: 0,
            }}
          >
            <div
              className="modal-body d-flex"
              style={{ width: "100%", padding: 0, margin: 0 }}
            >
              <div className="left-part tw-p-6 tw-bg-[#FBFBFB] tw-border-r tw-h-full tw-w-1/4">
                <h2
                  className="modal-title fs-5"
                  style={{ fontSize: "16px", fontWeight: "600" }}
                >
                  Settings
                </h2>
                <ul>
                  {settingsPanelTitle.map((title, i) => (
                    <li
                      key={i}
                      className={` ${
                        title.status ? "tw-text-black" : "tw-text-[#8F8F8F]"
                      }   tw-flex tw-gap-2 tw-my-4 tw-items-center tw-font-semibold`}
                    >
                      <img src={title.icon} className="tw-h-[17px]" alt="" />
                      {title.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right-part tw-w-full tw-h-full tw-p-6 tw-bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- */}
      <div className=" w-100 p-4">
        <TopNavbar />
        <Outlet />
      </div>
    </div>
  );
};

function TopNavbar() {
  const notification = false;
  const dropdown = [{ name: "Create Job Post" }, { name: "Add Department" }];

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
      <div className="d-flex justify-content-center align-items-center tw-gap-4 ">
        <div className="dropdown">
          <img
            data-bs-toggle="dropdown"
            aria-expanded="false"
            src={feedIcon}
            className="tw-cursor-pointer tw-w-[25px] tw-h-[25px]  "
            alt="feedIcon"
          />

          <ul className="dropdown-menu ">
            {dropdown.map((item, index) => (
              <li key={index} className="tw-w-[300px]">
                <a
                  className="dropdown-item tw-flex tw-gap-4 tw-flex-nowrap"
                  href="#"
                >
                  <img
                    src={plusIcon}
                    alt=""
                    className=""
                    style={{ width: "15px" }}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown">
          <img
            className="tw-cursor-pointer tw-w-[25px] tw-h-[25px]  "
            src={notificationIcon}
            alt="notification icon"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />

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
          className="rounded-circle tw-h-[35px] tw-w-[35px]"
        />
      </div>
    </section>
  );
}

export default NavigationLayout;
