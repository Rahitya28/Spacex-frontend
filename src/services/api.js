import axios from "axios";

const API_BASE_URL = "/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllMissions = async () => {
  const response = await api.get("/get/missions");
  return response.data;
};

export const getMissionById = async (id) => {
  const response = await api.get(`/get/missions/${id}`);
  return response.data;
};

export default api;
