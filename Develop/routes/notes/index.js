const router = require('express').Router();
const path = require('path');
const { sendNotesHtml } = require("../../controllers");

router.get("/", sendNotesHtml);


module.exports = router;