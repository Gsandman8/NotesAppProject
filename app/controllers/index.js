//Links node packages required for this file
const path = require('path');
const { v4: uuid } = require('uuid');
const fs = require('fs');
//Creates the sendIndexHtml function that sends the index.html file
const sendIndexHtml = (req, res) => {
    res.sendFile(path.resolve(__dirname + "../../public/index.html"));
}
//Creates the sendNotesHtml function that sends the notes.html file
const sendNotesHtml = (req, res) => {
    res.sendFile(path.resolve(__dirname +  "../../public/notes.html"));
}
//Creates the getNotes function that reads the db.json file and sends the parsed data
const getNotes = (req, res) => {
    const parsedNotes = JSON.parse(fs.readFileSync(path.resolve(__dirname + '../../db/db.json')));
    res.json(parsedNotes); 
}
//Creates the postNote function
const postNote = (req, res) => {
    //creates the NewNote object
    const newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.text
    };
    //assigns the noteV1 variable to the parsed db.json file
    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../db/db.json")));
    //pushes the newNote object to the noteV1 array
    noteV1.push(newNote);
    //writes the noteV1 array to the db.json file
    fs.writeFileSync(path.resolve(__dirname + "../../db/db.json"), JSON.stringify(noteV1));
    //sends the noteV1 array
    res.json(noteV1);
}
//Creates the deleteNote function
const deleteNote = (req, res) => {
    //assigns the noteId variable to the id parameter
    const noteId = req.params.id;
    //assigns the noteV1 variable to the parsed db.json file
    const noteV1 = JSON.parse(fs.readFileSync(path.resolve(__dirname + "../../db/db.json")));
    //filters the noteV1 array to remove the note with the id parameter
    const noteV2 = noteV1.filter(note => note.id !== noteId);
    //writes the noteV2 array to the db.json file
    fs.writeFileSync(path.resolve(__dirname + "../../db/db.json"), JSON.stringify(noteV2));
    //sends the noteV2 array
    res.json(noteV2);
}


//exports the functions
module.exports = {
    sendIndexHtml,
    sendNotesHtml,
    getNotes,
    postNote,
    deleteNote
}