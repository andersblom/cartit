'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    isPro: Boolean,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now }, //test purposes: 1501249604563
    lists: Array
});

module.exports = mongoose.model('User', UserSchema);