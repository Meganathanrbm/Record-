const BASEURL = "http://localhost:8080/api";
// const BASEURL = "https://api-v2.getrecord.in/api";

const setBaseUrlPrefix = (path) => {
  return BASEURL.concat(path);
};

const apiPathConstants = {
  auth: {
    login: setBaseUrlPrefix("/auth/staff/login"),
    logout: setBaseUrlPrefix("/auth/staff/logout"),
    register: setBaseUrlPrefix("/auth/staff/register"),
    googleSSO: setBaseUrlPrefix("/auth/google-sso"),
    verifySession: setBaseUrlPrefix("/auth/staff/verify-session"),
    changePassword: setBaseUrlPrefix("/auth/staff/change-password"),
    forgotPassword: setBaseUrlPrefix("/auth/staff/forgot-password"),
    verificationEmail: setBaseUrlPrefix("/auth/send/verification-email"),
  },
  student:{
    getBestStudents: setBaseUrlPrefix("/students"),
    getStudentProfile:setBaseUrlPrefix("/students/profile"),
    getDepartmentProfile:setBaseUrlPrefix("/students/department"),
  },
  placement:{
    getHomePlacementPage:setBaseUrlPrefix("/placement/home"),
    getOrganizationView:setBaseUrlPrefix("/placement/organisation"),
    getJobRole:setBaseUrlPrefix("/placement/job"),
  },
  dashboard:{
    getAdminDashboard:setBaseUrlPrefix("/dashboard/admin"),
    getStaffDashboard:setBaseUrlPrefix("/dashboard/staff"),
  },
  institution:{
    getInstitutionProfile:setBaseUrlPrefix("/institution/profile"),
    getInstitutionDepartment:setBaseUrlPrefix("/institution/departments"),
  }
};

export default apiPathConstants;
