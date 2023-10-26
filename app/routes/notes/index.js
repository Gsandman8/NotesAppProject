
//Sets up the router
const router = require('express').Router();
//Links the sendNotesHtml from module.exports from controllers/index.js
const { sendNotesHtml } = require("../../controllers");
//Use sendNotesHtml for all note routes
router.get("/", sendNotesHtml);

//exports the router
module.exports = router;