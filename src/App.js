const express = require('express');
const path = require('path');
const app = express();
const NotesRouter = require('./../routers/NotesRouter');
const publicDirectoryPath = path.join(__dirname, '../public');
require('./../db/mongoose');
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.set('view engine', 'hbs');
app.use(NotesRouter);
app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});