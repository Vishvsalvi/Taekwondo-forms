import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://tam-tournament-form.onrender.com",
});

export { httpClient };
