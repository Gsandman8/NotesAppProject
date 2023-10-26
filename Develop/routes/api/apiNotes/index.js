const router = require('express').Router();
const notes = require('../../../db/db.json');
const fs = require('fs');
const path = require('path');

router.get("/", (req, res) => {
    const parsedNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname + '../../../../db/db.json')));
    res.json(parsedNotes);
});
router.post("/", (req, res) => {
    console.log(req.body);
    console.log(notes);
});

module.exports = router;