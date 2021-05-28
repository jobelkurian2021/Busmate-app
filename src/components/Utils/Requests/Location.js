import axios from "axios";

export const getLocations = () => axios.get("http://localhost:3500/api/Location");
export const getAllLocations = () => axios.get("http://localhost:3500/api/Location");
export const getALocation = id => axios.get(`/location/${id}`);
export const updateLocation = (id, body) => axios.put(`/location/${id}`, body);
export const removeLocation = id => axios.delete(`/location/${id}`);
// export const addNewLocation = body => axios.post("/location", body);
export const addNewLocation = body => axios.post("http://localhost:3500/api/addlocation", body);
