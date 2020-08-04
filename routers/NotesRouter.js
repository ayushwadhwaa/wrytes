const express = require('express');
const Note = require('./../models/Note');
const NotesRouter = express.Router();
NotesRouter.get('', (req, res)=>{
    res.render('index');
});
NotesRouter.get('/notes', async (req, res)=> {
    if(req.query.noteId){
        const note = await Note.findOne({noteId: req.query.noteId});
        if(note){
            res.render('notes',{
                content: note.content
            });
        }else{
            res.render('notes',{
                content: "Hello!"
            });
        }
    }else{
        res.render('notes',{
            content: "No Pervious Content"
        });
    }
});
NotesRouter.post('/saveNote', async (req, res)=>{
    const preNote = await Note.findOne({noteId: req.query.noteId});
    if(preNote){
        preNote.content = req.body.content;
        await preNote.save();
        res.send("Updated");
    }else{
        const note = new Note({
            noteId: req.query.noteId,
            content: req.body.content
        });
        try{
            await note.save();
        }catch(err){
            console.log(err);
        }
        res.send("Saved");
    }
});
module.exports = NotesRouter;