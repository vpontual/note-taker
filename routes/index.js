const router = require("express").Router;

// Import files containing the routes
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./notesRoutes");

//html routes
router.use("/htmlRoutes", htmlRoutes);

//api routes
router.use("/apiRoutes", apiRoutes);

module.exports = router;
