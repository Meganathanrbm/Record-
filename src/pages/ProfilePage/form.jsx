import React from "react";

import styles from "./profile.module.css";

const FormComponent = () => {
  return (
    <form action="" className={styles.inputBox}>
      <h3 style={{ fontSize: "18px", fontWeight: "700" }}>Departments</h3>
      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Full Name</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Role</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Department</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Desigination</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Mobile</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Email</label>
          <div className="d-flex">
            <input type="text" />
            <i class="bi bi-pencil-fill"></i>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          className={styles.saveBtn}
          style={{
            backgroundColor: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
