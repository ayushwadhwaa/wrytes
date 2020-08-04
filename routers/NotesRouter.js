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
                content: note.content,
                id: req.query.noteId
            });
        }else{
            res.render('notes',{
                content: "Hello!",
                id: req.query.noteId
            });
        }
    }else{
        res.render("Please Provide noteId in url");
    }
});
NotesRouter.post('/saveNote', async (req, res)=>{
    if(req.body.content.length === 0){
        const preNote = await Note.findOne({noteId: req.query.noteId});
        if(preNote){
            try{
                await Note.deleteOne({noteId: req.query.noteId});
                res.send({status: "Deleted"})
            }catch(err){
                res.send("Error");
            }   
        }
    }else{
        const preNote = await Note.findOne({noteId: req.query.noteId});
        if(preNote){
            preNote.content = req.body.content;
            try{
                await preNote.save();
                res.send({status: "updated"});
            }catch(err){
                res.send("Error");
            }
        }else{
            const note = new Note({
                noteId: req.query.noteId,
                content: req.body.content
            });
            try{
                await note.save();
                res.send({status:"saved"});
            }catch(err){
                res.send("Error");
            }
        }
    }
});
module.exports = NotesRouter;