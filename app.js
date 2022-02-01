import express from 'express';
import path from 'path';
import ejsMate from 'ejs-mate';
import session from 'express-session';
import flash from 'connect-flash';
import mongoose from 'mongoose';
const app = express();
import passport from 'passport';
import LocalStrategy from 'passport-local';
import Student from './models/student.js';
import Schedule from './models/schedule.js';
import isLoggedIn from './middleware.js';




import userRoutes from './routes/student.js'


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
app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
    secret: 'aquarius',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Student.authenticate()));

passport.serializeUser(Student.serializeUser());
passport.deserializeUser(Student.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})



app.use('/', userRoutes);

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/adminhome', isLoggedIn, async (req, res) => {
    const students = await Student.find({});
    res.render('adminhome', { students });
});

app.get('/termin', isLoggedIn, (req, res) => {
    res.render('termin');
})


app.listen(3000, () => {
    console.log('Serving on port 3000');
})