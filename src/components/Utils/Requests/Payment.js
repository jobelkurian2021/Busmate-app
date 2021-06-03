import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://localhost:3500/api',
  })

  export const orders = body => axios.post("/orders", body);

export const success = body => axios.post("/success", body);
