const authMW = require('../middleware/auth/authMW');
const getUserByEmailMW = require('../middleware/auth/getUserByEmailMW');
const checkProfileLoginMW = require('../middleware/auth/checkProfileLoginMW');
const handleWrongPassMW = require('../middleware/auth/handleWrongPassMW');
const sendPasswordMW = require('../middleware/auth/sendPasswordMW');
const regProfileMW = require('../middleware/auth/regProfileMW');
const getFiltersMW = require('../middleware/beer/getFiltersMW');
const getSortingMW = require('../middleware/beer/getSortingMW');
const getBeerMW = require('../middleware/beer/getBeerMW');
const saveBeerMW = require('../middleware/beer/saveBeerMW');
const getBeersMW = require('../middleware/beer/getBeersMW');
const delBeerMW = require('../middleware/beer/delBeerMW');
const getProfileMW = require('../middleware/profile/getProfileMW');
const saveProfileMW = require('../middleware/profile/saveProfileMW');

module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        authMW(objRepo),
        getFiltersMW(objRepo),
        getSortingMW(objRepo),
        getBeersMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/profile/:userid',
        authMW(objRepo),
        getProfileMW(objRepo),
        saveProfileMW(objRepo),
        renderMW(objRepo, 'details'));
    app.get('/mybeers/:userid',
        authMW(objRepo),
        getBeersMW(objRepo),
        renderMW(objRepo, 'mybeers'));
    app.get('/favourites/:userid',
        authMW(objRepo),
        getBeersMW(objRepo),
        renderMW(objRepo, 'myfavoritebeers'));
    app.get('/favourites/:userid/del/:beerid',
        authMW(objRepo),
        getBeerMW(objRepo),
        delBeerMW(objRepo));

    app.use('/mybeers/:userid/edit/:beerid',
        authMW(objRepo),
        getBeerMW(objRepo),
        saveBeerMW(objRepo),
        renderMW(objRepo, 'editBeer'));

    app.get('/mybeers/:userid/del/:beerid',
        authMW(objRepo),
        getBeerMW(objRepo),
        delBeerMW(objRepo));

    app.use('/mybeers/:userid/new',
        authMW(objRepo),
        saveBeerMW(objRepo),
        renderMW(objRepo, 'editBeer'));
    app.use('/login',
        getUserByEmailMW(objRepo),
        checkProfileLoginMW(objRepo),
        handleWrongPassMW(objRepo),
        renderMW(objRepo, 'login'));
    app.use('/forgotpassword',
        getUserByEmailMW(objRepo),
        sendPasswordMW(objRepo),
        renderMW(objRepo, 'forgotPassword'));
    app.use('/registration',
        regProfileMW(objRepo),
        renderMW(objRepo, 'registration'));
    app.get('/:beerid',
        authMW(objRepo),
        getBeerMW(objRepo),
        renderMW(objRepo, 'view'));
};