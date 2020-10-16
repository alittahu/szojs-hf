/**
 * If the user is authenticated, call next, otherwise redirect to /login
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};