import axios from "axios";
import { Configs } from "./configs";

export const api = axios.create({
  baseURL: Configs.apiUrl,
});
