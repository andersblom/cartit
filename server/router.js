'use strict';
var express = require("express");
var router = express.Router();
const _ = require("lodash");
const User = require("./model/models");
const List = require("./model/models");
const ListEntry = require("./model/models");

// Get user
router.route('/user/:username').get((req, res) => {
    User.findOne({ username: req.params.username}, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (!user) {
            res.json({error: `User '${req.params.username}' was not found`});
        } else {
            if (user.username === req.params.username) {
                res.json(user);
            }
        } 
    });
})

// Create user
router.route('/user/:username').post((req, res) => {
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (!user) {
            const userToBeAdded = new User();
            userToBeAdded.username = req.body.username;
            userToBeAdded.isPro = req.body.isPro;
            userToBeAdded.password = req.body.password;
            userToBeAdded.email = req.body.email;
            userToBeAdded.createdAt = req.body.createdAt;

            userToBeAdded.save(err => {
                if (err) {
                    res.send(err);
                }
                res.status(200).json({
                    message: "User was created"
                });
            });
        } else if (user) {
            res.status(400).json({
                error: {
                    message: "User already exists"
                }
            });
        }
    });
});

// Create list
router.route('/user/:username/list/create').put((req, res) => {
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (!user) {
            res.status(400).json({
                error: {
                    message: "User was not found"
                } 
            });
        } else if (user) {
            const listItemsOld = user.lists;

            const listItemNew = new List();
            listItemNew.title = req.body.title
            
            const listsItemsMerged = listItemsOld.concat(listItemNew);

            User.update({ 'username': req.params.username }, listsItemsMerged, (err, raw) => {
                if (err) {
                    res.send(err);
                }
                res.json(raw);
                /* 
                TODO: Doesn't send the title and returns:
                {
                    "ok": 0,
                    "n": 0,
                    "nModified": 0
                }
                */
            })
        }
    });
});

// Get users list by ID
router.route('/user/:username/list/:id').get((req, res) => {
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            const listMatch = _.find(user.lists, o => {
                return o.listId == req.params.id;
            })
            if (!listMatch) {
                res.json({
                    error: {
                        message: `List id: ${req.params.id} was not found`
                    }
                });
            } else {
                // Send list[id] back
                res.json(listMatch);
            }
        } else {
            res.status(400).json({
                error: {
                    message: "User was not found"
                } 
            });
        }
    });
});

//Update users list
router.route('/user/:username/list/:id').put((req, res) => {
    User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
            res.send(err);
        }
        if (user) {
            // The doc-data that needs to be updated.
            const doc = {
                'lists': req.body.lists
            }
            User.update({ 'username': req.params.username }, doc, (err, raw) => {
                if (err) {
                    res.send(err);
                }
                res.json(raw);
            })
        } else {
            res.status(400).json({
                error: {
                    message: "User was not found"
                } 
            });
        }
    });
});

module.exports = router;