import axios from "../configs/axios-instances";

import apiPath from "../constants/api-path.constant";

const studentApi={
    getBestStudents: ({ query, success, error }) => {
        const {
          student: { getBestStudents },
        } = apiPath;
        axios.getRequest({ path: getBestStudents,success, error });
      },
};

export default studentApi;