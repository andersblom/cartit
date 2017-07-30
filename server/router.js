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
 * User creation
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
                res.json(newUser);
            });
        }
    });
});

/*
 * PUT /user/:userID
 * User update profile
 */
router.put("/user/:userID", (req, res, next) => {
    // Checking if the user exists
    User.findOne({ _id: req.params.userID }, (err, user) => {
        if (user) {
            User.update(req.body, (err, user) => {
                if (err) return next(err);
                res.json(user);
            });
        } else {
            // If user doesn't exist.
            res.status(400).json({error: { message: "User doesn't exist" }});
        }
    });
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
 * Used for retrieving list info + contents
 */
router.get("/user/:userID/lists/:listID", (req, res, next) => {
    res.json(req.list);
});

/*
 * PUT /user/:userID/lists/:listID
 * Updating a specific list that belongs to a specific user
 */
router.put("/user/:userID/lists/:listID", (req, res, next) => {
    req.list.updateListToUser(req.body, function(err, user) {
        if (err) return next(err);
        res.json(user);
    });
});

/*
 * POST /user/:userID/lists
 * Creating a new list to a specific user
 */
router.post("/user/:userID/lists", (req, res, next) => {
    // Add list to array
    req.user.lists.push(req.body);

    req.user.save((err, user) => {
        if (err) return next(err);
        res.status(201);
        res.json(user);
    });
    
});


module.exports = router;