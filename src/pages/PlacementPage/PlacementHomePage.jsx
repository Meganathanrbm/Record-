import React from "react";
import { useNavigate } from "react-router-dom";
import { organisation, roles } from "../../constants/placementConstant";

const PlacementHomePage = () => {
  const navigation = useNavigate();

  const handleClickOrganisation = (tag) => {
    return navigation(`/placement/organisationView/${tag}`);
  };
  const handleClickJobRole = (tag) => {
    return navigation(`/placement/jobRoleView/${tag}`);
  };
  return (
    <div className="tw-w-auto tw-mt-10 tw-h-auto tw-flex ">
      {/* Most hiring organisation */}
      <div className=" tw-flex-1">
        <h4 className="tw-font-bold tw-text-xl tw-capitalize">
          Most Hiring Organisation
        </h4>
        {/* list */}
        <div className="tw-w-[90%] tw-mt-3 tw-h-[390px] tw-overflow-y-scroll tw-overflow-hidden tw-divide-y-2 border_light">
          {organisation.map((li, i) => (
            <div
              className="tw-flex tw-gap-4 tw-p-4 tw-justify-start tw-items-center"
              key={i}
            >
              <img
                className="tw-rounded-full tw-w-10 tw-h-10 tw-bg-gray-300"
                src={li.logo}
                alt=""
              />
              <div
                onClick={() => handleClickOrganisation(li?.name)}
                className="tw-cursor-pointer tw-flex tw-flex-col tw--mb-4 tw-items-start tw-justify-center"
              >
                <h5 className="tw-font-bold tw-text-black tw-text-lg">
                  {li.name}
                </h5>
                <p className="tw-text-[#9A9A9A] tw-mb-3  tw-text-sm">
                  {li.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Most hiring Roles */}
      <div className="tw-flex-1">
        <h4 className="tw-font-bold tw-text-xl tw-capitalize">
          Most Hiring Roles
        </h4>
        {/* list */}
        <div className="tw-border-2 tw-w-[90%] tw-mt-3 tw-h-[390px] tw-overflow-y-scroll tw-overflow-hidden tw-divide-y-2 tw-rounded-md tw-border-[rgba(0, 0, 0, 0.3)]">
          {roles.map((li, i) => (
            <div
              className="tw-flex tw-flex-col tw--mb-4 tw-cursor-pointer tw-p-4  tw-justify-center tw-items-start"
              key={i}
              onClick={() => handleClickJobRole(li.title)}
            >
              <h5 className="tw-font-bold tw-text-black tw-text-lg">
                {li.title}{" "}
                <span
                  // onClick={() => handleClickOrganisation(li.title)}
                  className="tw-text-[rgb(235,124,73)]"
                >
                  {li.tag}
                </span>
              </h5>
              <p className="tw-text-[#9A9A9A] tw-mb-3 tw-text-sm">{li.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementHomePage;
