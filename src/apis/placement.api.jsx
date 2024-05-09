import axios from "../configs/axios-instances";

import apiPath from "../constants/api-path.constant";

const placementApi={
    getHomePlacementPage:({ query, success, error })=>{
        const {
            placement: { getHomePlacementPage },
          } = apiPath;
          axios.getRequest({ path: getHomePlacementPage,success, error });
    },
    getOrganizationView:({ organisationName, success, error})=>{
        const {
            placement:{getOrganizationView},
        }=apiPath;
        const pathWithParams = `${getOrganizationView}/${organisationName}`;
        axios.getRequest({ path:pathWithParams,success, error });
    },
};

export default placementApi;