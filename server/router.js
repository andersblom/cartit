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
 * POST /user
 * 
 */
router.post("/user", (req, res, next) => {
    // Creating new user from model
    const newUser = new User(req.body);

    // Checking if the username already exists
    User.findOne({ username: newUser.username }, (err, user) => {
        if (user) {
            // If user exists
            res.status(400).json({error: { message: "User already exists" }});
        } else {
            // If user doesn't exist.
            newUser.save((err, newUser) => {
                if (err) return next(err);
                res.status(201);
            });
            res.json(newUser);
        }
    });
});

/*
 * PUT /user/:userID
 * 
 */
router.put("/user/:userID", (req, res, next) => {
    res.json({message: "/user/ID PUT "});
});

/*
 * GET /user/:userID/lists
 * Used for retrieving list contents
 */
router.get("/user/:userID/lists", (req, res, next) => {
    res.json(req.user.lists);
});


/*
 * GET /user/:userID/lists/:listID
 * Used for retrieving list contents
 */
router.get("/user/:userID/lists/:listID", (req, res, next) => {
    res.json(req.list);
});

/*
 * PUT /user/:userID/lists/:listID
 * 
 */
router.put("/user/:userID/lists/:listID", (req, res, next) => {
    res.json({message: "/user/ID/lists/ID PUT "});
});

/*
 * POST /user/:userID/lists
 * 
 */
router.post("/user/:userID/lists", (req, res, next) => {
    res.json({message: "/user/ID/lists POST "});
});


module.exports = router;