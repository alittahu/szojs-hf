/**
 * Removes a beer from the database, the entity used here is: res.locals.beer
 * Redirects to /mybeers/:userid or /favourites/userid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};