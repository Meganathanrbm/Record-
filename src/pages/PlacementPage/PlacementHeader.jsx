import React from "react";
import ModalComponent from "../../components/Modal/ModalComponent";

const departments = [
  "Department of Information Technology",
  "Department of Computer Engineering",
  "Bachelor of Commerce ",
  "Bachelor of Computer Science Application ",
];
const PlacementHeader = () => {
  return (
    <header className="tw-w-full ">
      <div className="d-flex tw-justify-center tw-items-center">
        <h3 className="tw-font-bold tw-ml-auto  tw-text-[25px] tw-text-center">
          Search Organisations
        </h3>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#CreateJobPost"
          className="tw-text-white tw-text-base tw-ml-auto tw-float-right tw-text-center tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
          style={{
            backgroundColor:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
          }}
        >
          Create Job Post <span className="tw-text-xl">+</span>
        </button>
        {/* model for create job post */}
        <ModalComponent
          target="CreateJobPost"
          title="Create Job Post"
          btn={
            <>
              <button
                data-bs-toggle="modal"
                data-bs-target="#AssignStudents "
                className="tw-text-white tw-text-base tw-ml-auto tw-float-right tw-text-center tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
                style={{
                  backgroundColor:
                    "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

                  background:
                    "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                }}
              >
                Assign Students
              </button>
            </>
          }
          btnTitle="Assign Students"
        >
          {/* company name and job Description */}
          <div className="d-flex tw-w-full tw-mb-4 tw-justify-between tw-gap-8">
            <div className="tw-w-full">
              <label
                htmlFor="Department Name"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Company Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: Infosys"
                style={{
                  backgroundColor: "rgba(243, 243, 243, 1)",
                  borderRadius: "7px",
                }}
              />
            </div>
            <div className="tw-w-full">
              <label
                htmlFor="Department Name"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Job Designation
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: Technical Support"
                style={{
                  backgroundColor: "rgba(243, 243, 243, 1)",
                  borderRadius: "7px",
                }}
              />
            </div>
          </div>
          {/* Working type and job location */}
          <div className="d-flex tw-w-full tw-mb-4 tw-justify-between tw-gap-8">
            <div className="tw-w-full">
              <label
                htmlFor="Workplace Type"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Workplace Type
              </label>
              <select
                name="Workplace Type"
                id="Workplace Type"
                className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-full tw-pr-3 tw-font-medium"
              >
                <option className="" selected>
                  On-Site
                </option>
                <option value="option 1"> Work from Office</option>
                <option value="option 2"> Work from Home</option>
                <option value="option 3"> Hybrid</option>
              </select>
            </div>
            <div className="tw-w-full">
              <label
                htmlFor="Department Name"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Job Location
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Ex: Coimbatore, Tamil Nadu, India"
                style={{
                  backgroundColor: "rgba(243, 243, 243, 1)",
                  borderRadius: "7px",
                }}
              />
            </div>
          </div>
          {/* Job type and no. of opening */}
          <div className="d-flex tw-w-full tw-mb-4 tw-justify-between tw-gap-8">
            <div className="tw-w-full">
              <label
                htmlFor="Job Type"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                Job Type
              </label>
              <select
                name="Job Type"
                id="Job Type"
                className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-full tw-pr-3 tw-font-medium"
              >
                <option className="" selected>
                  Full-Time
                </option>
                <option value="option 1"> Work from Office</option>
                <option value="option 2"> Work from Home</option>
                <option value="option 3"> Hybrid</option>
              </select>
            </div>
            <div className="tw-w-full">
              <label
                htmlFor="No. of Openings"
                className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
              >
                No. of Openings
              </label>
              <select
                name="No. of Openings"
                id="No. of Openings"
                className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-black tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-full tw-pr-3 tw-font-medium"
              >
                <option className="" selected>
                  Select
                </option>
                <option value="option 1"> Work from Office</option>
                <option value="option 2"> Work from Home</option>
                <option value="option 3"> Hybrid</option>
              </select>
            </div>
          </div>
          {/* job description */}
          <label
            htmlFor="Department Name"
            className="tw-text-[#8F8F8F] tw-font-medium tw-mb-1"
          >
            Job Description
          </label>
          <textarea
            rows={8}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ex: Infosys"
            style={{
              backgroundColor: "rgba(243, 243, 243, 1)",
              borderRadius: "7px",
            }}
          ></textarea>
          <label
            htmlFor="Department Name"
            className="tw-text-[#8F8F8F] tw-mt-4 tw-font-medium tw-mb-1"
          >
            Skills
          </label>
          <p className="tw-font-medium">
            App upto 8 skills that you would look into students.{" "}
          </p>
          <button
            style={{
              backgroundColor: "rgba(243, 243, 243, 1)",
              borderRadius: "7px",
            }}
            className="tw-font-semibold tw-text-[#EB7C49] tw-border p-2 tw-mt-4 tw-rounded-lg tw-bg-[#F3F3F3]"
          >
            Add skills <span className="tw-text-lg">+</span>
          </button>
        </ModalComponent>
        {/* Assign Students modal */}
        <ModalComponent
          target="AssignStudents"
          btnTitle="Send Notification"
          btn={
            <>
              <button
                data-bs-toggle="modal"
                data-bs-target="#AssignStudentsNotification"
                className="tw-text-white tw-text-base tw-flex tw-justify-center tw-items-center gap-2 tw-ml-auto tw-float-right tw-text-center tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
                style={{
                  backgroundColor:
                    "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

                  background:
                    "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
                }}
              >
                <span>Send Notification</span>
                <span className=" tw-inline-block tw-m-1">
                  <svg
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.76191 7.85714C5.76191 6.12333 7.17095 4.71429 8.90476 4.71429C9.48095 4.71429 10.0152 4.87143 10.4762 5.13857V1.04762C10.4762 0.769773 10.3658 0.503307 10.1694 0.30684C9.97288 0.110374 9.70642 0 9.42857 0H1.04762C0.46619 0 0 0.46619 0 1.04762V7.33333C0 7.61118 0.110374 7.87765 0.30684 8.07411C0.503307 8.27058 0.769773 8.38095 1.04762 8.38095H5.80905C5.78286 8.2081 5.76191 8.03524 5.76191 7.85714ZM1.04762 2.09524V1.04762L5.2381 3.66667L9.42857 1.04762V2.09524L5.2381 4.71429L1.04762 2.09524ZM9.42857 9.42857V8.38095H7.33333V7.33333H9.42857V6.28571L11 7.85714L9.42857 9.42857Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </>
          }
          title="Assign Students"
        >
          <p className="tw-font-medium tw-mb-2">
            Assign this opportunity to the relevant department students.
          </p>
          <div className="d-flex tw-flex-wrap">
            {departments.map((it, i) => (
              <span
                className="tw-p-1 gradiant-color tw-m-1 tw-font-medium tw-rounded-xl tw-border-2 tw-border-[rgb(235,124,73)]"
                key={i}
              >
                {it}
              </span>
            ))}
            <button
              style={{
                backgroundColor: "rgba(243, 243, 243, 1)",
                borderRadius: "7px",
              }}
              className="tw-font-semibold tw-text-[#EB7C49] tw-border p-2 tw-m-1 tw-rounded-lg tw-bg-[#F3F3F3]"
            >
              Add Departments <span className="tw-text-lg">+</span>
            </button>
          </div>
        </ModalComponent>
        {/* Assign Students Notification modal */}
        <ModalComponent
          target="AssignStudentsNotification"
          btn={<span></span>}
          title="Assign Students"
        >
          <div className="tw-w-full tw-justify-center tw-flex tw-items-center tw-flex-col tw-h-full">
            <p className="tw-font-medium tw-text-lg tw-my-8">
              Notification has been send to relevant department students.{" "}
            </p>
            <button
              data-bs-dismiss="modal"
              className="tw-text-white tw-text-base tw-mb-4 tw-float-right tw-text-center tw-px-4 tw-py-2 tw-rounded-md tw-font-medium"
              style={{
                backgroundColor:
                  "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",

                background:
                  "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
              }}
            >
              Done
            </button>
          </div>
        </ModalComponent>
      </div>
      {/* options  */}
      <div className="tw-flex tw-justify-center tw-items-center tw-mt-4 tw-gap-8">
        <select
          name="Industry"
          id="Industry"
          className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-[#858585] tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-[200px] tw-pr-3 tw-font-medium"
        >
          <option className="" selected>
            Industry
          </option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
          <option value="option 5">option 5</option>
        </select>

        <select
          name="Organisation"
          id="Organisation"
          className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-[#858585] tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-[250px] tw-pr-3 tw-font-medium"
        >
          <option className="" selected>
            Select Organization
          </option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
          <option value="option 5">option 5</option>
        </select>

        <select
          name="Role"
          id="Role"
          className="tw-bg-[#F3F3F3] tw-border tw-border-gray-300 tw-text-[#858585] tw-text-md tw-rounded-lg tw-focus:ring-blue-500 
          tw-focus:border-blue-500 tw-block tw-p-2.5 tw-w-[200px] tw-pr-3 tw-font-medium"
        >
          <option className="" selected>
            Select Role
          </option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
          <option value="option 5">option 5</option>
        </select>
      </div>
    </header>
  );
};

export default PlacementHeader;
