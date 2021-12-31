import express from 'express';
import path from 'path';
import ejsMate from 'ejs-mate';
import mongoose from 'mongoose';
const app = express();
// const Schedule = require('./models/schedule');
// const Student = require('./models/student');



mongoose.connect('mongodb://localhost:27017/studenti');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(
    import.meta.url)
const __dirname = dirname(__filename)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.get('/', (req, res) => {
    res.render('home');
});





app.listen(3000, () => {
    console.log('Serving on port 3000');
})