import express from 'express';
const router = express.Router();
import passport from 'passport';
import Student from '../models/student.js';

router.get('/register', (req, res) => {
    res.render('auth/register');
});
router.post('/register', async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const student = new Student({ email, username });
        const registeredStudent = await Student.register(student, password);
        console.log(registeredStudent);
        req.login(registeredStudent, err => {
            if (err) return next(err);
            req.flash('success', `Bok ${student.username}`);
            res.redirect('/home');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register')
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    const { username } = req.body;
    req.flash('success', `Bok ${username}`);
    console.log(username);
    console.log(req.isAuthenticated());
    res.redirect('/home');
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Uspješno nisi više ulogiran/a');
    res.redirect('/home');
});

export default router;