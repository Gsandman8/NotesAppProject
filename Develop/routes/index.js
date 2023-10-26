const router = require('express').Router();
const apiRoutes = require("./api");
const notesRoutes = require("./notes");
const { sendIndexHtml } = require("../controllers");

router.use("/api", apiRoutes);
router.use("/notes", notesRoutes);

router.get("/", sendIndexHtml);


module.exports = router;