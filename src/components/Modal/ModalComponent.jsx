import React, { Children } from "react";

const ModalComponent = ({ children }) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" style={{ width: "fit-content" }}>
          <div class="modal-body" style={{ width: "45vw" }}>
            <div className="d-flex justify-content-between mt-2 mb-3">
              <h1
                class="modal-title fs-5"
                id="exampleModalLabel"
                style={{ fontSize: "16px", fontWeight: "600" }}
              >
                Add Institution User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {children}
            <div className="d-flex justify-content-end mt-4 mb-5">
              <button
                type="button"
                class="btn btn-primary"
                style={{
                  backgroundColor: "rgba(235, 124, 73, 1)rgba(240, 79, 82, 1)",
                }}
              >
                Save & Add New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
