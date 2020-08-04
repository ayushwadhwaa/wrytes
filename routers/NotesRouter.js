const express = require('express');
const NotesRouter = express.Router();
NotesRouter.get('', (req, res)=>{
    res.render('index');
});
NotesRouter.get('/notes', (req, res)=> {
    res.render('notes');
});
module.exports = NotesRouter;