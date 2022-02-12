import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

export const signIn = (form) => API.post("/sign-in", form);
export const signUp = (form) => API.post("/sign-up", form);
export const userDataIngestion = (form) => API.post("/data", form);
