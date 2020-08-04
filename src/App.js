const express = require('express');
const path = require('path');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');
app.get('', (req, res)=>{
    res.render('index');
});
app.listen(3000, ()=>{
    console.log("Server is up on port 3000");
});