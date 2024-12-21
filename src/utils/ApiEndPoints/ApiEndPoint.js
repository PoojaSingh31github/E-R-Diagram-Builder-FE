import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const loginUser = (data) => {
    console.log(data);
    return apiClient.post("/users/login", data);
  };


  const getUserDetails = async() => {
    try {
      const res =  await apiClient.get(`/users/getUser`);
      return res
    } catch (error) {
      return error
    }
  };  

  const signupUser = (data) => {
    return apiClient.post("/users/signup", data);
  }; 
export { loginUser, getUserDetails, signupUser };  