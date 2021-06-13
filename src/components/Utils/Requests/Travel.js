import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:3500/api',
  })

export const getAllTravels = () => axios.get("/travels");
export const getATravel = id => axios.get(`/travels/${id}`);
export const updateTravel = (id, body) => axios.put(`/travels/${id}`, body);
export const removeTravel = id => axios.delete(`/travels/${id}`);
export const addNewTravel = body => axios.post("/travels", body);
export const SearchBus = body => axios.get("/Search", body);