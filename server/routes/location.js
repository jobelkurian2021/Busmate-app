const router = require("express").Router();
// const {
//   requireSuperadminSignin,
// } = require("../controllers/auth-owner");
const {
  add,
  update,
  read,
  remove,
  getLocations,
  locationById
  // getAllLocations
} = require("../controllers/location");

router
  .route("/")
  .get(getLocations)
  // .get(getAllLocations)
  .post(add);
  // .post(requireSuperadminSignin, add);

router
  .route("/:place")
  .get(read)
  .put( update)
  .delete( remove);

router.param("place", locationById);

module.exports = router;
