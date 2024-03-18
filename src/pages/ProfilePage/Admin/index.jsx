import React from "react";
import usersData from "./UserData";
import styles from "./index.module.css";
import ModalComponent from "../../../components/Modal/ModalComponent";

const AdminInstitution = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <section className="d-flex justify-content-between">
        <h4>Institution Users</h4>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style={{
            backgroundColor: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
          }}
        >
          Add Instituion Users +
        </button>
        <ModalComponent>
          <FormComponent />
        </ModalComponent>
      </section>

      <section>
        <SearchComponent />
      </section>
      <section
        className="border p-2 rounded-3"
        style={{ maxHeight: "60vh", overflow: "auto" }}
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
            <tr>
              <td scope="row">
                <div className="d-flex align-items-center gap-2">
                  <img
                    // src={user.img}
                    src="/user.png"
                    alt=""
                    srcSet=""
                    style={{ width: "50px", borderRadius: "50%" }}
                  />
                  <p>{user.name}</p>
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <i class="bi bi-pencil-fill"></i>
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
