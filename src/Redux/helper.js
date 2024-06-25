import axios from "axios";
let adminUrl2 = "https://webskitters-student.onrender.com";
let adminUrl="https://wtsacademy.dedicateddevelopers.us/api";

export const baseURL = adminUrl;

let axiosInstance = axios.create({  // axiosInstance for making HTTP requests.
   baseURL:adminUrl2,
});

  let axiosInstance2 = axios.create({  // axiosInstance for making HTTP requests.
  baseURL,
});

export { adminUrl, axiosInstance };


export const productu = (media) => {
  return (
    `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`
  );
};

export const profile_pic = (media) => {
  // return (
  //   `https://wtsacademy.dedicateddevelopers.us/api/${media}`
  // );
  return (
    `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`
  );
};




export const profile_pic2 = (media) => {
  
  return (
    `https://webskitters-student.onrender.com/${media}`
  );
};




axiosInstance.interceptors.request.use(
     function (config) {
      const token =
        localStorage.getItem("token2") || sessionStorage.getItem("token2");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );


  axiosInstance2.interceptors.request.use(
    function (config) {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );


export default axiosInstance2;