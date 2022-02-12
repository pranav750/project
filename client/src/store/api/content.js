import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8001" });

export const getTopContent = () => API.get("/top-content");
export const contentDataIngestion = (form) => API.post("/data", form);
export const likeBook = (form) => API.put("/like", form);
export const unlikeBook = (form) => API.put("/unlike", form);
