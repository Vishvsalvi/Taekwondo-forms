import axios from "axios";

const httpClient = axios.create({
  // baseURL: "https://tam-tournament-form.onrender.com",
  baseURL: "http://localhost:5000"
});

export { httpClient };
