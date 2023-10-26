const path = require('path');
const { v4: uuid } = require('uuid');
const fs = require('fs');

const sendIndexHtml = (req, res) => {
    res.sendFile(path.resolve(__dirname + "../../public/index.html"));
}

const sendNotesHtml = (req, res) => {
    res.sendFile(path.resolve(__dirname +  "../../public/notes.html"));
}

const getNotes = (req, res) => {
    const parsedNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname + '../../db/db.json')));
    res.json(parsedNotes); 
}

const postNote = (req, res) => {
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };

    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../db/db.json")));
    noteV1.push(newNote);
    fs.writeFileSync(path.resolve(__dirname + "../../db/db.json"), JSON.stringify(noteV1));
    res.json(noteV1);
}

const deleteNote = (req, res) => {
    const noteId = req.params.id;
    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../db/db.json")));
    const noteV2 = noteV1.filter(note => note.id !== noteId);
    fs.writeFileSync(path.resolve(__dirname + "../../db/db.json"), JSON.stringify(noteV2));
    res.json(noteV2);
}



module.exports = {
    sendIndexHtml,
    sendNotesHtml,
    getNotes,
    postNote,
    deleteNote
}