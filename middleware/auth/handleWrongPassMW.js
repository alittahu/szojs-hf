/**
 * Handles if the password is wrong. If it is, then call next(), otherwise redirect to /
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};