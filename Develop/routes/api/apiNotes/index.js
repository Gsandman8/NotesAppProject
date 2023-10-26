const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {v4:uuid} = require('uuid');

router.get("/", (req, res) => {
    const parsedNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname + '../../../../db/db.json')));
    res.json(parsedNotes);
});

router.post("/", (req, res) => {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };

    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../../../db/db.json")));
    noteV1.push(newNote);
    fs.writeFileSync(path.resolve(__dirname + "../../../../db/db.json"), JSON.stringify(noteV1));
    res.json(noteV1);
});

router.delete("/:id", (req, res) => {
    const noteId = req.params.id;
    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../../../db/db.json")));
    const noteV2 = noteV1.filter(note => note.id !== noteId);
    fs.writeFileSync(path.resolve(__dirname +  "../../../../db/db.json"), JSON.stringify(noteV2));
    res.json(noteV2);
});

module.exports = router;