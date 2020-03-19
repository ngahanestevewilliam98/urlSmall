// Imports
const express = require('express');

// Middleware
const access = require('../middlewares/access');

/* GET, POST, PUT, DELETE REQUEST */
const urlCtrl = require('../controllers/url-mysql');

// Router
exports.router = (function () {

    let apiRouter = express.Router();

    /* Url routes */
    apiRouter.route('/url/list').get(access, urlCtrl.list);
    apiRouter.route('/url/:unique').get(access, urlCtrl.find);
    apiRouter.route('/url/add').post(access, urlCtrl.add);


    return apiRouter;

})();