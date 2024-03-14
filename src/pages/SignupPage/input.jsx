import React from "react";

const InputComponent = ({ icon }) => {
  return (
    <div
      className="d-flex align-items-center border rounded-3 "
      style={{ width: "100%", padding: "0 1rem" }}
    >
      <input
        type={icon ? "password" : "email"}
        placeholder={icon ? "Password" : "Email"}
        style={{
          width: "inherit",
          border: "none",
          height: "6vh",
          borderStyle: "none",
        }}
      />
      {icon && <i class="bi bi-eye-slash"></i>}
    </div>
  );
};

export default InputComponent;
