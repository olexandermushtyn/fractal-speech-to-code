const express = require("express");

const router = express.Router();

const defaultRoutes = [
  // {
  //   path: "/atoms",
  //   route: AtomRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
