const router = require('express').Router();
const apiRoutes = require("./api");
const notesRoutes = require("./notes");

router.use("/api", apiRoutes);
router.use("/notes", notesRoutes);

router.get("/", (req, res) => {
    
});


module.exports = router;