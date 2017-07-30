'use strict';
var express = require("express");
var router = express.Router();
const _ = require("lodash");
const User = require("./model/models").User;

// userID param
router.param("userID", (req, res, next, id) => {
    User.findById(id, (err, doc) => {
        if (err) return next(err);
        if (!doc) {
            err = new Error("Not found");
            err.status = 404;
            return next(err);
        }
        req.user = doc;
        return next();
    });
});

// listID param
router.param("listID", (req, res, next, id) => {
    req.list = req.user.lists.id(id);
    if (!req.list) {
        err = new Error("Not found");
        err.status = 404;
        return next(err);
    }
    next();
});

/*
 * GET /user/:userID
 * Used for retrieving user information when logging in/displaying lists
 */
router.get("/user/:userID", (req, res, next) => {
    res.json(req.user)
});

/*
 * GET /user/:userID/lists
 * Used for retrieving list contents
 */
router.get("/user/:userID/lists", (req, res, next) => {
    res.json(req.user.lists);
});


/*
 * GET /user/:userID/lists/listID
 * Used for retrieving list contents
 */
router.get("/user/:userID/lists/:listID", (req, res, next) => {
    res.json(req.list);
});




module.exports = router;