import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:3500/api',
  })
export const getLocations = () => axios.get(`/Location`);
export const getAllLocations = () => axios.get(`/Location`);
export const getALocation = id => axios.get(`/location/${id}`);
export const updateLocation = (id, body) => axios.put(`/Location/${id}`, body);
export const removeLocation = id => axios.delete(`/Location/${id}`);
export const addNewLocation = body => axios.post("/addlocation", body);
// export const addNewLocation = body => axios.post("http://localhost:3500/api/addlocation", body);
