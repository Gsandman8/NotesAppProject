//creates the router
const router = require('express').Router();
//links the apiNotesRoutes
const apiNotesRoutes = require("./apiNotes");
//Uses apiNotesRoutes for all routes beginning with /notes
router.use("/notes", apiNotesRoutes);
//exports the router
module.exports = router;