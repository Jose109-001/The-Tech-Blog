// basically, using express' next(), if a user isn't loggedIn, redirect
const withAuth = (req, res, next) => {
    if(!req.session.user_id) {
        next()
        //res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;