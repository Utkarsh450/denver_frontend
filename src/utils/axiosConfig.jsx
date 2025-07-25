import axios from "axios";
const instance = axios.create({
  baseURL: "https://denver-perfumes.onrender.com/"
})

export default instance;
