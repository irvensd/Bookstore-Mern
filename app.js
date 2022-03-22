const express = require('express');
const mongoose = require('mongoose');


const app = express();

// Middlewares 
app.use('/', (req, res, next) => {
    res.send("This is our")
})


mongoose.connect(
    "mongodb+srv://admin:uUcEXHxeoJ0gkV4M@cluster0.23tu5.mongodb.net/bookstore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5001);
})
.catch((err) => console.log(err))

// MongoDB password: uUcEXHxeoJ0gkV4M 