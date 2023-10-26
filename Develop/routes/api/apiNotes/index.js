const router = require('express').Router();
const { getNotes, postNote, deleteNote } = require("../../../controllers");

router.get("/", getNotes);

router.post("/", postNote );

router.delete("/:id", deleteNote);

module.exports = router;