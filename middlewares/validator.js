//check if the route parameter is a valid ObjectId type value
exports.validateId = (req, res, next) => {
    let id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        return next();
    } else {
        let err = new Error('Invalid trade id');
        err.status = 400;
        req.flash('error', err.message);
        return res.redirect('back');
        // return next(err);
    }
};