const router = require('express').Router();
const apiRoutes = require("./api");
const notesRoutes = require("./notes");

router.use("/api", apiRoutes);
router.use("/notes", notesRoutes);

router.get("/", (req, res) => {
    res.sendFile((__dirname + "../../public/index.html"));
});


module.exports = router;