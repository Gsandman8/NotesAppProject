const router = require('express').Router();
const apiNotesRoutes = require("./apiNotes");

router.use("/notes", apiNotesRoutes);

module.exports = router;