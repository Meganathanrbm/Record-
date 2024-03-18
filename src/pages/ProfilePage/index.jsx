import React, { useState } from "react";
import FormComponent from "./form";
import AdminInstitution from "./Admin";

const Profile = () => {
  const admin = false;
  const [active, setActive] = useState("Profile");
  return (
    <div className="d-flex justify-content-between">
      <section
        className="d-flex flex-column align-items-center border p-2 rounded-4"
        style={{ width: "25%", minHeight: "80vh" }}
      >
        <img
          src="/user.png"
          alt=""
          srcSet=""
          className=" mt-2"
          style={{ width: "10vw" }}
        />

        <h3
          className="mt-2 mb-2"
          style={{ fontWeight: "700", fontSize: "17px" }}
        >
          Jhone Doe
        </h3>
        <div style={{ width: "-webkit-fill-available" }}>
          <ul
            className="mt-5 d-flex flex-column gap-3"
            style={{ fontSize: "17px", fontWeight: "700" }}
          >
            <li
              onClick={() => setActive("Profile")}
              style={{
                color:
                  active === "Profile"
                    ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                    : "rgba(143, 143, 143, 1)",
              }}
            >
              Profile
            </li>
            {admin && (
              <li
                onClick={() => setActive("Users")}
                style={{
                  color:
                    active === "Users"
                      ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                      : "rgba(143, 143, 143, 1)",
                }}
              >
                Institution Users
              </li>
            )}
          </ul>
        </div>
      </section>

      <section style={{ width: "70%" }}>
        {active === "Profile" ? <FormComponent /> : <AdminInstitution />}
      </section>
    </div>
  );
};

export default Profile;
