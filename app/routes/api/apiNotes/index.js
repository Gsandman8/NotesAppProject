
//creates the router
const router = require('express').Router();
//Links getNotes, postNote, and deleteNote from controllers/index.js
const { getNotes, postNote, deleteNote } = require("../../../controllers");
//Use getNotes for all get routes
router.get("/", getNotes);
//Use postNote for all post routes
router.post("/", postNote );
//Use deleteNote for all delete routes with the id parameter
router.delete("/:id", deleteNote);
//exports the router
module.exports = router;