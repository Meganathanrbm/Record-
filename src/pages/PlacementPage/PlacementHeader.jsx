import React from "react";

const PlacementHeader = () => {
  return (
    <header className="tw-w-full ">
      <h3 className="tw-font-bold tw-text-3xl tw-text-center">
        Search Organisations
      </h3>
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
