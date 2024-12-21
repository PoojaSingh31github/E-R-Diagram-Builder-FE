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

// Authentication APIs
const loginUser = (data) => apiClient.post("/users/login", data);

const signupUser = (data) => apiClient.post("/users/signup", data);

const getUserDetails = async () => {
  try {
    const res = await apiClient.get(`/users/getUser`);
    return res;
  } catch (error) {
    return error;
  }
};

// Project APIs
const createProject = (data) => apiClient.post("/project/", data);

const getProjectById = (id) => apiClient.get(`/project/getProject/${id}`);

const updateProjectById = (id, data) =>
  apiClient.put(`/project/updateProject/${id}`, data);

const deleteProjectById = (id) => apiClient.delete(`/project/${id}`);

const getAllProjects = () => apiClient.get(`/project/getAllProjects`);

const registerUser = (data) =>
  apiClient.post("/users/register", {
    name: data.name,
    email: data.email,
    password: data.password,
    address: data.address,
  });

export {
  loginUser,
  signupUser,
  getUserDetails,
  createProject,
  getProjectById,
  updateProjectById,
  deleteProjectById,
  getAllProjects,
  registerUser,
};
