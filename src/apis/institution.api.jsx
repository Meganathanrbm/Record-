import axios from "../configs/axios-instances";

import apiPath from "../constants/api-path.constant";

const institutionApi = {
  getInstitutionProfile: ({ query, success, error }) => {
    const {
      institution: { getInstitutionProfile },
    } = apiPath;
    axios.getRequest({ path: getInstitutionProfile, success, error });
  },
  getInstitutionDepartment:({query,success,error})=>{
    const {
      institution: { getInstitutionDepartment },
    } = apiPath;
    axios.getRequest({ path: getInstitutionDepartment, success, error })
  }
};

export default institutionApi;