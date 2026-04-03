import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  headers:{
    "constent-Type": "application/json"
  }
});

export default axiosClient;