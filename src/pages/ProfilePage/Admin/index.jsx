import React from "react";
import usersData from "./UserData";

const Institution = () => {
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
        <ModalComponent />
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

function ModalComponent() {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <FormComponent />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormComponent() {
  return (
    <form class="row g-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">
          Email
        </label>
        <input type="email" class="form-control" id="inputEmail4" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">
          Password
        </label>
        <input type="password" class="form-control" id="inputPassword4" />
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
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
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

export default Institution;
