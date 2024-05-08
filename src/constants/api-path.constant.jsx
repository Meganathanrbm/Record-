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
    getBestStudents: setBaseUrlPrefix("/students")
  }
};

export default apiPathConstants;
