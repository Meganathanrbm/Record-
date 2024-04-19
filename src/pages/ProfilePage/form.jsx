import React from "react";

import styles from "./profile.module.css";
import penEditIcon from "../../assets/svg/editPenIcon.svg";

const FormComponent = () => {
  return (
    <form action="" className={styles.inputBox}>
      <h3 style={{ fontSize: "19px", fontWeight: "700" }}>Departments</h3>
      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Full Name</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Role</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Department</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Desigination</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.inputSection}>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Mobile</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Email</label>
          <div class="form-group d-flex tw-relative tw-items-center tw-justify-center">
            <input type="text" className="form-control" id="inputEmail4" />
            <button class="input-control p-3 tw-bg-transparent tw-absolute tw-right-0">
              <img
                src={penEditIcon}
                alt=""
                className=" tw-h-[15px] tw-w-[15px]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="col btn tw-float-right tw-px-6 "
          style={{
            color: "white",
            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
            border: "none",
            padding: "revert-layer",
            maxWidth: "100px",
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
