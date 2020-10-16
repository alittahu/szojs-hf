/**
 * Checks if the email is in the database. If it is, call next()
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};