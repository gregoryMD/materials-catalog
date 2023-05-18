import axios from "axios";
import { Material } from "../types";

const baseUrl = "/api";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addNew = (newObj: Material) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((response) => response.data);
};

const deleteMaterial = (id: string) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateMaterial = (id: string, newObj: Material) => {
  const req = axios.put(`${baseUrl}/${id}`, newObj);
  return req.then((res) => res.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, addNew, deleteMaterial, updateMaterial };
