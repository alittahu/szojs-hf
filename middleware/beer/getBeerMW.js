/**
 * Load a beer from the database using the :beerid param
 * The result is saved to res.locals.beer
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};