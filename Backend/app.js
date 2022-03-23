const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes')
const app = express();

// Middlewares
app.use(express.json());
app.use("/books", router); // Localhost: 5001/books 

mongoose.connect(
    "mongodb+srv://admin:uUcEXHxeoJ0gkV4M@cluster0.23tu5.mongodb.net/bookstore?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5001);
})
.catch((err) => console.log(err))

// MongoDB password: uUcEXHxeoJ0gkV4M 