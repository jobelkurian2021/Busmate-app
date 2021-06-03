const router = require("express").Router();


const {
  add,
  update,
  read,
  remove,
  orders,
  success
} = require("../controllers/payment");



module.exports = router;
