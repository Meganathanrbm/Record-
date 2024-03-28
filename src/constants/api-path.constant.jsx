const BASEURL = "http://localhost:8080/api";
// const BASEURL = "https://api-v2.getrecord.in/api";

const setBaseUrlPrefix = (path) => {
  return BASEURL.concat(path);
};

const apiPathConstants = {};

export default apiPathConstants;
