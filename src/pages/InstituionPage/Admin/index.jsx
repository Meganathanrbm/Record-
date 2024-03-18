import React from "react";
import ModalComponent from "../../../components/Modal/ModalComponent";

const AdminDepartments = () => {
  return (
    <div className="d-flex flex-column">
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
        <ModalComponent></ModalComponent>
      </section>
      <section></section>
    </div>
  );
};

export default AdminDepartments;
