import axios from "axios";

const api = axios.create({
  // Atualiza de acordo com a conexão
  baseURL: "http://192.168.0.110:3333"
});

export default api;