'use strict';
var express = require("express");
var router = express.Router();
const _ = require("lodash");
const User = require("./model/user");
const List = require("./model/list");
const ListEntry = require("./model/listentry");

router.route('/user/:username')
    .get((req, res) => {
        User.findOne({ 'username': req.params.username}, (err, user) => {
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
    .post((req, res) => {
        User.findOne({ 'username': req.params.username }, (err, user) => {
            if (err) {
                res.send(err);
            }
            if (!user) {
                let userToBeAdded = new User();
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
        })
    })
;

router.route('/user/:username/list/:id')
    .get((req, res) => {
        User.findOne({ 'username': req.params.username }, (err, user) => {
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
    })
    .put((req, res) => {
        res.json({
            message: "got PUT request"
        })
    })
;

module.exports = router;