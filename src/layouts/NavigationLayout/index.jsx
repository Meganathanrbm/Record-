import React ,{useState,useEffect}from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
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
import { HiMiniXMark } from "react-icons/hi2";
import currentUserState from "../../store/staff.store";
import ModalComponent from "../../components/Modal/ModalComponent";
import institutionApi from "../../apis/institution.api";
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
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);
    const [NavigationConstants, setNavigationConstants] = useState(navigationConstants);
   
    
  const path = useLocation();

  useEffect(() => {
    
    if (currentLoggedInUser.role === "Staff") {
      setNavigationConstants((prev) => {
        // Create a copy of the current navigation constants and update the Students path
        return prev.map((item) => {
          if (item.name === "Students") {
            return { ...item, path: "/students/department" }; // Change path
          }
          return item;
        });
      });
    } else {
      setNavigationConstants((prev) => {
        return prev.map((item) => {
          if (item.name === "Students") {
            return { ...item, path: "/students/search" }; 
          }
          return item;
        });
      });
    }
  }, [currentLoggedInUser.role]);

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
            {NavigationConstants.map((item, index) => (
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
        tabIndex="-1"
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
              <div className="right-part tw-w-full tw-relative tw-h-full tw-p-6 tw-bg-white">
                <button
                  type="button"
                  className="btn-close d-flex tw-justify-center tw-right-1 tw-m-4 tw-absolute  tw-top-1 tw-h-6 tw-w-6 tw-items-center"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <HiMiniXMark className="tw-h-6 tw-w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------- */}
      <div className=" w-100 p-4">
        <TopNavbar details={currentLoggedInUser} />
        <Outlet />
      </div>
    </div>
  );
};

function TopNavbar({details}) {
  const notification = false;

  const [showModal, setShowModal] = useState(false);

  const [departmentData, setDepartmentData] = useState({
    name: "",
    programType: "",
    programDuration: "",
  });

  const handleAddDepartment = () => {
    setShowModal(true);
    institutionApi.postInstitutionDepartment({
      payload: departmentData,
      success: (res) => {
        console.log(res.data.data);
        setSuccess(true);
      },
      error: (err) => {
        console.log(err);
      },
    });

    setDepartmentData({
      name: "",
      programType: "",
      programDuration: "",
    });
  };

  const dropdown = [{ name: "Create Job Post",path:"#" },  ...(details.role !== "Staff"
  ? [{ name: "Add Department", path: "/institution", onClick: handleAddDepartment }]
  : [])];
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
      {details.role && (
  details.role !== "Staff" && (
    <div className="dropdown">
      <img
        data-bs-toggle="dropdown"
        aria-expanded="false"
        src={feedIcon}
        className="tw-cursor-pointer tw-w-[25px] tw-h-[25px]"
        alt="feedIcon"
      />
      <ul className="dropdown-menu">
        {dropdown.map((item, index) => (
          <li key={index} className="tw-w-[300px]">
            {item.onClick ? (
              <button
                className="dropdown-item tw-flex tw-gap-4 tw-flex-nowrap"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={item.onClick}
              >
                <img src={plusIcon} alt="" style={{ width: "15px" }} />
                {item.name}
              </button>
            ) : (
              <a
                className="dropdown-item tw-flex tw-gap-4 tw-flex-nowrap"
                href={item.path}
              >
                <img src={plusIcon} alt="" style={{ width: "15px" }} />
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
)}

        {showModal && (
        <ModalComponent
          title="Add Department"
          btnTitle="Save & Update"
          target="exampleModal" // Optional: Specify a custom target for the modal
          onClose={() => setShowModal(false)} // Optional: Close modal function
          onSave={handleAddDepartment}
        >
            <label
            htmlFor="name"
            className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
          >
            Department Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Ex: Department of Electronics Engineering"
            style={{
              backgroundColor: "rgba(243, 243, 243, 1)",
              borderRadius: "7px",
            }}
            value={departmentData.name}
            onChange={(e) =>
              setDepartmentData({ ...departmentData, name: e.target.value })
            }
          />
          <div className="d-flex tw-my-4 tw-justify-between tw-items-center">
            <div className="">
              <label
                htmlFor="ProgramType"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Program Type
              </label>
              <select
                name="ProgramType"
                id="ProgramType"
                className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
            tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-[200px] tw-pr-3 tw-font-medium"
                value={departmentData.programType}
                onChange={(e) =>
                  setDepartmentData({
                    ...departmentData,
                    programType: e.target.value,
                  })
                }
              >
                <option value="" disabled>
                  Select Program Type
                </option>
                <option value="Degree Program">Degree Program</option>
                <option value="Integrated Program">Integrated Program</option>
                <option value="Certificate Program">Certificate Program</option>
                <option value="Diploma Program">Diploma Program</option>
                <option value="Professional Program">
                  Professional Program
                </option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="programDuration"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Program Duration
              </label>
              <select
                name="programDuration"
                id="programDuration"
                className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
            tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-[200px] tw-pr-3 tw-font-medium"
                value={departmentData.programDuration}
                onChange={(e) =>
                  setDepartmentData({
                    ...departmentData,
                    programDuration: e.target.value,
                  })
                }
              >
                <option className="" >
                  Select Program Duration
                </option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="2 years">2 years</option>
                <option value="3 years">3 years</option>
                <option value="4 years">4 years</option>
              </select>
            </div>
          </div>
        </ModalComponent>
      )}
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
        <a href="/profile">
        <img
          src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          alt=""
          className="rounded-circle tw-h-[35px] tw-w-[35px]"
         
        />
        </a>
      </div>
    </section>
  );
}

export default NavigationLayout;
