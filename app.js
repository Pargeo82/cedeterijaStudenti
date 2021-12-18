const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const Schedule = require('./models/schedule');
const Student = require('./models/student');


mongoose.connect('mongodb://localhost:27017/studenti');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.get('/', (req, res) => {
    res.render('home');
});





app.listen(3000, () => {
    console.log('Serving on port 3000');
})