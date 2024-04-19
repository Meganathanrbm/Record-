import React from "react";

const StudentHeader = () => {
  return (
    <>
      <h3
        className="text-center"
        style={{ fontSize: "25px", fontWeight: "700" }}
      >
        Search Students
      </h3>
      <section
        className="d-flex w-75 gap-4"
        style={{ margin: "0 auto", alignItems: "stretch", height: "7vh" }}
      >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Department of Electronics Engineering"
          style={{
            backgroundColor: "rgba(243, 243, 243, 1)",
            borderRadius: "7px",
          }}
        />
        <DropDownComponent value="Batch" />
        <DropDownComponent value="Select Student" />
      </section>
    </>
  );
};

function DropDownComponent({ value }) {
  return (
    <div class="dropdown">
      <button
        class="btn  dropdown-toggle "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "rgba(243, 243, 243, 1)",
          color: "rgba(133, 133, 133, 1)",
          border: "none",
          height: "-webkit-fill-available",
        }}
      >
        {value ? value : "Select"}
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
export default StudentHeader;
