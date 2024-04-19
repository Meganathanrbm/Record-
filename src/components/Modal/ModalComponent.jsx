import React, { Children } from "react";
import { HiMiniXMark } from "react-icons/hi2";

const ModalComponent = ({
  children,
  btn,
  btnIcon,
  title,
  btnTitle,
  target,
}) => {
  console.log(title);
  return (
    <div
      className="modal fade "
      id={target ? target : "exampleModal"}
      tabindex="-1"
      aria-labelledby={target ? target : "exampleModal"}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div
          className="modal-content tw-rounded-xl"
          style={{ width: "fit-content" }}
        >
          <div className="modal-body" style={{ width: "45vw" }}>
            <div className="d-flex justify-content-between mt-2 mb-3">
              <h1
                className="modal-title fs-5"
                id={target ? target : "exampleModal"}
                style={{ fontSize: "16px", fontWeight: "600" }}
              >
                {title}
              </h1>
              <button
                type="button"
                className="btn-close d-flex tw-justify-center tw-h-6 tw-w-6 tw-items-center"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <HiMiniXMark className="tw-h-6 tw-w-6" />
              </button>
            </div>
            {children}
            <div className="d-flex justify-content-end mt-4 mb-5">
              {btn ? (
                btn
              ) : (
                <button
                  type="button"
                  className="tw-text-white tw-text-base tw-ml-auto tw-float-right tw-text-center tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
                  style={{
                    backgroundColor:
                      "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

                    background:
                      "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                  }}
                >
                  {btnTitle} <img src={btnIcon && btnIcon} alt="" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
