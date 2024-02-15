import axios from "axios";

// export const API_KEY = "db558b98-44e8-418f-ba9e-8c48070133a9";

const API = axios.create({
  baseURL: "https://it-intern-hub.freemyip.com/",
});

// API.defaults.headers["X-API-KEY"] = API_KEY/;
// console.log(API);
export default API;