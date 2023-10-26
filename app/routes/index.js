
//Sets up the router
const router = require('express').Router();
//Links api/index.js and notes/index.js
const apiRoutes = require("./api");
const notesRoutes = require("./notes");
//Links the sendIndexHtml from module.exports from controllers/index.js
const { sendIndexHtml } = require("../controllers");
//Use apiroutes for all routes beginning with /api
router.use("/api", apiRoutes);
//Use notesRoutes for all routes beginning with /notes
router.use("/notes", notesRoutes);
//Use sendIndexHtml for the root route
router.get("/", sendIndexHtml);

//exports the router
module.exports = router;