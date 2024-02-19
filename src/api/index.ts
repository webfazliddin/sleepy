
import axios from "axios";

const client = axios.create({
  baseURL: "https://medcrm.bsite.net",
});

client.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default client;