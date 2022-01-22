const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'Ulogiraj se!');
        return res.redirect('/login');
    }
    next();
};

export default isLoggedIn;