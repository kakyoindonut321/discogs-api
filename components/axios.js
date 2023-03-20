import axios from "axios";
import { THE_API_KEY } from "./key";

axios.defaults.baseURL = "";
axios.defaults.params = {
    apiKey: THE_API_KEY,
};

export default axios;