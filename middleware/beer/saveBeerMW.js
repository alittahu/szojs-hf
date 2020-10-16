/**
 * Using POST params update or save a befott to the database
 * If res.locals.beer is there, it's an update otherwise this middleware creates an entity
 * Redirects to /mybeers/:userid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};