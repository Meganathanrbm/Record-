import React from "react";
import usersData from "./UserData";
import styles from "./index.module.css";
import ModalComponent from "../../../components/Modal/ModalComponent";
import penEditIcon from "../../../assets/svg/editPenIcon.svg";

const AdminInstitution = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <section className="d-flex justify-content-between">
        <h5 style={{ fontSize: "19px", fontWeight: "700" }}>Users (12)</h5>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
          style={{
            backgroundColor:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
          }}
        >
          Add Instituion Users<span className="tw-text-xl">+</span>
        </button>
        <ModalComponent title="Add Institution User" btnTitle="Save & Add New">
          <FormComponent />
        </ModalComponent>
      </section>

      <section>
        <SearchComponent />
      </section>
      <section
        className="border p-2 rounded-3"
        style={{ maxHeight: "65vh", overflow: "auto" }}
      >
        <TableComponent />
      </section>
    </div>
  );
};

function FormComponent() {
  return (
    <form class={`row g-3 ${styles.formWrapper}`}>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Official Email
        </label>
        <input type="email" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Representing Department
        </label>
        <input type="text" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Role
        </label>
        <select class="form-select" id="specificSizeSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
  );
}

function TableComponent() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((user, index) => {
          return (
            <tr key={index} className=" tw-table-row">
              <td scope="row ">
                <div className="d-flex align-items-center gap-2">
                  <img
                    // src={user.img}
                    src="/user.png"
                    alt=""
                   
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                  <p>{user.name}</p>
                </div>
              </td>
              <td className="">{user.email}</td>
              <td>{user.role}</td>
              <td className="">
                <img
                  src={penEditIcon}
                  alt="pen-icon"
                  className="tw-cursor-pointer tw-h-[15px] tw-w-[15px]"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SearchComponent() {
  return (
    <>
      <div
        className="border p-2 rounded-3 d-flex gap-2"
        style={{ width: "25vw", backgroundColor: "rgba(243, 243, 243, 1)" }}
      >
        <i class="bi bi-search"></i>
        <input
          type="text"
          placeholder="Search the users by name or email"
          style={{ border: "none", backgroundColor: "inherit" }}
        />
      </div>
    </>
  );
}

export default AdminInstitution;
