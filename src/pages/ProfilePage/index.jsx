import React, { useState } from "react";
import FormComponent from "./form";
import Institution from "./Admin";

const Profile = () => {
  const [active, setActive] = useState("Profile");
  return (
    <div className="d-flex justify-content-around">
      <section
        className="d-flex flex-column align-items-center border p-2 rounded-4"
        style={{ width: "30%", minHeight: "80vh" }}
      >
        <img
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
          alt=""
          srcSet=""
          className="rounded-circle mt-2"
          style={{ width: "10vw" }}
        />
        <h3
          className="mt-2 mb-2"
          style={{ fontWeight: "600", fontSize: "xx-large" }}
        >
          Jhon Doe
        </h3>
        <div style={{ width: "-webkit-fill-available" }}>
          <ul
            className="mt-5 d-flex flex-column gap-3"
            style={{ fontSize: "larger", fontWeight: "600" }}
          >
            <li
              onClick={() => setActive("Profile")}
              style={{
                color:
                  active === "Profile"
                    ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                    : "",
              }}
            >
              Profile
            </li>
            <li
              onClick={() => setActive("Users")}
              style={{
                color:
                  active === "Users"
                    ? "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)"
                    : "",
              }}
            >
              Institution Users
            </li>
          </ul>
        </div>
      </section>

      <section style={{ width: "60%" }}>
        {active === "Profile" ? <FormComponent /> : <Institution />}
      </section>
    </div>
  );
};

export default Profile;
