import React, { useState } from "react";

const InputComponent = ({ icon }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div
      className="d-flex align-items-center border rounded-3 "
      style={{ width: "100%", padding: "0 1rem" }}
    >
      <input
        type={icon ? (isHidden ? "password" : "text") : "email"}
        placeholder={icon ? "Password" : "Email"}
        style={{
          width: "inherit",
          border: "none",
          height: "6vh",
          borderStyle: "none",
        }}
      />
      <div onClick={() => setIsHidden(!isHidden)}>
        {icon && <i class={isHidden ? "bi bi-eye-slash" : "bi bi-eye"}></i>}
      </div>
    </div>
  );
};

export default InputComponent;
