import axios from "../configs/axios-instances";

import apiPath from "../constants/api-path.constant";

const dashboardApi = {
  getAdminDashboard: ({ query, success, error }) => {
    const {
      dashboard: { getAdminDashboard },
    } = apiPath;
    axios.getRequest({ path: getAdminDashboard, success, error });
  },
  getStaffDashboard:({query,success,error})=>{
    const{
      dashboard:{getStaffDashboard},
    }=apiPath;
    axios.getRequest({ path: getStaffDashboard, success, error });
  }
};

export default dashboardApi;